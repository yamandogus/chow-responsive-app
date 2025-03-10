"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { store } from "./store/store";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Provider store={store}>
          <NextUIProvider>
            <Navbar />
            <div className="min-h-screen">
              {children}
            </div>
            <Footer />
            <Toaster position="top-right" />
          </NextUIProvider>
        </Provider>
      </body>
    </html>
    </SessionProvider>
  );
}
