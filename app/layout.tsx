import type { Metadata } from "next";
import { Audiowide, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audiowide",
});

export const metadata: Metadata = {
  title: "Event Horizon",
  description: "Once you cross it, there's no going back",
  icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={audiowide.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
