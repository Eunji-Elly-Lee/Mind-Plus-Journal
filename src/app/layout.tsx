import type { Metadata } from "next";
import { Asta_Sans } from "next/font/google";
import "./globals.css";

const astaSans = Asta_Sans({
  variable: "--font-asta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind+ Journal",
  description: "A mindful journaling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={astaSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
