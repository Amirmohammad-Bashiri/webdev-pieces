import Head from "next/head";

import { getAllPosts } from "../../lib/posts-util";
import PostsContainer from "../../container/posts-container";

function PostsPage({ posts }) {
  return (
    <section className="pt-32 md:pt-44">
      <Head>
        <title>All Posts | Nuggets</title>
        <meta
          name="description"
          content="A list of all of my webdev-related posts"
        />
      </Head>
      <PostsContainer header="All Posts" posts={posts} />
    </section>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60 * 10,
  };
}

export default PostsPage;
