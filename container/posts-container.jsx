import PostItem from "../components/posts/post-item";

function PostsContainer({ header, posts }) {
  return (
    <section className="py-8 max-w-6xl">
      <div className="container mx-auto px-10 md:px-32">
        <h1 className="mb-7 font-bold md:tracking-wide text-4xl text-gray-900 dark:text-gray-50">
          {header}
        </h1>

        <ul className="max-w-3xl space-y-5">
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PostsContainer;
