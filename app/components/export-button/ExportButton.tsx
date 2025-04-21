"use client";

import React from "react";
import Button from "../button/Button";

function ExportButton() {
  return (
    <Button
      onClick={async () => {
        const response = await fetch("/api/export", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // Create a blob from the PDF stream
          const blob = await response.blob();
          // Create a link to download it
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "quick-letter.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } else {
          console.error("Failed to generate PDF");
        }
      }}
    >
      {"Export as PDF"}
    </Button>
  );
}

export default ExportButton;
