import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import React, { ReactNode } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Your metadata here
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: '1' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;