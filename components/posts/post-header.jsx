import Image from "next/image";

function PostHeader({ title, date, imageUrl, slug }) {
  // const imagePath = `/images/posts/${slug}/${imageUrl}`;
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold tracking-wider text-gray-900 xl:text-5xl 2xl:text-5xl md:text-4xl lg:text-5xl dark:text-gray-50 md:mb-6">
        {title}
      </h1>
      <p className="mb-5 text-base text-gray-600 2xl:text-lg dark:text-gray-400 md:mb-7">
        {date}
      </p>

      <div className="text-center">
        <Image
          className="rounded"
          src={imageUrl}
          alt={title}
          width={800}
          height={450}
        />
      </div>
    </div>
  );
}

export default PostHeader;
