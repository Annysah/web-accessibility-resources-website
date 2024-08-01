import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import channels from "../data/channels";
export default function Channels() {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="ml-4 flex-1 leading-loose">
        <h3 id="youtube-channels" className="text-lg font-semibold">Youtube Channels 📹</h3>
        {channels.map((channel) => (
          <div key={channel.id}>
            <Link
              href={channel.url}
              className="flex items-center text-gray-600"
            >
              <p>• {channel.title}</p>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
