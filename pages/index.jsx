import PostsContainer from "../container/posts-container";
import { getAllPosts } from "../lib/posts-util";

function HomePage({ popularPosts }) {
  return (
    <div>
      <PostsContainer header="Popular Posts" posts={popularPosts} />
    </div>
  );
}

export function getStaticProps() {
  const popularPosts = getAllPosts();

  return {
    props: {
      popularPosts,
    },
  };
}

export default HomePage;
