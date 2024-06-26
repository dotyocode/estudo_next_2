import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/index";

export const metadata: Metadata = {
  title: "Estudo nextJS",
  description: "Estaudando nextJS",
  keywords: ["HTML", "CSS", "JAVASCRIPT", "PROGRAMACAO"], //tags chaves para rankear no google o site
  openGraph: {
    // imagem que vai ser gerada quando vc colar o site em algum ponto, tipo linkedin
    images: [
      "https://cdna.artstation.com/p/assets/images/images/028/839/236/large/christian-dimitrov-fantasy-land-2500.jpg?1595673819",
    ],
  },
  robots: {
    index: true, // pagina indexada pros indicadores,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
