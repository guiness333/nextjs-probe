import Link from 'next/link';

const AboutMe = () => {
  return (
    <main>
      <div>
        <h1>Prazer, sou &nbsp;</h1>
        <span>Walber</span>
        <div>
          <h2>
            Sou um desenvolvedor frontend abaixonado pela criação de interfaces
          </h2>
          <Link href='/contatos'>Converse comigo!</Link>
        </div>
        <ul>
          <li style={{ backgroundColor: '#2f74c0', color: '#fff' }}>
            typescript
          </li>
          <li style={{ backgroundColor: '#68ddfa', color: '#000' }}>react</li>
          <li style={{ backgroundColor: '#efd810', color: '#000' }}>
            javascript
          </li>
          <li style={{ backgroundColor: '#000', color: '#fff' }}>next.js</li>
        </ul>
      </div>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/15366604?v=4'
          alt='Foto de perfil de Walber'
        />
        <p>
          <span>1+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
