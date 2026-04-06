import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Natural Masajes | Fisioterapia Javier Hidalgo",
  description:
    "Fisioterapia clínica, deportiva y masaje integral en Madrid. Tratamientos personalizados basados en evidencia científica para una vida sin dolor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
