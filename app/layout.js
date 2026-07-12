import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "MAJO PASKUVAN © 2026",
  description:
    "Portfolio of Majo Paskuvan — building playful, crafted digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
