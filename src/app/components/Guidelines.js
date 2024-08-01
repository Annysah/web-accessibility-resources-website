import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import guidelines from "../data/guidelines";
export default function Guidelines() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="accessibility-guidelines" className="text-lg font-semibold">Accessibility Guidelines 📝</h3>
        {guidelines.map((guideline) => (
          <div key={guideline.id}>
            <Link
              href={guideline.url}
              className="flex items-center text-gray-600"
            >
              <p>• {guideline.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
