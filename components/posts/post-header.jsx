import Image from "next/image";

function PostHeader({ title, date, imageUrl, blurredImageUrl }) {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold tracking-wider text-gray-900 xl:text-5xl 2xl:text-5xl md:text-4xl lg:text-5xl dark:text-gray-50 md:mb-6">
        {title}
      </h1>
      <p className="mb-5 text-base text-gray-600 2xl:text-lg dark:text-gray-400 md:mb-7">
        {date}
      </p>

      <div>
        <div
          className="relative h-0"
          style={{
            paddingTop: `${(650 / 900) * 100}%`,
            backgroundImage: `url(${blurredImageUrl})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: `100%`,
          }}>
          <div className="absolute top-0 left-0">
            <Image
              className="rounded"
              src={imageUrl}
              alt={title}
              width={900}
              height={650}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
