import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accessibly Speaking - Web Accessibility Resources</title>
        <meta
          name="description"
          content="Discover top accessibility resources"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Featured />
      </main>
    </>
  );
}
