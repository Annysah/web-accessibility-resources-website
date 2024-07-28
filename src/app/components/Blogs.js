import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import blogs from "../data/blogs";
export default function Blogs() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 className="text-lg font-semibold">Blogs 📌</h3>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Link href={blog.url} className="flex items-center text-gray-600">
              <p>• {blog.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
