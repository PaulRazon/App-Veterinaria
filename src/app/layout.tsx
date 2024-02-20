import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vet-App",
  description: "Aplicacion para citas para tu mascota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      
      <body className={`bg-[#F1E9BB] ${inter.className}`} >{children}</body>
    </html>
  );
}
