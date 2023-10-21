import AboutMe from '@/components/Home/AboutMe';
import { Projects } from '@/components/Home/Projects';
import Head from 'next/head';

const Home = () => {
  const projects = [
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
    {
      slug: 'HNT',
      name: 'Natural da terra',
      image: {
        url: 'https://i.imgur.com/LSDhtgJ.png',
        alt: 'Página inicial do site do natural da terra',
      },
    },
  ];

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
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Home;
