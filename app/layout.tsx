import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lavendish Leisure | Hotels & Resorts in Sri Lanka",
  description: "Discover ten Lavendish Leisure hotels across eight Sri Lankan destinations. Explore local offers, family stays, wildlife, culture, lakes, hills and beach holidays.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
