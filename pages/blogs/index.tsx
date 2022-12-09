import { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import scrapeBlogs from "../../data/scrapeWritings";

import styles from "../../styles/BlogIndex.module.css";

const Blogs: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Blogs | MSJCS Club</title>
      </Head>
      <Navbar />
      <h1 className={styles.special_padding}>Blogs</h1>
      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.reverse().map((item: any, i: number) => {
            return (
              <a
                href={`/blogs/${item.data.slug}`}
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
            No posts to show right now
          </small>
        )}
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const files = scrapeBlogs("blogs");
  return {
    props: { posts: files },
  };
};

export default Blogs;
