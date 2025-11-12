import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yyy • Adaptive Experience Orchestrator",
  description:
    "Yyy orchestrates every customer touchpoint in real time, generating measurable growth with adaptive experiences that learn in milliseconds.",
  openGraph: {
    title: "Yyy — Adaptive Experience Orchestrator",
    description:
      "Fuse signals into orchestrated journeys that compound retention, revenue, and delight.",
    url: "https://agentic-3e937940.vercel.app",
    siteName: "Yyy",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Abstract gradient graph illustrating adaptive systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yyy — Adaptive Experience Orchestrator",
    description:
      "Design, launch, and continuously evolve every experience with a unified signal graph.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
