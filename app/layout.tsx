import type { Metadata } from "next";
import { Poppins, Bricolage_Grotesque, Epilogue, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers";
import { Toaster } from "react-hot-toast";
import Navbar from "./(home)/_components/Navbar";
import Footer from "./(home)/_components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fontTitle = Bricolage_Grotesque({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const epilogue = Epilogue({
  variable: "--font-Epilogue",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const redHat = Red_Hat_Display({
  variable: "--font-RedHat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QuickHire",
  description: "QuickHire – modern job marketplace",
  icons: {
    icon: "/footer-image/footer-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${sans.className} ${fontTitle.variable} ${epilogue.variable} ${redHat.variable} antialiased`}
      >
        <AppProviders>
          <SmoothScroll />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </AppProviders>
      </body>
    </html>
  );
}
