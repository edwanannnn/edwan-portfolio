import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edwan Zainur Amin — DevOps & Cloud Engineer",
  description:
    "DevOps engineer building reliable infrastructure for production systems. Docker, AWS, Linux, CI/CD, and observability.",
  openGraph: {
    title: "Edwan Zainur Amin — DevOps & Cloud Engineer",
    description:
      "DevOps engineer building reliable infrastructure for production systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#F7F5F0] text-[#18181B] antialiased">
        {children}
      </body>
    </html>
  );
}
