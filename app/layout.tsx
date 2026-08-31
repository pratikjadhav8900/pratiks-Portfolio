import type { Metadata } from "next";
import "./globals.css";
import "@/components/portfolio.css";

export const metadata: Metadata = {
  title: "Pratik Jadhav — Digital Products & Software",
  description: "Portfolio of Pratik Jadhav — digital products, software and web experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}