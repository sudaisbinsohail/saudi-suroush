

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "شركه الزهراني فيبرجلاس | صندوق مكيف فيبر جلاس غطاء خارجي",
  description:
    "احمِ مكيفك من الحرارة والغبار بغطاء فيبر جلاس خارجي عالي الجودة من شركه الزهراني فيبرجلاس. متوفر بالتوصيل أو مع خدمة التركيب الاحترافي. تواصل معنا الآن عبر واتساب.",
  keywords: [
    "صندوق مكيف فيبر جلاس",
    "غطاء مكيف شباك",
    "غطاء مكيف خارجي",
    "فيبر جلاس مكيف",
    "تركيب غطاء مكيف",
    "شركه الزهراني فيبرجلاس",
    "AC cover fiberglass",
    "window AC cover Saudi Arabia",
  ],
  authors: [{ name: "شركه الزهراني فيبرجلاس" }],
  creator: "شركه الزهراني فيبرجلاس",
  publisher: "شركه الزهراني فيبرجلاس",
  // metadataBase: new URL(""), // update if company domain changes
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "",
    siteName: "شركه الزهراني فيبرجلاس",
    title: "شركه الزهراني فيبرجلاس | صندوق مكيف فيبر جلاس غطاء خارجي",
    description:
      "احمِ مكيفك من الحرارة والغبار بغطاء فيبر جلاس خارجي عالي الجودة من شركه الزهراني فيبرجلاس. متوفر بالتوصيل أو مع خدمة التركيب الاحترافي.",
    images: [
      {
        url: "/heroimage5.png",
        width: 1200,
        height: 630,
        alt: "صندوق مكيف فيبر جلاس - شركه الزهراني فيبرجلاس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركه الزهراني فيبرجلاس | صندوق مكيف فيبر جلاس غطاء خارجي",
    description:
      "احمِ مكيفك من الحرارة والغبار بغطاء فيبر جلاس خارجي عالي الجودة.",
    images: ["/heroimage5.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}