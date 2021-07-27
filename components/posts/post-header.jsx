import Image from "next/image";

function PostHeader({
  title,
  date,
  imageUrl,
  pixelatedImageUrl,
  imageOwner,
  imageOwnerAddress,
}) {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold tracking-wider text-gray-900 xl:text-5xl 2xl:text-5xl md:text-4xl lg:text-5xl dark:text-gray-50 md:mb-6">
        {title}
      </h1>
      <p className="mb-5 text-base text-gray-600 2xl:text-lg dark:text-gray-400 md:mb-7">
        {date}
      </p>

      <div className="flex flex-col">
        <div
          style={{
            height: 0,
            position: "relative",
            paddingTop: `${(650 / 1100) * 100}%`,
            backgroundImage: `url(${pixelatedImageUrl}.jpg)`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: `100%`,
          }}>
          <div className="absolute top-0 left-0">
            <Image
              className="rounded"
              src={`${imageUrl}.jpg`}
              alt={title}
              width={900}
              height={550}
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 2xl:text-lg">
            Photo by{" "}
            <a
              href={imageOwnerAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600">
              {imageOwner}
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
