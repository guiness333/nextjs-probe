import AboutMe from "@/components/Home/AboutMe";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Walber</title>
        <meta
          name="description"
          content="Sou um desenvolvedor frontend abaixonado pela criação de interfaces"
        />
      </Head>
      <div>
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
