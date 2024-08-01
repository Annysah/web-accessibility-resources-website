import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import tools from "../data/tools";
export default function Tools() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="tools" className="text-lg font-semibold">Tools 🛠️</h3>
        {tools.map((tool) => (
          <div key={tool.id}>
            <Link href={tool.url} className="flex items-center text-gray-600">
              <p>• {tool.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
