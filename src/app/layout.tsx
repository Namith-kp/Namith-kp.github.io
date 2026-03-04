import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namith K P - Portfolio",
  description: "Engineering Student & Web Developer.",
  keywords: ["Namith K P", "Portfolio", "Web Developer", "Software Engineer", "React", "Next.js"],
  authors: [{ name: "Namith K P" }],
  creator: "Namith K P",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://namith-kp.github.io/",
    title: "Namith K P - Portfolio",
    description: "Creative Developer & Engineering Student building digital experiences.",
    siteName: "Namith K P Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namith K P - Portfolio",
    description: "Creative Developer & Engineering Student building digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${poppins.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
