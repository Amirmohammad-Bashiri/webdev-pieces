import Head from "next/head";

import PostHeader from "../../components/posts/post-header";
import PostContent from "../../components/posts/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const postUrl = ``;

  return (
    <main className="bg-white pt-28 md:pt-40 dark:bg-black">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={imagePath} />
        <meta
          property="og:url"
          content={`https://webdev-nuggets.vercel.app/posts/${post.slug}`}
        />
      </Head>
      <div className="container px-6 py-10 mx-auto md:px-14 lg:px-32">
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
