import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import socials from "../data/socials";
export default function Socials() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 className="text-lg font-semibold">
          X Handles that Talk about Accessibility 🔗
        </h3>
        {socials.map((social) => (
          <div key={social.id}>
            <Link href={social.url} className="flex items-center text-gray-600">
              <p>• {social.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
