// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type scrapeBlogInput = "blogs" | "lectures"

export default function scrapeWritings(typeOfWriting: scrapeBlogInput) {
  const filenames = fs.readdirSync(path.join(process.cwd(), "data", typeOfWriting));
  let files = [];
  for (const file of filenames) {
    let data: any = matter(
      fs.readFileSync(path.join(process.cwd(), "data", typeOfWriting, file), "utf8")
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
