import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import books from "../data/books";
export default function Books() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="books" className="text-lg font-semibold">Books 📚</h3>
        {books.map((book) => (
          <div key={book.id}>
            <Link href={book.url} className="flex items-center text-gray-600">
              <p>• {book.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
