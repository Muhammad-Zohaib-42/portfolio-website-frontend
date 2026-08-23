import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Zohaib | Full-Stack MERN Developer Portfolio",
  description: "Explore the portfolio of Muhammad Zohaib, a Full-Stack MERN Developer specializing in building high-performance web applications with React, Tailwind, TypeScript, Next.js, Node.js, and MongoDB.",
  keywords: ["Muhammad Zohaib", "Full-Stack Developer", "MERN Stack", "Next.js Developer", "React Developer", "Web Developer"],
  authors: [{ name: "Muhammad Zohaib" }],
  openGraph: {
    title: "Muhammad Zohaib | Full-Stack MERN Developer",
    description: "Explore the portfolio of Muhammad Zohaib, a Full-Stack MERN Developer specializing in modern web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Zohaib Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zohaib | Full-Stack MERN Developer",
    description: "Explore the portfolio of Muhammad Zohaib, a Full-Stack MERN Developer specializing in modern web applications.",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
