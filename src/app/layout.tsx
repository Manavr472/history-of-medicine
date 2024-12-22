import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from './providers'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ThemeSwitch from "./components/ThemeSwitch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Itihasa XR",
  description: "Experience the past like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer/>
            <div className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg dark:bg-black"><ThemeSwitch /></div>
        </Providers>
      </body>
    </html>
  );
}
