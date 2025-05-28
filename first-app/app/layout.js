import "./globals.css";
import Header from "@/components/header/header";
import Nav from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

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
      <body className="">
        <Header /> 
        <Nav />    
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
