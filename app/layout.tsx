import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL("https://example.com"),

  title: {
    default: "Expert Legal Center | Правова допомога громадянам України",
    template: "%s | Expert Legal Center",
  },

  description:
    "Юридична допомога громадянам України, які перебувають за кордоном або на тимчасово окупованих територіях. Народження дитини, смерть родича, розірвання шлюбу, документи ДРАЦС, представництво у судах України.",

  keywords: [
    "народження дитини ТОТ",
    "смерть на ТОТ",
    "розірвання шлюбу",
    "документи ДРАЦС",
    "юрист Україна",
    "юрист за кордоном",
    "суд Україна",
    "свідоцтво про народження",
    "свідоцтво про смерть",
    "юридична допомога українцям",
    "Expert Legal Center",
  ],

  authors: [
    {
      name: "Expert Legal Center",
    },
  ],

  creator: "Expert Legal Center",

  publisher: "Expert Legal Center",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Expert Legal Center",
    description:
      "Правова допомога громадянам України незалежно від країни перебування.",
    type: "website",
    locale: "uk_UA",
    siteName: "Expert Legal Center",
  },

  twitter: {
    card: "summary_large_image",
    title: "Expert Legal Center",
    description:
      "Правова допомога громадянам України незалежно від країни перебування.",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        <Header />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}