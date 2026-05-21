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
  title: "Wishe | Reinvented Gifting",
  description:
    "Wishe is a social gifting app where friends can contribute toward wishes, birthdays, experiences, and meaningful gifts together.",
  keywords: [
    "Wishe",
    "gifting app",
    "social gifting",
    "wishlist app",
    "birthday gifts",
    "group gifting",
    "gift contributions",
    "digital gifting",
    "shared gifts",
    "wishlists",
  ],
  openGraph: {
    title: "Wishe | Reinvented Gifting",
    description:
      "A social gifting app where friends come together to contribute toward wishes that actually matter.",
    url: "https://wishe.app",
    siteName: "Wishe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishe | Reinvented Gifting",
    description:
      "A social gifting app where friends come together to contribute toward wishes that actually matter.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
