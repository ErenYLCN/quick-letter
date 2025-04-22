import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";

export async function POST(request: Request) {
  try {
    console.log(request);

    const doc = new PDFDocument();

    console.log(doc);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
