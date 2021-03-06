import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

function formatDate(date) {
  const dateObject = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const humanDate = formatDate(data.date);

  const postData = {
    slug: postSlug,
    ...data,
    date: humanDate,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(getPostData);

  const sortedPosts = allPosts.sort((postA, postB) => {
    return postA.date > postB.date ? -1 : 1;
  });

  return sortedPosts;
}

export function getPopularPosts() {
  const allPosts = getAllPosts();

  const popularPosts = allPosts.filter(post => post.isPopular);

  return popularPosts;
}
