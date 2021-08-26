import Image from "next/image";

import errorSvg from "../public/images/ui/error.svg";

function ErrorFallback({ resetErrorBoundary }) {
  return (
    <main className="h-full pt-16">
      <div role="alert" className="flex flex-col items-center justify-center">
        <div className="p-5">
          <Image src={errorSvg} alt="Error svg" width={500} height={500} />
        </div>
        <p className="text-xl font-bold tracking-wider text-gray-800 md:text-3xl dark:text-gray-200">
          Something went wrong!
        </p>
        <button onClick={resetErrorBoundary} className="secondary-btn">
          Try again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;
