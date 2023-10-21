import React from 'react';
import Head from 'next/head';
import { CopyButton } from '@/components/commons/CopyButton';

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Walber</title>
      </Head>
      <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
        <h1 className='text-5xl md:text-7xl font-bold text-center'>Contato</h1>
        <ul className='table mx-auto space-y-6 md:space-y-8'>
          <li className='md:text-xl'>
            <span className='font-bold'>E-mail</span>
            <div className='flex gap-1 md:gap-3 items-center'>
              <a
                className='text-sm md:text-lg text-slate-300 underline truncate'
                href='mailto:walber123k@hotmail.com'
              >
                walber123k@hotmail.com
              </a>
              <CopyButton textToCopy='walber123k@hotmail.com' />
            </div>
          </li>
          <li className='md:text-xl'>
            <span className='font-bold'>Linkedin</span>
            <div className='flex gap-1 md:gap-3 items-center'>
              <a
                className='text-sm md:text-lg text-slate-300 underline truncate'
                href='https://www.linkedin.com/in/walber-martins/'
              >
                https://www.linkedin.com/in/walber-martins/
              </a>
            </div>
          </li>
          <li className='md:text-xl'>
            <span className='font-bold'>GitHub</span>
            <div className='flex gap-1 md:gap-3 items-center'>
              <a
                className='text-sm md:text-lg text-slate-300 underline truncate'
                href='https://github.com/guiness333'
              >
                https://github.com/guiness333
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contatos;
