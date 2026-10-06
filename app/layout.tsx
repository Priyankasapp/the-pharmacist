import type { Metadata, Viewport } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',

});

const skModernist = localFont({
  src: '../public/fonts/sk-modernist-regular-webfont.woff2', 
  variable: '--font-sk-modernist',
});

export const metadata: Metadata = {
  title: "The Pharmacist - Online Madicine & Online Healthcare Store",
  description: "Shop prescription medicines, healthcare essentials, and consult verified pharmacists online with fast delivery.",
  keywords:["pharmacy", "online medicine", "healthcare", "prescriptions", "health essentials"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23059669'><path d='M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z'/></svg>",
  },
};
export const viewport: Viewport = {
  width:'device-width',
  initialScale:1,
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={` ${plusJakartaSans.variable} ${skModernist.variable} antialiased`}
    >
      <body className="" suppressHydrationWarning>
        <div >
        <Navbar />
        <Breadcrumbs />
        
        <main className="">
          {children}
        </main>
        
        <Footer />
        </div>
        
      </body>
    </html>
  );
}

