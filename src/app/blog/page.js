import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header />

      <main className="max-w-3xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-center">Blog</h1>
        <div className="p-4 border-2 border-gray-200 rounded-lg my-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-semibold mr-4 md:text-base">
              Web Accessibility in the Age of AI: Friend or Foe?
            </h1>
            <Link href="https://medium.com/@AnisatA/web-accessibility-in-the-age-of-ai-friend-or-foe-337b7d4de76e">
              <BsBoxArrowUpRight className="text-xl" />
            </Link>
          </div>
          <p className="text-sm md:text-xs mb-2">June, 2024</p>
          <p className="text-sm md:text-xs leading-loose">
            Artificial intelligence (AI) is rapidly transforming every facet of
            our lives, and the web is no exception. However, regarding web
            accessibility, the role of AI is a double-edged sword.
          </p>
        </div>

        <div className="p-4 border-2 border-gray-200 rounded-lg my-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-semibold mr-4 md:text-base">
              Tech for All: How Accessible is Our Digital Future?
            </h1>
            <Link href="https://medium.com/@AnisatA/tech-for-all-how-accessible-is-our-digital-future-555a93c14a22">
              <BsBoxArrowUpRight className="text-xl" />
            </Link>
          </div>
          <p className="text-sm md:text-xs mb-2">May, 2024</p>
          <p className="text-sm md:text-xs leading-loose">
            The rise of new inventions like virtual reality (VR) and artificial
            intelligence (AI) has me giddy with possibility. But with every
            exciting leap forward, a nagging question pops up: will these
            innovations be accessible to everyone, or will they widen the
            digital divide?
          </p>
        </div>

        <div className="p-4 border-2 border-gray-200 rounded-lg my-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-semibold mr-4 md:text-base">
              Beyond Compliance: Web Accessibility as a Competitive Advantage
            </h1>
            <Link href="https://medium.com/@AnisatA/beyond-compliance-web-accessibility-as-a-competitive-advantage-93a2d988bfac">
              <BsBoxArrowUpRight className="text-xl" />
            </Link>
          </div>
          <p className="text-sm md:text-xs mb-2">April, 2024</p>
          <p className="text-sm md:text-xs leading-loose">
            For years, the conversation around web accessibility has been framed
            as a legal obligation. We focus on ticking the boxes of WCAG
            guidelines, fearing lawsuits and bad PR. But what if we shifted the
            perspective entirely?
          </p>
        </div>

        <div className="p-4 border-2 border-gray-200 rounded-lg my-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg font-semibold mr-4 md:text-base">
              What is Web Accessibility?
            </h1>
            <Link href="https://accessibly-speaking.vercel.app/webAccessContent">
              <BsBoxArrowUpRight className="text-xl" />
            </Link>
          </div>
          <p className="text-sm md:text-xs mb-2"></p>
          <p className="text-sm md:text-xs leading-loose">
            Web accessibility is the practice of making websites usable by
            everyone, regardless of their abilities or disabilities. It involves
            designing and developing digital content that is inclusive and
            accessible to people with a wide range of impairments, including
            visual, auditory, motor, and cognitive disabilities.
          </p>
        </div>
      </main>
    </>
  );
};

export default Blog;
