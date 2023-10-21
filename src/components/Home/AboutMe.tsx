import Link from 'next/link';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

const AboutMe = () => {
  return (
    <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between'>
      <div className='text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120'>
        <h1 className='text-3xl sm:text-7xl xl:leading-[5rem]'>
          Prazer, sou&nbsp;
          <strong>Walber</strong>
        </h1>
        <div className='mb-12'>
          <h2 className={`${roboto.className} mb-12`}>
            Sou um desenvolvedor frontend abaixonado pela criação de interfaces
          </h2>
          <Link
            href='/contatos'
            className='p-3 bg-w-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80'
          >
            Converse comigo!
          </Link>
        </div>
        <ul className='flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl'>
          <li
            style={{ backgroundColor: '#2f74c0', color: '#fff' }}
            className='w-fit p-2 rounded-md'
          >
            typescript
          </li>
          <li
            style={{ backgroundColor: '#68ddfa', color: '#000' }}
            className='w-fit p-2 rounded-md'
          >
            react
          </li>
          <li
            style={{ backgroundColor: '#efd810', color: '#000' }}
            className='w-fit p-2 rounded-md'
          >
            javascript
          </li>
          <li
            style={{ backgroundColor: '#000', color: '#fff' }}
            className='w-fit p-2 rounded-md'
          >
            next.js
          </li>
        </ul>
      </div>
      <div className='relative'>
        <Image
          src='https://avatars.githubusercontent.com/u/15366604?v=4'
          alt='Foto de perfil de Walber'
          unoptimized
          width={500}
          height={500}
          className='rounded-full'
        />
        <p className='p-4 w-fit text-base leading-tight bg-w-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3'>
          <strong className='text-4xl'>1+</strong>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
