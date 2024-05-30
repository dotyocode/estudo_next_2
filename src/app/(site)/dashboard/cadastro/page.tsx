import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cadastro",
  description: "Esse é o painel cadastrando usuario",
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

export default function Cadastro() {
  return (
    <div>
      <h1>Página de Cadastro</h1>
      <h3>Essa é a página de cadastro de clientes</h3>
    </div>
  );
}
