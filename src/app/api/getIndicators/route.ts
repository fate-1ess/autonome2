import { NextResponse } from "next/server";
import { fetchIndicatorData } from "@/lib/indicators";

export async function GET() {
  try {
    const { currentTime, allIndicatorData } = await fetchIndicatorData();
    return NextResponse.json({
      current_time: currentTime,
      all_indicator_data: allIndicatorData,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error while fetching indicators";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
