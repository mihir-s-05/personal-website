import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import JsonLd from '../components/JsonLd';

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Mihir Srivastava - Portfolio",
  description: "Personal portfolio of Mihir Srivastava, a Computer Engineering student at UCSB specializing in machine learning, computer vision, and software development. Featuring projects in emotional analysis, AI tools, and hardware research.",
  keywords: ["Mihir Srivastava", "UCSB", "Computer Engineering", "Software Engineer", "Machine Learning", "Computer Vision", "FacEmotion", "AIHelp CLI"],
  authors: [{ name: "Mihir Srivastava" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={`${raleway.className}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}