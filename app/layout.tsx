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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="ETtye2Idjt2U7oRDQJVrK";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `,
          }}
        />
      </body>
    </html>
  );
}
