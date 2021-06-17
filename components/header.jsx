import Link from "next/link";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="py-8 md:py-16">
      <div className="container mx-auto px-5 md:px-10">
        <nav className="flex items-center justify-between text-gray-800 dark:text-gray-50">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-3 bg-gray-300 rounded focus:border-dotted focus:border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current stroke-1 h-5 w-5 text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <div className="space-x-4 md:space-x-7 text-lg">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/all-posts">
              <a>Posts</a>
            </Link>
            <Link href="/newsletter">
              <a>Newsletter</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
