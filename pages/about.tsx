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
            description={` Senior Pratyay Pandey is the President of CS Club, and the founder of the Bay Area Programming Initiative. He is also active on the MSJ campus as the President of the AI Club and Technology Students Association and on the Quiz Bowl and History Bowl teams. In CS, he is primarily involved in low-level programming and robotics. Outside of school, he does research in proof theory and enjoys working on cool code with his friends at Auxilium Technologies. 

            Pratyay can often be seen chugging a Red Bull or spending time with his dog, Leki. You'll frequently find him reading the Remarried Empress, making beats, and talking about F1 races with his friends. If he has headphones on, you may have to tap him on the back to get his attention :)`}
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
            name="Prabhvir"
            role="Secretary"
            description="Senior Prabhvir Babra enjoys working in a variety of fields. He has an interest in Computer Security, robotics, and low level systems. Outside of CS, Prabhvir is the creator of the Competitive Pokemon Club and an avid follower of Venomoth because the divine word of Venemoth deserves to be spread across the word across space and time. Prabhvir is also the creator of the comic series Prababamaba Comics, with a focus on surreal, dark, and punny humor. Prabhvir enjoys spending his time playing video games (his favorite series is the Legend of Zelda), reading manga/manhwa, or spending time playing the guitar or saxophone. His music tastes vary dramatically from psychedelic rock, to classical band music, to breakcore, to underground rappers such as Aesop Rock or Deca (or however one would classify the Bran Flakes). At the time of writing, Prabhvir listens to a lto fo J-Pop, rap, and Math Rock.
            "
            imgsrc="/prabhvir.jpg"
          />
          <AboutCard
            name="Advaith"
            role="Treasurer"
            description="Advaith Mopuri is a sophomore at MSJ and the treasurer of the CS club. Other than CS club, he loves machine learning and low level programming, and hopes to build his own 8-bit computer one day. He also enjoys spending weeks trying to automate anything that requires thinking. Advaith also loves math (both competitions and research), using CS to find cool patterns in math problems (shoutout project Euler), physics, and science bowl. When he’s not doing any of these things, you’ll find him playing with his dog Kipper, reading romance Webtoons, listening to assorted 80s - 00s rock, attempting to shoot a basketball, or spamming 🤡 in Discord.
            "
            imgsrc="/advaith.png"
          />
          <AboutCard
            name="Sumanth"
            role="Activities Coordinator"
            description="Hi there! I'm Sumanth Pallamreddy, a senior at MSJ. My journey into programming began in 8th grade when I joined a robotics team, and ever since, I've been captivated by the practical applications of CS in the real world. From crafting IoT projects using Arduinos and Raspberry Pi's to exploring anything that connects the digital realm with the physical, I'm fascinated by it all. In my spare time, you'll find me collaborating with friends on hobby projects for hackathons, competitions, or just for the sheer joy of it. When I'm not coding, I love to hit the trails on my mountain bike, challenge myself with a refreshing run, or simply enjoy quality time with friends.
            "
            imgsrc="/sumanth.jpg"
          />
          <AboutCard
            name="Michael"
            role="Activities Coordinator"
            description="Michael Liu loves programming 3d-rendered applications in OpenGL, writing interpreters for programming languages, and messing around with and collecting vintage computer hardware. He enjoys learning new rendering techniques, and tries to write a small program over a couple of days to demonstrate each one. In addition, he is very specific about how his programs look, often spending hours to get a color just right or to get the look of a post-processing shader to match exactly with what he imagines. While writing interpreters, one of Michael’s other favorite pastimes, he takes it as a challenge and an excuse to learn all the features of the language he’s using, as he thinks learning all the quirks of the syntax of a language is really interesting for some reason. When he works with vintage computers, whether it be installing Windows 98 on an SSD, cleaning up old ThinkPads, or restoring a shipping-damaged IBM PC convertible, he takes care to avoid damaging components and keep them working, so that he can enjoy running old software on them later. His vintage keyboard collection, including an IBM Model M and Model F, keeps growing as he frequently visits the Bay Area Electronics Flea Market. During the rest of his free time, he's either watching Seinfeld or taking a bike ride. 
            "
            imgsrc="/michael.jpg"
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
            role="Alumni"
            description="Chris Ge was CS Club’s President in the 2022-2023 school year. He’s previously been vice president and treasurer. Chris is a competition sweat (USACO gold but that’s not his biggest competition oops), and he likes discovering random overlaps between math and computer science. He also enjoys automating random things that take more than 1 second to do manually. Besides CS, Chris is a co-president of Math Club and co-president of Academic Challenge. He likes to run and wears glasses…(the picture is a lie)

            Beneath that, Chris has a personality. He has the humor of a 6 year old, and plays elite barbarians in clash royale, not because he thinks they’re any good, but because there’s nothing quite like the rush of serotonin of taking a tower in a couple of seconds and then proceeding to spam the laugh emote for the rest of the game. He’s recently started journaling, often philosophical ramblings about Mission and life in general. He’s also happy to talk about his favorite webtoons: Eleceed, Omniscient Reader, and Unordinary!"
            imgsrc="/chris.png"
          />
          <AboutCard
            name="Adrian"
            role="Alumni"
            description="Adrian is an avid coder and secretary of the CS club for 2022-2023. He is interested in all things computer related, and often finds himself learning new programming skills to build interesting projects. Adrian also enjoys playing Minecraft, which often intersects with his interest in programming in the form of redstone and reverse engineering."
            imgsrc="/adrian.png"
          />
          <AboutCard
            name="Kevin"
            role="Alumni"
            imgsrc="/kevin.png"
            description="Kevin Sheng (graduated 2023) is someone who's pretty much only remotely good at CS. He's a content manager for the usaco guide & also does a bit of competitive programming"
          />
          <AboutCard
            name="Fuyi"
            role="Alumni"
            description="Senior Fuyi Yang was MSJCS Club's Treasurer from 2022-2023, previously the public relations officer. Apart from CS club involvement, he is the Treasurer of MSJ Math and Science Education and Secretary of Chinese Culture Club. Fuyi enjoys machine learning and solving real world problems using the skills he previously obtained. He also likes to teach others when they have trouble understanding a topic and communicate with his peers about arbitrary academic subjects.

            Besides academics, Fuyi loves music. He enjoys practicing piano and composing during his free time, and he frequently participates in concerts/recitals. If he picked up a musical instrument very early on and found a competent music teacher, he would've pursued a music career and never touch computer science. He is also excited about soccer, rocket launches, Rubik's Cube solves, and a bunch of random things. He often walks alone and thinks about the future, his life path and decisions, and make reflections on what he has done."
            imgsrc="/fuyi.png"
          />

          <AboutCard
            name="Jeffery"
            role="Alumni"
            imgsrc="/jeffery.png"
            description="Jeffrey Zhang was a senior at the MSJ and the activities coordinator of the CS club from 2022-2023. He started “programming” in 5th grade using Scratch, posted only a handful out of hundred plus projects following his stubborn standards. Now he is doing competitive programming, hackathons, and game jams. Got couple awards; still salty for missing USACO plat by a sub task. He also loves spending hours just to learn a new tool so he can avoid reinventing another wheel. Outside academics he likes blogging, gaming, reading, drawing, and tech news. And with the trend the world is following he have a wild prediction that in the next few decades, the phones will first be replaced by glasses and transportation systems will then no longer be necessary for many. The fellow readers shall decide how well this will age."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
