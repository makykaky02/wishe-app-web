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

const canonicalDescription =
  "wishe is reinventing gifting culture by bringing friends together to contribute toward meaningful wishes while keeping each person’s exact contribution amount private.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wishe.app/#organization",
      name: "Umor LLC",
      url: "https://umor.dev",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://wishe.app/#app",
      name: "wishe",
      url: "https://wishe.app",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS, Android",
      description: canonicalDescription,
      publisher: { "@id": "https://wishe.app/#organization" },
      sameAs: [
        "https://apps.apple.com/app/id6778999964",
        "https://play.google.com/store/apps/details?id=com.umor.wishe",
      ],
    },
  ],
};

export const metadata: Metadata = {
  applicationName: "wishe",
  title: "wishe | Reinventing Gifting Culture",
  description: canonicalDescription,
  category: "Social gifting platform",
  alternates: { canonical: "https://wishe.app" },
  keywords: [
    "wishe",
    "social gifting platform",
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
    title: "wishe | Reinventing Gifting Culture",
    description: canonicalDescription,
    url: "https://wishe.app",
    siteName: "wishe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wishe | Reinventing Gifting Culture",
    description: canonicalDescription,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
