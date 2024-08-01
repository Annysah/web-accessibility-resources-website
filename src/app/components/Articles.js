import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import articles from "../data/articles";
export default function Articles() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="articles" className="text-lg font-semibold">Articles 📃</h3>
        {articles.map((article) => (
          <div key={article.id}>
            <Link
              href={article.url}
              className="flex items-center text-gray-600"
            >
              <p>• {article.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
