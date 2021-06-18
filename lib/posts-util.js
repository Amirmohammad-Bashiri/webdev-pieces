import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  console.log("DATA", data);
  console.log("CONTENT", content);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(getPostData);

  console.log("BEFORE CONVERSION", postFiles);
  console.log("AFTER CONVERSION", allPosts);

  const sortedPosts = allPosts.sort((postA, postB) => {
    return postA.date > postB.date ? -1 : 1;
  });

  return sortedPosts;
}
