import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto px-4 md:text-sm sm:text-sm">
        <div className="flex justify-center items-center">
          <p>
            &copy; {new Date().getFullYear()} Accessibly Speaking.
          </p>
          <nav className="flex space-x-4">
            <Link
              href="https://twitter.com/AccessiblyS"
              className="underline flex items-center ml-2"
            >
              Follow us on
              <FaXTwitter className="ml-2" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
