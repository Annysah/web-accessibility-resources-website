"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

      <nav className="flex items-center space-x-4 hidden md:flex">
        <div
          className="relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div className="flex items-center cursor-pointer">
            <span>Browse by Category</span>
            <MdOutlineKeyboardArrowDown className="ml-2" />
          </div>
          {isDropdownOpen && (
            <div className="absolute w-72 bg-black/[.9] text-white shadow-lg rounded-md p-4">
              <Link
                href="#accessibility-guidelines"
                className="block py-2 hover:text-gray-300"
              >
                Accessibility Guidelines
              </Link>
              <Link
                href="#online-courses"
                className="block py-2 hover:text-gray-300"
              >
                Online Courses
              </Link>
              <Link href="#articles" className="block py-2 hover:text-gray-300">
                Articles
              </Link>
              <Link href="#blogs" className="block py-2 hover:text-gray-300">
                Blogs
              </Link>
              <Link href="#books" className="block py-2 hover:text-gray-300">
                Books
              </Link>
              <Link
                href="#youtube-channels"
                className="block py-2 hover:text-gray-300"
              >
                Youtube Channels
              </Link>
              <Link
                href="#certifications"
                className="block py-2 hover:text-gray-300"
              >
                Certifications
              </Link>
              <Link href="#tools" className="block py-2 hover:text-gray-300">
                Tools
              </Link>
              <Link
                href="#assistive-technologies"
                className="block py-2 hover:text-gray-300"
              >
                Assistive Technologies
              </Link>
              <Link
                href="#conferences"
                className="block py-2 hover:text-gray-300"
              >
                Conferences
              </Link>
              <Link
                href="#communities"
                className="block py-2 hover:text-gray-300"
              >
                Communities
              </Link>
            </div>
          )}
        </div>
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
      <div className="flex items-center md:hidden">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-10 md:hidden">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <div className="relative">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>Browse by Category</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            {isDropdownOpen && (
              <div className="bg-white mt-2 pl-4">
                <Link
                  href="#accessibility-guidelines"
                  className="block py-2 hover:text-gray-400"
                >
                  Accessibility Guidelines
                </Link>
                <Link
                  href="#online-courses"
                  className="block py-2 hover:text-gray-400"
                >
                  Online Courses
                </Link>
                <Link
                  href="#articles"
                  className="block py-2 hover:text-gray-400"
                >
                  Articles
                </Link>
                <Link href="#blogs" className="block py-2 hover:text-gray-400">
                  Blogs
                </Link>
                <Link href="#books" className="block py-2 hover:text-gray-400">
                  Books
                </Link>
                <Link
                  href="#youtube-channels"
                  className="block py-2 hover:text-gray-400"
                >
                  Youtube Channels
                </Link>
                <Link
                  href="#certifications"
                  className="block py-2 hover:text-gray-400"
                >
                  Certifications
                </Link>
                <Link href="#tools" className="block py-2 hover:text-gray-400">
                  Tools
                </Link>
                <Link
                  href="#assistive-technologies"
                  className="block py-2 hover:text-gray-400"
                >
                  Assistive Technologies
                </Link>
                <Link
                  href="#conferences"
                  className="block py-2 hover:text-gray-400"
                >
                  Conferences
                </Link>
                <Link
                  href="#communities"
                  className="block py-2 hover:text-gray-400"
                >
                  Communities
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="block py-2">
            Blog
          </Link>
          <Link
            href="https://github.com/Annysah/web-accessibility-resources"
            className="block py-2"
          >
            Submit a Resource
          </Link>
        </div>
      )}
    </header>
  );
}
