import PostHeader from "../../components/posts/post-header";
import PostContent from "../../components/posts/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  return (
    <main className="pt-28 md:pt-40 bg-white dark:bg-black">
      <div className="container mx-auto py-10 px-6 md:px-14 lg:px-32">
        <PostHeader
          title={[post.title]}
          date={post.date}
          image={post.image}
          slug={post.slug}
        />
        <PostContent post={post} />
      </div>
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
