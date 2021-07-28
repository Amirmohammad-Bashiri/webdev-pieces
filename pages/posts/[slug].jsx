import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import PostHeader from "../../components/posts/post-header";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { calculateReadingTime } from "../../lib/post-util";
import {
  cldUrlGenerator,
  buildImageUrl,
  buildPixelatedImageUrl,
} from "../../lib/image-util";

const PostContent = dynamic(() =>
  import("../../components/posts/post-content")
);

function PostDetailPage({ post }) {
  const [postReadTime, setPostReadTime] = useState(0);

  // Building image urls
  const url = buildImageUrl(
    post.slug,
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME
  );

  const pixlatedUrl = buildPixelatedImageUrl(
    post.slug,
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
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

  // Getting post reading time
  useEffect(() => {
    if (post.content) {
      calculateReadingTime(post.content).then(time => setPostReadTime(time));
    }
  }, [setPostReadTime, post.content]);

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
          imageOwner={post.imageOwner}
          imageOwnerAddress={post.imageOwnerAddress}
          postReadTime={postReadTime}
        />
        <PostContent post={post} setPostReadTime={setPostReadTime} />
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
