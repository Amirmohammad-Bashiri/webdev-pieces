import Image from "next/image";

import { useTheme } from "../../store/theme-context";

function PostHeader({
  title,
  date,
  imageUrl,
  pixelatedImageUrl,
  imageOwner,
  imageOwnerAddress,
  postReadTime,
}) {
  const { theme } = useTheme();

  const lightClockIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-600 stroke-current stroke-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const darkClockIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-500 stroke-current stroke-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const timeIcon = theme === "dark" ? darkClockIcon : lightClockIcon;

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold tracking-wider text-gray-900 xl:text-5xl 2xl:text-5xl md:text-4xl lg:text-5xl dark:text-gray-50 md:mb-6">
        {title}
      </h1>
      <div className="flex items-center mb-5 space-x-3 md:mb-7">
        <p className="text-base text-gray-600 2xl:text-lg dark:text-gray-400">
          {date}
        </p>
        <div>
          <div className="flex items-center space-x-1">
            <span>{timeIcon}</span>
            <p className="text-base text-gray-500 2xl:text-sm dark:text-gray-300">
              {postReadTime} min read
            </p>
          </div>
        </div>
      </div>

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
