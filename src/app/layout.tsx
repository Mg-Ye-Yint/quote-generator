import type { Metadata } from "next";
import { Ruda } from "next/font/google";
import "./globals.css";

const ruda = Ruda({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ruda.className}>
      <body>{children}</body>
    </html>
  );
}
