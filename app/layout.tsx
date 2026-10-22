import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SlickCarouselStyles from "@/components/SlickCarouselStyles";
import LayoutShell from "@/components/LayoutShell";

const plusJakartaSans = localFont({
  src: "../public/fonts/plus-jakarta-sans-latin.woff2",
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: "200 800",
});

const skModernist = localFont({
  src: "../public/fonts/sk-modernist-regular-webfont.woff2",
  variable: "--font-sk-modernist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Pharmacist - Online Medicine & Online Healthcare Store",
  description:
    "Shop prescription medicines, healthcare essentials, and consult verified pharmacists online with fast delivery.",
  keywords: [
    "pharmacy",
    "online medicine",
    "healthcare",
    "prescriptions",
    "health essentials",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23059669'><path d='M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z'/></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${skModernist.variable} antialiased`}
    >
      <body className="font-sans" suppressHydrationWarning>
        <SlickCarouselStyles />

        <main>
          <LayoutShell>{children}</LayoutShell>
        </main>
      </body>
    </html>
  );
}
