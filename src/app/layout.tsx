import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cocktail",
  description: "The best Cocktail in town",
  icons: {
    icon: "images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
