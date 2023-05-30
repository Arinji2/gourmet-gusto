import "./globals.css";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin"],

  variable: "--font-nunito",
});

const verdana = localFont({
  src: [
    {
      path: "../public/fonts/VERDANA.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/VERDANAB.ttf",
      weight: "700",
    },
  ],
  variable: "--font-verdana",
});

export const metadata = {
  title: "Gourmet Gusto",
  description: "Recipes for the discerning palate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${verdana.variable}`}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Script
          defer
          src="https://unpkg.com/tailwindcss-intersect@1.x.x/dist/observer.min.js"
        ></Script>
      </body>
    </html>
  );
}
