"use client";
import Error from "next/error";
import Link from "next/link";
import { useEffect } from "react";

/*
  Error NextJS:
    - para configurarmos o erro, precisamos receber 2 propriedades, o error e o reset.
      podemos deixar tipados como {error: Error; reset: () => void}
    - Precisamos deixar ele como "use cliente"
    - Precisamos importar import Error from "next/error";
**/

const Errors = ({ error, reset }: { error: Error; reset: () => void }) => {

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Ops algo deu errado</h2>
      <div>
        <Link href="/">Voltar para página de home</Link>
      </div>
    </div>
  );
};

export default Errors;
