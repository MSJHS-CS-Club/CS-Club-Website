import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import scrapeBlogs from "../../data/scrapeBlogs";

import styles from "../../styles/BlogIndex.module.css";

const Blogs: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.special_padding}>Blogs</h1>
      <div className={styles.grid}>
        {posts.map((item: any, i: number) => {
          return (
            <a
              href={`/blogs/${item.data.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div key={i} className={styles.card}>
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
        })}
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const files = scrapeBlogs();
  return {
    props: { posts: files },
  };
};

export default Blogs;
