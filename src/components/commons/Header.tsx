import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

export const Header = () => {
  return (
    <header className={roboto.className}>
      <Link href='/'>
        <Image src='/favicon.svg' alt='Icone do site' width={55} height={55} />
      </Link>
      <nav>
        <Link href='/'>Sobre Mim</Link>
        {/* <Link href='/portfolio'>Portfolio</Link> */}
        <Link href='/contatos'>Contatos</Link>
      </nav>
    </header>
  );
};
