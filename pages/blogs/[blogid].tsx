import ReactMarkdown from "react-markdown";
import scrapeBlogs from "../../data/scrapeBlogs";
import { NextPage } from "next";
import { BlogNavbar } from "../../components/BlogNavbar";

const SpecificBlog: NextPage = ({ blog }: any) => {
  return (
    <>
      <BlogNavbar />
      <div style={{ maxWidth: "650px", margin: "auto", padding: "1.5rem" }}>
        <h1>{blog.data.title}</h1>
        <p style={{ textTransform: "uppercase" }}>
          {new Date(blog.data.date).toLocaleDateString(undefined, {
            dateStyle: "medium",
          })}
        </p>
        <hr />
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </>
  );
};

export default SpecificBlog;

export function getServerSideProps(context: any) {
  const files = scrapeBlogs();
  const blog = files.find((blog) => blog.data.slug === context.query.blogid);

  console.log(blog);

  if (!blog) {
    return {
      notFound: true,
    };
  }
  return {
    props: { blog },
  };
}
