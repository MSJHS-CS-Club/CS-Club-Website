import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";
import { Haiku } from "../components/Haiku";
import { Discord } from "../components/Discord";
import { Navbar } from "../components/Navbar";

import styles from "../styles/About.module.css";
import { AboutCard } from "../components/About/AboutCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.special_padding}>
        <h1>About Us</h1>
        <p>
          We are the computer science club at Mission San Jose High!
        </p>

        <div className={styles.grid}>
          <AboutCard
            name="Chris"
            role="President"
            description="Insert cool autobiography"
          />
          <AboutCard
            name="Pratyay"
            role="Vice President"
            description="Insert Cool autobiography"
          />
          <AboutCard
            name="Fuyi"
            role="Treasurer"
            description="Insert Cool autobiography"
          />
          <AboutCard
            name="Adrian"
            role="Secretary"
            description="Insert Cool autobiography"
          />
          <AboutCard
            name="Jeffery"
            role="Activities Coordinator"
            description="Insert Cool autobiography"
          />
          <AboutCard
            name="Shubham"
            role="Public Relations Officer/Webmaster"
            description="Insert Cool autobiography"
          />
          <AboutCard
            name="Kevin"
            role="Unoffical Counselor/Good Samaritan Helper"
            description="Insert Cool autobiography"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
