import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import courses from "../data/courses";
export default function Courses() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="online-courses" className="text-lg font-semibold">Online Courses 💻</h3>
        {courses.map((course) => (
          <div key={course.id}>
            <Link href={course.url} className="flex items-center text-gray-600">
              <p>• {course.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
