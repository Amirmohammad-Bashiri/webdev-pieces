import Head from "next/head";

import PostHeader from "../../components/posts/post-header";
import PostContent from "../../components/posts/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import {
  cldUrlGenerator,
  buildImageUrl,
  buildPixelatedImageUrl,
} from "../../lib/image-util";

function PostDetailPage({ post }) {
  const url = buildImageUrl(post.slug, "dskxzyzbh");

  const pixlatedUrl = buildPixelatedImageUrl(
    post.slug,
    "dskxzyzbh",
    "pixelate",
    40
  );

  const imageUrl = cldUrlGenerator(url, "webdev-nuggets", post.slug);
  const pixelatedImageUrl = cldUrlGenerator(
    pixlatedUrl,
    "webdev-nuggets",
    post.slug
  );

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const postUrl = `https://webdev-nuggets.vercel.app/posts/${post.slug}`;

  return (
    <main className="bg-white pt-28 md:pt-40 dark:bg-black">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" itemProp="image" content={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={postUrl} />
      </Head>
      <div className="container px-6 pb-10 mx-auto 2xl:pt-10 md:px-14 lg:px-32">
        <PostHeader
          title={post.title}
          date={post.date}
          imageUrl={imageUrl}
          pixelatedImageUrl={pixelatedImageUrl}
        />
        <PostContent post={post} />
      </div>
    </main>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;

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
