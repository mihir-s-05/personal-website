import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Mihir Srivastava - Portfolio",
  description: "Personal portfolio website of Mihir Srivastava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>{children}</body>
    </html>
  );
}