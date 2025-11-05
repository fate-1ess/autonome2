import { OrderApi } from "../../../lighter-sdk-ts/generated";
import { MarketMetadata, OrderBookLevel, OrderBookSnapshot, OrderBookSource } from "./types";

class OrderBook {
  private snapshot: OrderBookSnapshot;

  constructor(private readonly metadata: MarketMetadata) {
    this.snapshot = {
      symbol: metadata.symbol,
      bids: [],
      asks: [],
      midPrice: 0,
      spread: 0,
      timestamp: Date.now(),
    };
  }

  private convertLevel(order: OrderBookSource["asks"][number]): OrderBookLevel {
    // The API already returns decimal strings, so just parse them directly
    const quantity = Number(order.remainingBaseAmount);
    const price = Number(order.price);
    return { price, quantity };
  }

  update(raw: OrderBookSource): OrderBookSnapshot {
    const bids = (raw.bids ?? []).map((order) => this.convertLevel(order));
    const asks = (raw.asks ?? []).map((order) => this.convertLevel(order));

    const bestBid = bids[0]?.price;
    const bestAsk = asks[0]?.price;
    const midPrice = bestBid && bestAsk ? (bestBid + bestAsk) / 2 : bestBid ?? bestAsk ?? this.snapshot.midPrice;
    const spread = bestBid && bestAsk ? bestAsk - bestBid : 0;

    this.snapshot = {
      symbol: this.metadata.symbol,
      bids,
      asks,
      midPrice,
      spread,
      timestamp: Date.now(),
    };

    return this.snapshot;
  }

  getSnapshot(): OrderBookSnapshot {
    return this.snapshot;
  }

  getMidPrice(): number {
    return this.snapshot.midPrice;
  }
}

export class MarketState {
  private readonly orderApi: OrderApi;
  private readonly depth: number;
  private readonly orderBook: OrderBook;

  constructor(
    private readonly metadata: MarketMetadata,
    orderApi: OrderApi,
    depth = 50
  ) {
    this.orderApi = orderApi;
    this.depth = depth;
    this.orderBook = new OrderBook(metadata);
  }

  async refresh(): Promise<OrderBookSnapshot> {
    const raw = await this.orderApi.orderBookOrders(this.metadata.marketId, this.depth);
    return this.orderBook.update(raw);
  }

  getSnapshot(): OrderBookSnapshot {
    return this.orderBook.getSnapshot();
  }

  getMidPrice(): number {
    return this.orderBook.getMidPrice();
  }
}
