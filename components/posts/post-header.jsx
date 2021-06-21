import Image from "next/image";

function PostHeader({ title, date, image, slug }) {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <div>
      <h1 className="font-bold text-4xl md:text-5xl tracking-wider text-gray-900 dark:text-gray-50 mb-4 md:mb-6">
        {title}
      </h1>
      <p className="text-base text-gray-600 dark:text-gray-400 mb-5 md:mb-7">
        {date}
      </p>

      <div className="text-center">
        <Image
          className="rounded"
          src={imagePath}
          alt={title}
          width={800}
          height={450}
        />
      </div>
    </div>
  );
}

export default PostHeader;
