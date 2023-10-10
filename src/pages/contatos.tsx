import React from 'react';
import Head from 'next/head';

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Walber</title>
      </Head>
      <div>
        <h1>Contato</h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href='mailto:walber123k@hotmail.com'>walber123k@hotmail.com</a>
            </div>
          </li>
          <li>
            <span>Linkedin</span>
            <div>
              <a href='https://www.linkedin.com/in/walber-martins/'>
                https://www.linkedin.com/in/walber-martins/
              </a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href='https://github.com/guiness333'>
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
