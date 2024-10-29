import type { Metadata } from "next";
import "./globals.css";

import { font_inter, font_nunito } from "./fonts";

export const metadata: Metadata = {
  title: "FinSavvy | Login",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font_inter.variable} ${font_nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
