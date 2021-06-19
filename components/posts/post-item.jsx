import Link from "next/link";

function PostItem({ post }) {
  return (
    <li className="space-y-4">
      <Link href={`/posts/${post.slug}`}>
        <a>
          <h2 className="text-lg md:text-2xl text-gray-900 dark:text-gray-100">
            {post.title}
          </h2>
        </a>
      </Link>
      <p className="text-sm xl:text-base text-gray-500">{post.date}</p>
      <p className="text-base text-gray-500 dark:text-gray-400">
        {post.excerpt}
      </p>
    </li>
  );
}

export default PostItem;
