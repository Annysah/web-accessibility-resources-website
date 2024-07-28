import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import jobs from "../data/jobs";
export default function Jobs() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 className="text-lg font-semibold">Job Boards 💼</h3>
        {jobs.map((job) => (
          <div key={job.id}>
            <Link href={job.url} className="flex items-center text-gray-600">
              <p>• {job.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
