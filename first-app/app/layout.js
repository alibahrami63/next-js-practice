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

export const metadata = {
  title: "Ali Bahrami's Portfolio",
  description: "This is Ali Bahrami's Portfolio built with Next.js",
  keywords: "Ali Bahrami, portfolio, Next.js, web development",
  authors: [{ name: "Ali Bahrami", url: "" }],
  creator: "Ali Bahrami",
  openGraph: {
    title: "Ali Bahrami's Portfolio",
    description: "This is Ali Bahrami's Portfolio built with Next.js",
    url: "https://your-portfolio-url.com",
    siteName: "Ali Bahrami's Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Ali Bahrami's Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>        
        {children}
      </body>
    </html>
  );
}
