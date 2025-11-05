import { AccountSnapshot, ExchangeSimulatorOptions, OrderExecution, OrderSide, PositionSummary } from "./types";

interface PositionInternal {
  quantity: number;
  avgEntryPrice: number;
  realizedPnl: number;
  markPrice: number;
}

export class AccountState {
  private static readonly CASH_EPSILON = 1e-6;
  private cashBalance: number;
  private readonly quoteCurrency: string;
  private readonly positions = new Map<string, PositionInternal>();
  private totalRealized = 0;
  private totalFees = 0;

  constructor(private readonly options: ExchangeSimulatorOptions) {
    this.cashBalance = options.initialCapital;
    this.quoteCurrency = options.quoteCurrency;
  }

  previewCashImpact(side: OrderSide, execution: OrderExecution): number {
    if (execution.status === "rejected" || execution.totalQuantity === 0) {
      return 0;
    }

    const direction = side === "buy" ? 1 : -1;
    let delta = 0;

    for (const fill of execution.fills) {
      const signedQty = direction * fill.quantity;
      delta -= signedQty * fill.price;
      delta -= fill.fee;
    }

    return delta;
  }

  hasSufficientCash(side: OrderSide, execution: OrderExecution): boolean {
    const impact = this.previewCashImpact(side, execution);
    if (impact >= 0) {
      return true;
    }

    const projected = this.cashBalance + impact;
    return projected >= -AccountState.CASH_EPSILON;
  }

  applyExecution(symbol: string, side: OrderSide, execution: OrderExecution) {
    if (execution.status === "rejected" || execution.totalQuantity === 0) {
      return;
    }

    const direction = side === "buy" ? 1 : -1;

    for (const fill of execution.fills) {
      const signedQty = direction * fill.quantity;

      // Deduct the cost/credit of the fill and the fee from cash
      this.cashBalance -= signedQty * fill.price;
      this.cashBalance -= fill.fee;

      const existing = this.positions.get(symbol) ?? {
        quantity: 0,
        avgEntryPrice: 0,
        realizedPnl: 0,
        markPrice: fill.price,
      };

      // If no existing position or adding to existing position in same direction
      if (existing.quantity === 0 || Math.sign(existing.quantity) === Math.sign(signedQty)) {
        const totalQty = existing.quantity + signedQty;
        const prevNotional = existing.avgEntryPrice * Math.abs(existing.quantity);
        const newNotional = fill.price * Math.abs(signedQty);
        existing.quantity = totalQty;
        existing.avgEntryPrice = totalQty !== 0 ? (prevNotional + newNotional) / Math.abs(totalQty) : 0;
      } else {
        // Reducing or flipping position
        const closingQty = Math.min(Math.abs(existing.quantity), Math.abs(signedQty));
        
        // Calculate realized PnL on the closed portion
        const realized = existing.quantity > 0
          ? (fill.price - existing.avgEntryPrice) * closingQty
          : (existing.avgEntryPrice - fill.price) * closingQty;

        existing.realizedPnl += realized;
        this.totalRealized += realized;

        const remainingQty = existing.quantity + signedQty;
        
        if (remainingQty === 0) {
          // Position fully closed
          existing.quantity = 0;
          existing.avgEntryPrice = 0;
          // Keep realized PnL for this fill (it will be reported then cleared)
        } else if (Math.sign(remainingQty) === Math.sign(existing.quantity)) {
          // Position reduced but same direction
          existing.quantity = remainingQty;
          // avgEntryPrice stays the same
        } else {
          // Position flipped to opposite direction - this is a NEW position
          existing.quantity = remainingQty;
          existing.avgEntryPrice = fill.price;
          // Note: we keep the realized PnL from the flip for reporting,
          // but the new opposite position starts fresh
        }
      }

      existing.markPrice = fill.price;
      this.totalFees += fill.fee;

      // Only delete if both quantity and realized PnL are zero
      // Keep positions with zero quantity if they have realized PnL to report
      if (existing.quantity === 0 && Math.abs(existing.realizedPnl) < 0.01) {
        this.positions.delete(symbol);
      } else {
        this.positions.set(symbol, existing);
      }
    }
  }

  updateMarkPrice(symbol: string, markPrice: number) {
    const position = this.positions.get(symbol);
    if (!position) return;
    position.markPrice = markPrice;
  }

  getSnapshot(): AccountSnapshot {
    const positions: PositionSummary[] = [];
    let unrealizedTotal = 0;
    let netPositionValue = 0; // Signed market value of all positions

    for (const [symbol, position] of this.positions.entries()) {
      // Skip positions with zero quantity
      if (position.quantity === 0) continue;
      
      const side = position.quantity >= 0 ? "LONG" : "SHORT";
      const absoluteQuantity = Math.abs(position.quantity);
      
      // Unrealized PnL is the difference between current value and entry cost
      const unrealized = side === "LONG"
        ? (position.markPrice - position.avgEntryPrice) * absoluteQuantity
        : (position.avgEntryPrice - position.markPrice) * absoluteQuantity;
      unrealizedTotal += unrealized;
      
      // Signed position value reflects long vs short exposure
      netPositionValue += position.markPrice * position.quantity;
      
      positions.push({
        symbol,
        quantity: absoluteQuantity,
        side,
        avgEntryPrice: position.avgEntryPrice,
        realizedPnl: position.realizedPnl,
        unrealizedPnl: unrealized,
        markPrice: position.markPrice,
      });
    }

    // Equity = cash + current value of all positions
    // This represents your total account value
    const equity = this.cashBalance + netPositionValue;
    
    // Available cash stays non-negative; borrowed balance tracks margin usage
    const availableCash = Math.max(this.cashBalance, 0);
    const borrowedBalance = Math.max(-this.cashBalance, 0);

    return {
      cashBalance: this.cashBalance,
      availableCash,
      borrowedBalance,
      equity,
      marginBalance: equity,
      quoteCurrency: this.quoteCurrency,
      positions,
      totalRealizedPnl: this.totalRealized,
      totalUnrealizedPnl: unrealizedTotal,
    };
  }

  getOpenPositions(): PositionSummary[] {
    return this.getSnapshot().positions;
  }
}
