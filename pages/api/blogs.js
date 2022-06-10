import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }

  res.status(200).json(allBlogs);

  //   fs.promises.readdir(`blogdata`, (err, data) => {
  //     data.forEach((item) => {
  //       let allBlogs = [];
  //       fs.readFile(`blogdata/${item}`, "utf-8", (d) => {
  //         allBlogs = allBlogs.push(d);
  //       });
  //     });
  //     res.status(200).json(data);
  //   });
}
