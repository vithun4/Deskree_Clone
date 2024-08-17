import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Deskree",
  description: "Deskree Clone by Vithun Vigneswaran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar className="top-0" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
