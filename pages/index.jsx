import PostsContainer from "../container/posts-container";
import { getPopularPosts } from "../lib/posts-util";

function HomePage({ popularPosts }) {
  return (
    <div>
      <PostsContainer header="Popular Posts" posts={popularPosts} />
    </div>
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
