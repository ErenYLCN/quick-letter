import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";

// Helper function to stream PDF content into a buffer
async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

export async function POST(request: Request) {
  console.log(request);

  try {
    // Optionally: Get data from the request body to customize the PDF
    // const body = await request.json();
    // const { title, content } = body;

    const doc = new PDFDocument();

    // Pipe the PDF document to a buffer
    const stream = doc as unknown as NodeJS.ReadableStream; // Cast needed for type compatibility

    // Add content to the PDF
    doc.fontSize(25).text("My PDF Document", 100, 80);
    doc.fontSize(12).text("This is some sample text generated on the server.", 100, 150);
    // Add more content based on request body if needed
    // doc.text(`Title: ${title}`);
    // doc.text(`Content: ${content}`);

    // Finalize the PDF and end the stream
    doc.end();

    // Convert the stream to a buffer
    const pdfBuffer = await streamToBuffer(stream);

    // Return the PDF buffer as a response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="generated_document.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
