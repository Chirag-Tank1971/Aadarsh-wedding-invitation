import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadarsh & Pragya — Wedding Celebration",
  description: "Wedding celebrations of Aadarsh & Pragya in Ghaziabad, 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
