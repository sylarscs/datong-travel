import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Datong Travel Guide — Ancient Caves, Living History",
    template: "%s | Datong Travel Guide",
  },
  description:
    "The most detailed English travel guide to Datong, China. Discover Yungang Grottoes, Hanging Temple, ancient city walls, and the best noodles in Shanxi. Free guides, itineraries, and local tips.",
  keywords: [
    "Datong travel guide",
    "Yungang Grottoes",
    "Hanging Temple",
    "Datong China",
    "Shanxi travel",
    "Datong itinerary",
    "Datong food guide",
    "China off the beaten path",
  ],
  metadataBase: new URL("https://datong-travel.vercel.app"),
  openGraph: {
    title: "Datong Travel Guide — Ancient Caves, Living History",
    description:
      "Discover Datong: UNESCO caves, a temple on a cliff, and the soul of Shanxi cuisine. Your complete English guide.",
    type: "website",
    siteName: "Datong Travel Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datong Travel Guide",
    description:
      "Discover Datong: UNESCO caves, a temple on a cliff, and the soul of Shanxi cuisine.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${playfairDisplay.variable} ${sourceSans3.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-700 font-body antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
