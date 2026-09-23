import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",git add .

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "永遠にあなたのもの | Shiori Kagawa",
  description:
    "Sebuah film yang dipersembahkan untuk Shiori Kagawa, tentang cinta, ingatan, dan perpisahan yang belum selesai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
