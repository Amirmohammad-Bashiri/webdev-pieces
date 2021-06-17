import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-500">
      <nav>
        <div>
          <button>Toogle Theme</button>
        </div>

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/all-posts">
            <a>All Posts</a>
          </Link>
          <Link href="/newsletter">
            <a>Newsletter</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
