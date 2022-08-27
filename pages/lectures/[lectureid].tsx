import ReactMarkdown from "react-markdown";
import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import remarkGfm from "remark-gfm";
import scrapeWritings from "../../data/scrapeWritings";
import Head from "next/head";

const SpecificLecture: NextPage = ({ lecture }: any) => {
  return (
    <>
      <Head>
        <title>{lecture.data.title} | MSJCS Club</title>
      </Head>
      <Navbar />
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
          padding: "1.5rem",
          color: "white",
        }}
      >
        <h1>{lecture.data.title}</h1>
        <p style={{ textTransform: "uppercase" }}>
          {new Date(lecture.data.date).toLocaleDateString(undefined, {
            dateStyle: "medium",
          })}
        </p>
        <hr
          style={{ border: "none", height: "1px", backgroundColor: "#333" }}
        />
        <ReactMarkdown children={lecture.content} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default SpecificLecture;

export function getServerSideProps(context: any) {
  const files = scrapeWritings("lectures");
  const lecture = files.find(
    (blog) => blog.data.slug === context.query.lectureid
  );

  console.log(lecture);

  if (!lecture) {
    return {
      notFound: true,
    };
  }
  return {
    props: { lecture },
  };
}
