import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  weight:["100","200", "300","400", "500","600","700","800"],
  variable: "--font-jetbrainMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuol's portfolio",
  description: "junior web developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
