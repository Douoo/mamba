import About from "./components/Sections/About";
import Character from "./components/Sections/Character";
import Features from "./components/Sections/Features";
import Header from "./components/Header";
import Image from "next/image";
import Roadmap from "./components/Sections/Roadmap";
import FAQ from "./components/Sections/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-custom">
        <About />
        <Features />
        {/* This is a picture in the background - positioned absolute */}
        <Image
          className="feaure_char_stone"
          src="/images/char_st.png"
          alt="stone"
          width={200}
          height={200}
        />
        <Character />
        <Roadmap />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
