import AboutMe from '@/components/Home/AboutMe';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Walber</title>
        <meta
          name='description'
          content='Sou um desenvolvedor frontend abaixonado pela criação de interfaces'
        />
      </Head>
      <div className='py-8 px-6 space-y-10 md:space-y-28 max-w-[100rem] my-0 mx-auto'>
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
