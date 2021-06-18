import PostItem from "./post-item";

function PopularPosts() {
  return (
    <section className="py-8 max-w-6xl">
      <div className="container mx-auto px-10 md:px-32">
        <h1 className="mb-7 font-bold md:tracking-wide text-4xl text-gray-900 dark:text-gray-50">
          Popular Posts
        </h1>

        <div className="max-w-3xl">
          <PostItem />
        </div>
      </div>
    </section>
  );
}

export default PopularPosts;
