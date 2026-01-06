import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oğuzhan Doğanoğlu | Bilgisayar Mühendisi",
  description: "Bilgisayar Mühendisi | Full-Stack Developer | AI/ML Enthusiast | Blockchain Developer",
  keywords: ["Oğuzhan Doğanoğlu", "Bilgisayar Mühendisi", "Full-Stack Developer", "AI", "ML", "Blockchain"],
  authors: [{ name: "Oğuzhan Doğanoğlu" }],
  openGraph: {
    title: "Oğuzhan Doğanoğlu | Bilgisayar Mühendisi",
    description: "Bilgisayar Mühendisi | Full-Stack Developer | AI/ML Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
