import PostHeader from "../../components/posts/post-header";

function PostDetailPage() {
  return (
    <main className="bg-white dark:bg-black">
      <article className="container mx-auto py-10 px-10 md:px-32">
        <PostHeader />
      </article>
    </main>
  );
}

export default PostDetailPage;
