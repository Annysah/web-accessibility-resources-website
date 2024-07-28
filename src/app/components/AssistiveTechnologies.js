import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import assistiveTechnologies from "../data/assistiveTechnologies";
export default function AssistiveTechnologies() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 className="text-lg font-semibold">Assistive Technologies 📱</h3>
        {assistiveTechnologies.map((assistiveTechnologie) => (
          <div key={assistiveTechnologie.id}>
            <Link
              href={assistiveTechnologie.url}
              className="flex items-center text-gray-600"
            >
              <p>• {assistiveTechnologie.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
