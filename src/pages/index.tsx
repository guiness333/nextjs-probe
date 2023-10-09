import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href='/contatos'>ir para a página contatos</Link>
    </main>
  );
};

export default Home;