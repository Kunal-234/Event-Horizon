import type { Metadata } from "next";
import { Inter, Audiowide } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audiowide",
  preload: true,
});

export const metadata: Metadata = {
  title: "Event Horizon",
  description: "Once you cross it, there's no going back",
  icons: {
    icon: '/favicon.jpg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Event Horizon",
    description: "Once you cross it, there's no going back",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Horizon",
    description: "Once you cross it, there's no going back",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
