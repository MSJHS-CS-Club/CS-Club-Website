import ReactMarkdown from "react-markdown";
import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import remarkGfm from "remark-gfm";
import scrapeWritings from "../../data/scrapeWritings";

const SpecificLecture: NextPage = ({ lecture }: any) => {
  return (
    <>
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
        <hr />
        <ReactMarkdown children={lecture.content} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default SpecificLecture;

export function getServerSideProps(context: any) {
  const files = scrapeWritings("lectures");
  const lecture = files.find((blog) => blog.data.slug === context.query.lectureid);

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
