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
      <div >
      <div className={styles.special_padding}>
        
        <h1>About Us</h1>
        <p>
          We are the computer science club at Mission San Jose High!
        </p>
        </div>


        <h1 style={{textAlign:"center", marginTop:"5rem"}}>Officers</h1>
        
        <div className={styles.grid}>
          <AboutCard
            name="Chris"
            role="President"
            description="Senior Chris Ge is CS Club’s President. He’s previously been vice president and treasurer. Chris is a competition sweat (USACO gold but that’s not his biggest competition oops), and he likes discovering random overlaps between math and computer science. He also enjoys automating random things that take more than 1 second to do manually. Besides CS, Chris is a co-president of Math Club and co-president of Academic Challenge. He likes to run and wears glasses…(the picture is a lie)

            Beneath that, Chris has a personality. He has the humor of a 6 year old, and plays elite barbarians in clash royale, not because he thinks they’re any good, but because there’s nothing quite like the rush of serotonin of taking a tower in a couple of seconds and then proceeding to spam the laugh emote for the rest of the game. He’s recently started journaling, often philosophical ramblings about Mission and life in general. He’s also happy to talk about his favorite webtoons: Eleceed, Omniscient Reader, and Unordinary!"
          />
          <AboutCard
            name="Pratyay"
            role="Vice President"
            description={` Junior Pratyay Pandey is the Vice President of CS Club, previously having been Secretary. Outside of CS Club, Pratyay pursues his passion for CS as the Director of Software for Valkyrie Robotics, Vice President of AI Club, and Vice President of the Technology Students Association at MSJ. In CS, he's most interested in machine learning and low-level programming. Outside of CS, Pratyay is an über nerd who has written papers on proof theory and cares way too much about graphene (it's so cool!).

            Pratyay enjoys anything caffeinated, spending time with his dog Leki, and attempting to write and read sci-fi novels. You'll frequently find him reading the Remarried Empress or ranting about Star Wars or hover sheep (fear them!). If you want him to shut up, just yell, "Kangaroo." If you want him to never shut up, say one of the following: "Graphene", "Robotics", "Star Wars", or "'80s rock".`}
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
            imgsrc="/adrian.png"
          />
          <AboutCard
            name="Jeffery"
            role="Activities Coordinator"
            description="Insert Cool autobiography"
          />
          <AboutCard
            name="Shubham"
            role="Public Relations Officer/Webmaster"
            description="Shubham likes to deal with fullstack development and knows a lot about building projects for the web. Additionally, he sometimes dabbles with CLI tools. He enjoys building things things that are complex and have many moving parts, to make an astonishing final product. And no, he will not build your website for you. He also has a blog where he writes tutorials and recommendations for technologies/programming tools to use.

            Besides the coding part, he also likes to take photos with his Canon Rebel T3i and admire motorcycles (he knows how to ride them), trains, and planes. Shubham also recommends that you use a mechanical keyboard, and occasionally falls into the mechanical keyboard rabbit hole on YouTube. While he doesn't take out his mountain bike often, he enjoys ripping down dirt trails (thanks gravity!) and smashing tree roots on the way. He also likes playing games such at the Hitman WOA trilogy, which is currently his favorite set of games (probably the only one he'll pick up in his free time). When he's not doing any of those, he's probably watching videos from CGP Grey, Tom Scott, a video essay or other nerdy channels/videos like that 
            "

            imgsrc="/shubham.jpg"
          />
          
        </div>


        <h1 style={{textAlign:"center", marginBottom:"1rem", marginTop:"5rem"}}>HIghlighted Members</h1>
        <div className={styles.grid}>

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
