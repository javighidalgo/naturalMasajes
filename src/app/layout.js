import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Natural Masajes Sevilla Este | Centro de Masajes Profesional",
  description:
    "Centro de masajes en Sevilla Este. Especialistas en masaje relajante, descarga muscular, reflexología, piedras calientes y más. Fernando Altazubiaga · 657 736 119.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
