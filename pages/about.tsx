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
        <title>About Us | MSJCS Club</title>
      </Head>

      <Navbar />
      <div>
        <div className={styles.special_padding}>
          <h1>About Us</h1>
          <p>We are the computer science club at Mission San Jose High!</p>
        </div>

        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Officers</h1>

        <div className={styles.grid}>
          <AboutCard
            name="Pratyay"
            role="President"
            description={` Junior Pratyay Pandey is the Vice President of CS Club, previously having been Secretary. Outside of CS Club, Pratyay pursues his passion for CS as the Director of Software for Valkyrie Robotics, Vice President of AI Club, and Vice President of the Technology Students Association at MSJ. In CS, he's most interested in machine learning and low-level programming. Outside of CS, Pratyay is an über nerd who has written papers on proof theory and cares way too much about graphene (it's so cool!).

            Pratyay enjoys anything caffeinated, spending time with his dog Leki, and attempting to write and read sci-fi novels. You'll frequently find him reading the Remarried Empress or ranting about Star Wars or hover sheep (fear them!). If you want him to shut up, just yell, "Kangaroo." If you want him to never shut up, say one of the following: "Graphene", "Robotics", "Star Wars", or "'80s rock".`}
            imgsrc="/pratyay.png"
          />
          <AboutCard
            name="Shubham"
            role="Vice President"
            description="Shubham likes to deal with fullstack development and knows a lot about building projects for the web. Additionally, he sometimes dabbles with CLI tools. He enjoys building things things that are complex and have many moving parts, to make an astonishing final product. And no, he will not build your website for you. He also has a blog where he writes tutorials and recommendations for technologies/programming tools to use.

            Besides the coding part, he also likes to take photos with his Canon Rebel T3i and admire motorcycles (he knows how to ride them), trains, and planes. Shubham also recommends that you use a mechanical keyboard, and occasionally falls into the mechanical keyboard rabbit hole on YouTube. While he doesn't take out his mountain bike often, he enjoys ripping down dirt trails (thanks gravity!) and smashing tree roots on the way. He also likes playing games such at the Hitman WOA trilogy, which is currently his favorite set of games (probably the only one he'll pick up in his free time). When he's not doing any of those, he's probably watching videos from CGP Grey, Tom Scott, a video essay or other nerdy channels/videos like that 
            "
            imgsrc="/shubham.jpg"
          />
          <AboutCard
            name="Fuyi"
            role="Treasurer"
            description="Senior Fuyi Yang is MSJCS Club's current Treasurer, previously the public relations officer. Apart from CS club involvement, he is the Treasurer of MSJ Math and Science Education and Secretary of Chinese Culture Club. Fuyi enjoys machine learning and solving real world problems using the skills he previously obtained. He also likes to teach others when they have trouble understanding a topic and communicate with his peers about arbitrary academic subjects.

            Besides academics, Fuyi loves music. He enjoys practicing piano and composing during his free time, and he frequently participates in concerts/recitals. If he picked up a musical instrument very early on and found a competent music teacher, he would've pursued a music career and never touch computer science. He is also excited about soccer, rocket launches, Rubik's Cube solves, and a bunch of random things. He often walks alone and thinks about the future, his life path and decisions, and make reflections on what he has done."
            imgsrc="/fuyi.png"
          />

          <AboutCard
            name="Jeffery"
            role="Activities Coordinator"
            imgsrc="/jeffery.png"
            description="Jeffrey Zhang is a senior at the MSJ and the activities coordinator of the CS club. He started “programming” in 5th grade using Scratch, posted only a handful out of hundred plus projects following his stubborn standards. Now he is doing competitive programming, hackathons, and game jams. Got couple awards; still salty for missing USACO plat by a sub task. He also loves spending hours just to learn a new tool so he can avoid reinventing another wheel. Outside academics he likes blogging, gaming, reading, drawing, and tech news. And with the trend the world is following he have a wild prediction that in the next few decades, the phones will first be replaced by glasses and transportation systems will then no longer be necessary for many. The fellow readers shall decide how well this will age."
          />
        </div>

        <h1
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            marginTop: "5rem",
          }}
        >
          Hall of Fame
        </h1>
        <div className={styles.grid}>
          <AboutCard
            name="Chris"
            role="President"
            description="Chris Ge was CS Club’s President in the 2022-2023 school year. He’s previously been vice president and treasurer. Chris is a competition sweat (USACO gold but that’s not his biggest competition oops), and he likes discovering random overlaps between math and computer science. He also enjoys automating random things that take more than 1 second to do manually. Besides CS, Chris is a co-president of Math Club and co-president of Academic Challenge. He likes to run and wears glasses…(the picture is a lie)

            Beneath that, Chris has a personality. He has the humor of a 6 year old, and plays elite barbarians in clash royale, not because he thinks they’re any good, but because there’s nothing quite like the rush of serotonin of taking a tower in a couple of seconds and then proceeding to spam the laugh emote for the rest of the game. He’s recently started journaling, often philosophical ramblings about Mission and life in general. He’s also happy to talk about his favorite webtoons: Eleceed, Omniscient Reader, and Unordinary!"
            imgsrc="/chris.png"
          />
          <AboutCard
            name="Adrian"
            role="Secretary"
            description="Adrian is an avid coder and secretary of the CS club for 2022-2023. He is interested in all things computer related, and often finds himself learning new programming skills to build interesting projects. Adrian also enjoys playing Minecraft, which often intersects with his interest in programming in the form of redstone and reverse engineering."
            imgsrc="/adrian.png"
          />
          <AboutCard
            name="Kevin"
            role="Unoffical Counselor/Good Samaritan Helper"
            imgsrc="/kevin.png"
            description="Kevin Sheng (graduated 2023) is someone who's pretty much only remotely good at CS. He's a content manager for the usaco guide & also does a bit of competitive programming"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
