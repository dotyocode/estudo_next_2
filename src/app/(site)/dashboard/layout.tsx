import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Painel do site",
  description: "Esse é o painel demonstativo do site",
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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3>Header do Dashboard</h3>
      <br></br>
      {children}
    </div>
  );
}
