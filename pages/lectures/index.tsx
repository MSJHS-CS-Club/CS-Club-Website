import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import scrapeBlogs from "../../data/scrapeBlogs";

import styles from "../../styles/BlogIndex.module.css";

const Blogs: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.special_padding}>Lecture Archive</h1>
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
