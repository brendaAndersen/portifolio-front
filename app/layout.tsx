import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <> 
      <Head>
        <link 
          rel="preload" 
          href="/_next/static/media/eafabf029ad39a43-s.p.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
      </Head>
      <html lang="pt-BR" className={`${poppins.variable}`}>

        <body>{children}</body>
      </html>
    </>
  );
}
