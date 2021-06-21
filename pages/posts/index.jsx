<<<<<<< HEAD
function PostsPage() {
  return <section>posts page</section>;
=======
import { getAllPosts } from "../../lib/posts-util";

import PostsContainer from "../../container/posts-container";

function PostsPage({ posts }) {
  return (
    <section className="pt-32 md:pt-44">
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
>>>>>>> 508a1b55461f035cb9c6e7218652546d2a207bf5
}

export default PostsPage;
