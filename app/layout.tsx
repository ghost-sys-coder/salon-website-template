import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { VariantFooter } from "@/components/variants/VariantFooterSection";
import { Toaster } from "sonner";

// import { FooterSection } from "@/components/shared/FooterSection";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap"
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Maison Élara | Luxury Salon & Spa",
  description: "An elevated sanctuary where luxury and artistry converge. Expert hair, skin, and beauty treatments in a serene Parisian-inspired setting.",
  keywords: "luxury salon, spa, hair design, skincare, bridal, maison elara"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased`}
      >
        <main className="bg-cream-100 min-h-screen max-w-400 mx-auto relative">
          <Navbar />
          {children}
          {/* <FooterSection /> Original footer section */}
          <VariantFooter />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
