import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import communities from "../data/communities";
export default function Communities() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 className="text-lg font-semibold">Organizations/Communities 👥</h3>
        {communities.map((community) => (
          <div key={community.id}>
            <Link
              href={community.url}
              className="flex items-center text-gray-600"
            >
              <p>• {community.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
