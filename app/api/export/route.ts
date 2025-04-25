import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(_request: Request) {
  try {
    console.log(fs);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
