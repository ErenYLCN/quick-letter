import type { Metadata } from "next";
import { Geist, Geist_Mono as GeistMono } from "next/font/google";
import "./styles/_globals.css";
import "./styles/override/_button.css";
import "./styles/override/_textarea.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick Letter",
  description: "Get those letters out fast!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <React.StrictMode>{children}</React.StrictMode>
      </body>
    </html>
  );
}
