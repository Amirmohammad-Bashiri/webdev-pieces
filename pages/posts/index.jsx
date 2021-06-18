import { getAllPosts } from "../../lib/posts-util";

import PostsContainer from "../../container/posts-container";

function PostsPage({ posts }) {
  return (
    <section>
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
