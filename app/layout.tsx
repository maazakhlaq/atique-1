import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atqon Industrial Services",
  description:
    "Multidisciplinary industrial and technical services across construction, engineering, maintenance and infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-800`}>
        <WhatsAppButton/>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}