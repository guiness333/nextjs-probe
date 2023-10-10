import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <img src="/favicon.svg" alt="Icone do site" />
      </Link>
      <nav>
        <Link href="/">Sobre Mim</Link>
        {/* <Link href='/portfolio'>Portfolio</Link> */}
        <Link href="/contatos">Contatos</Link>
      </nav>
    </header>
  );
};
