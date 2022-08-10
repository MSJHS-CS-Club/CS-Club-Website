import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import scrapeWritings from "../../data/scrapeWritings";

import styles from "../../styles/BlogIndex.module.css";

const Lectures: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Lectures | MSJCS Club</title>
      </Head>
      <Navbar />
      <h1 className={styles.special_padding}>Lecture Archive</h1>
      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((item: any, i: number) => {
            return (
              <a
                href={`/lectures/${item.data.slug}`}
                style={{ textDecoration: "none" }}
                key={i}
              >
                <div className={styles.card}>
                  <small
                    style={{
                      textTransform: "uppercase",
                      color: "#289cf1",
                      fontWeight: "bold",
                    }}
                  >
                    {new Date(item.data.date).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </small>
                  <h4>{item.data.title}</h4>
                </div>
              </a>
            );
          })
        ) : (
          <small
            style={{ textAlign: "center", color: "grey", fontWeight: "bold" }}
          >
            No lectures to show right now
          </small>
        )}
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const files = scrapeWritings("lectures");
  return {
    props: { posts: files },
  };
};

export default Lectures;
