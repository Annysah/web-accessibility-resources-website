import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-10 mb-4 leading-snug">
        Discover resources on <br /> Web Accessibility
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
        One-stop collection for the best accessibility resources. <br />
        Find guides, tools, courses and communities to help make your projects
        more accessible.
      </p>
      <div className="flex justify-center">
        <Link
          href="./webAccessContent"
          className="bg-black text-white rounded-md py-3 px-5 sm:py-4 sm:px-6 flex items-center text-sm sm:text-base"
        >
          Read about Web Accessibility <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
