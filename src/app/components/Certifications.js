import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import certifications from "../data/certifications";
export default function Certifications() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 className="text-lg font-semibold">Certifications 🎓</h3>
        {certifications.map((certification) => (
          <div key={certification.id}>
            <Link
              href={certification.url}
              className="flex items-center text-gray-600"
            >
              <p>• {certification.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
