import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import fs from "fs";

export async function POST(_request: Request) {
  try {
    console.log(fs);

    const doc = new PDFDocument();

    console.log(doc);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
