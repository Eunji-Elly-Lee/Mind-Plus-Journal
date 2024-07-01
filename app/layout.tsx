import type { Metadata } from "next";
import { UserProvider } from "@/contexts/userContext";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind Plus Journal",
  description: "Your guided path to positive journaling for mental well-being",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:flex md:flex-wrap">
        <UserProvider>
          <Nav />
          <main>
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
