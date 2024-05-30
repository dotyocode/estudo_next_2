import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Estudo nextJS",
  description: "Entre em contato",
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

export default async function contatos() {

  return (
    <div>
      <h1>Página de Contato</h1>
      <span>031998571830</span>
    </div>
  );
}
