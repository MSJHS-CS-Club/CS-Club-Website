import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";
import { Haiku } from "../components/Haiku";
import { Discord } from "../components/Discord";
import { Navbar } from "../components/Navbar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MSJCS Club</title>
      </Head>

      <Navbar />
      <Hero />
      <Info />
      <Haiku />
      <Discord />
    </div>
  );
};

export default Home;
