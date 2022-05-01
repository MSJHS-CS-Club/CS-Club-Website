// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function scrapeBlogs() {
  const filenames = fs.readdirSync(path.join(process.cwd(), "data", "blogs"));
  let files = [];
  for (const file of filenames) {
    let data: any = matter(
      fs.readFileSync(path.join(process.cwd(), "data", "blogs", file), "utf8")
    );
    delete data["orig"];
    files.push(data);
    console.log(files, "files");
  }

  files = files.sort((a, b) => {
    return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
  });

  files = files.reverse();
  return files;
}
