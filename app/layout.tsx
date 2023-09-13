import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Luckiest_Guy } from "next/font/google";

const inter = Inter({ subsets: ["latin"] ,
variable:"--font-inter",
weight:"900"
 });

const luckiestGuy=Luckiest_Guy({
  subsets: ["latin"],
  variable:"--font-luckiest-guy",
  weight:"400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
