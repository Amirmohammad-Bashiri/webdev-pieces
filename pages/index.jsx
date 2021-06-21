import PostsContainer from "../container/posts-container";
import { getPopularPosts } from "../lib/posts-util";

function HomePage({ popularPosts }) {
  return (
    <section className="pt-32 md:pt-44">
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
