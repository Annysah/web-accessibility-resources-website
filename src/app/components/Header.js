import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Header() {

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <Link href="/" className="flex items-center">
        <Image
          src="/logoicon.svg"
          alt="Accessibly Speaking Logo"
          width={30}
          height={40}
          className="cursor-pointer"
        />
        <p className="ml-2 font-bold">Accessibly Speaking</p>
      </Link>
      <div className="flex-1 mx-4 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for resources"
          className="w-1/2 pl-10 pr-4 py-2 border rounded-md focus:outline-none"
        />
      </div>
      <nav className="flex items-center space-x-4">
        <Link href="/browse-category" className="flex items-center">
          <span className=" cursor-pointer">Browse by Category</span>
          <MdOutlineKeyboardArrowDown className="ml-2" />
        </Link>
        <Link href="/blog">
          <span className="text-gray-700 hover:text-black cursor-pointer">
            Blog
          </span>
        </Link>
        <Link href="https://github.com/Annysah/web-accessibility-resources">
          <span className="border rounded-md py-4 px-4 cursor-pointer">
            Submit a Resource
          </span>
        </Link>
      </nav>
    </header>
  );
}
