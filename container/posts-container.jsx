import { v4 as uuidv4 } from "uuid";

import PostItem from "../components/posts/post-item";

function PostsContainer({ header, posts }) {
  const postId = uuidv4();

  return (
    <section className="py-8 max-w-6xl">
      <div className="container mx-auto px-10 md:px-32">
        <h1 className="mb-7 font-bold md:tracking-wide text-4xl text-gray-900 dark:text-gray-50">
          {header}
        </h1>

        <ul className="max-w-3xl">
          {posts.map(post => (
            <PostItem key={postId} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PostsContainer;
