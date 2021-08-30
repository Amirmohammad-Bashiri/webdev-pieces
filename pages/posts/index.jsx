import Head from "next/head";

import { getAllPosts } from "../../lib/posts-util";
import PostsContainer from "../../container/posts-container";

function PostsPage({ posts }) {
  return (
    <section className="pt-32 2xl:pt-36">
      <Head>
        <title>All Posts | Pieces</title>
        <meta
          name="description"
          content="A list of all of web development posts"
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
  };
}

export default PostsPage;
