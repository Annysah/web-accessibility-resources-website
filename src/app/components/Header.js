"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
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
        <div className="hidden md:flex flex-1 mx-4 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for resources"
            className="w-full md:w-1/2 pl-10 pr-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/browse-category" className="flex items-center">
            <span className="cursor-pointer">Browse by Category</span>
            <MdOutlineKeyboardArrowDown className="ml-2" />
          </Link>
          <Link href="/blog">
            <span className="text-gray-700 hover:text-black cursor-pointer">
              Blog
            </span>
          </Link>
          <Link href="https://github.com/Annysah/web-accessibility-resources">
            <span className="border rounded-md py-2 px-4 cursor-pointer">
              Submit a Resource
            </span>
          </Link>
        </nav>
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars className="text-gray-700" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-8 pb-4">
          <div className="flex items-center mb-4 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for resources"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="/browse-category">
              <span className="flex items-center cursor-pointer">
                Browse by Category
                <MdOutlineKeyboardArrowDown className="ml-2" />
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-700 hover:text-black cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="https://github.com/Annysah/web-accessibility-resources">
              <span className="border rounded-md py-2 px-4 cursor-pointer">
                Submit a Resource
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
