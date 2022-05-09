import { NextPage } from "next";
import scrapeBlogs from "../../data/scrapeBlogs";

const Blogs: NextPage = ({ posts }: any) => {
  return (
    <div>
      <h1>Blogs</h1>
      <div>
        {posts.map((item: any, i: number) => {
          return (
            <div key={i}>
              <a href={`/blogs/${item.data.slug}`}>
                <p>{item.data.title}</p>
              </a>
            </div>
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
