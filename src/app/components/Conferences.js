import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import conferences from "../data/conferences";
export default function Conferences() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="conferences" className="text-lg font-semibold">Conferences/Events 🗓️</h3>
        {conferences.map((conference) => (
          <div key={conference.id}>
            <Link
              href={conference.url}
              className="flex items-center text-gray-600"
            >
              <p>• {conference.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
