import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oğuzhan Doğanoğlu | AI/ML Engineer & Full-Stack Developer",
  description: "AI/ML Engineer | Full-Stack Developer | LLM Fine-tuning | Computer Vision | RAG Sistemleri",
  keywords: ["Oğuzhan Doğanoğlu", "AI Engineer", "ML Engineer", "Full-Stack Developer", "LLM", "Fine-tuning", "RAG"],
  authors: [{ name: "Oğuzhan Doğanoğlu" }],
  openGraph: {
    title: "Oğuzhan Doğanoğlu | AI/ML Engineer & Full-Stack Developer",
    description: "AI/ML Engineer | Full-Stack Developer | LLM Fine-tuning | Computer Vision",
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
