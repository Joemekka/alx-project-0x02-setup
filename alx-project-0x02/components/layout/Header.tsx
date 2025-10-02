import Home from "@/pages";
import About from "@/pages/about";
import Link from "next/link";

function Header() {
  return (
    <>
      <nav>
        <ul className="flex justify-center gap-1.5 items-center">
          <li className="bg-gray-100 py-1.5 px-8">
            <Link href="/about">About</Link>
          </li>
          <li className="bg-gray-100 py-1.5 px-8">
            <Link href="/home">Home</Link>
          </li>
          <li className="bg-gray-100 py-1.5 px-8">
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
