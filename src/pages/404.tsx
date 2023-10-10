import React from "react";
import Link from "next/link";
import Head from "next/head";
const NotFound = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada | Walber</title>
      </Head>
      <div>
        <h1>404</h1>
        <div>
          <p>Oops, não conseguimos encontrar essa página!</p>
          <span>
            Clique no botão abaixo para ser redirecionado para à Pagina Inicial
          </span>
        </div>
        <Link href="/">Ir para página inicial</Link>
      </div>
    </>
  );
};

export default NotFound;
