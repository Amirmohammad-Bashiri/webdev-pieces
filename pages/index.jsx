import Head from "next/head";

import PostsContainer from "../container/posts-container";
import { getPopularPosts } from "../lib/posts-util";

function HomePage({ popularPosts }) {
  return (
    <section className="pt-32 md:pt-44">
      <Head>
        <title>Webdev Nuggets</title>
        <meta
          name="description"
          content="Small posts about web development which I call 'Nuggets' specifically about React, Next.JS and javascript"
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
    revalidate: 24 * 60 * 60,
  };
}

export default HomePage;
