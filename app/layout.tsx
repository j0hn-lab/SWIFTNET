import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftNet Kenya | Blazing Fast Fibre Internet",
  description:
    "Kenya's fastest home & business fibre internet. Speeds from 100Mbps to 1Gbps. Free installation, free router. Available in Nairobi & beyond.",
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