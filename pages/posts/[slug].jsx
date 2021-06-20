import PostHeader from "../../components/posts/post-header";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  console.log(post);
  return (
    <main className="bg-white dark:bg-black">
      <article className="container mx-auto py-10 px-8 md:px-32">
        <PostHeader
          title={[post.title]}
          date={post.date}
          image={post.image}
          slug={post.slug}
        />
      </article>
    </main>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 24 * 60 * 60 * 5,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map(filename => filename.replace(/.md$/, ""));

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
