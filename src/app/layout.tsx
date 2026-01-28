import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Italiano Ristorante",
  description: "Discover a gastronomic experience that transports you to the heart of Italy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-gilda bg-[#0f0f0f] text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
