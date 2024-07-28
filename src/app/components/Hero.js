import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="flexflex-col items-center justify-center text-center">
      <h1 className="text-6xl font-semibold mt-20 mb-4 leading-snug">
        Discover resources on <br /> Web Accessibility
      </h1>
      <p className="text-xl mb-8">
        One-stop collection for the best accessibility resources. <br />
        Find guides, tools, courses and communities to help make your projects more
        accessible.
      </p>
      <div className="flex justify-center">
        <Link href="./webAccessContent" className="bg-black  text-white rounded-md py-4 px-6 flex items-center">
          Read about Web Accessibility <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
