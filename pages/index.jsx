import Head from "next/head";

import PostsContainer from "../container/posts-container";
import { getPopularPosts } from "../lib/posts-util";

function HomePage({ popularPosts }) {
  return (
    <section className="pt-32 2xl:pt-36">
      <Head>
        <title>Webdev Pieces</title>
        <meta
          name="description"
          content="I write posts about Javascript, React, Next.js and web development in general"
        />
      </Head>
      <PostsContainer header="Popular Posts" posts={popularPosts} />
    </section>
  );
}

export function getStaticProps() {
  const popularPosts = getPopularPosts();

  return {
    props: {
      popularPosts,
    },
  };
}

export default HomePage;
