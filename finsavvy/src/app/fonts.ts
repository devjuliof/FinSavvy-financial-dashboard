import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";

export const font_nunito = Nunito({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tittle",
});

export const font_inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
