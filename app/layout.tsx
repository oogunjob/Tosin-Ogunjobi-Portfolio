import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StartsCanvas from "@/components/main/StarBg";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tosin Ogunjobi Portfolio",
  description: "Tosin Ogunjobi Portfolio",
  icons: {
    icon: "/programmer.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014]`}>
        <Navbar />
        <StartsCanvas />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
