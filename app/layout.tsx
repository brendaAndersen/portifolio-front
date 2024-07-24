import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header";
//import { appWithTranslation } from 'next-intl';

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
