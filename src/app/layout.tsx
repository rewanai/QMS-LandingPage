// src/app/layout.tsx
import { Inter as FontSans } from "next/font/google";
import { Anton } from "next/font/google"; // Import Anton font
import '../assets/fonts/fonts.css';
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const anton = Anton({
  // Configure Anton font
  subsets: ["latin"],
  weight: "400", // Anton typically only has the 400 weight
  variable: "--font-anton",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          anton.variable // Add Anton's CSS variable here
        )}
      >
        {children}
      </body>
    </html>
  );
}
