import Guidelines from "./Guidelines";
import Courses from "./Courses";
import Articles from "./Articles";
import Blogs from "./Blogs";
import Books from "./Books";
import Channels from "./Channels";
import Certifications from "./Certifications";
import Tools from "./Tools";
import AssistiveTechnologies from "./AssistiveTechnologies";
import Communities from "./Communities";
import Socials from "./Socials";
import Conferences from "./Conferences";
import Jobs from "./Jobs";

export default function Featured() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Resources</h2>
        <div className="grid grid-cols-1 gap-6">
          <Guidelines />
          <Courses />
          <Articles />
          <Blogs />
          <Books />
          <Channels />
          <Certifications />
          <Tools />
          <AssistiveTechnologies />
          <Communities />
          <Socials />
          <Conferences />
          <Jobs />
        </div>
      </div>
    </section>
  );
}
