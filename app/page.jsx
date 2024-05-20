import AccordionPanel from "./components/Accordion";
import About from "./components/Sections/About";
import Button from "./components/Button";
import Character from "./components/Sections/Character";
import Features from "./components/Sections/Features";
import Header from "./components/Header";
import Image from "next/image";
import IconButton from "./components/IconButton";
import Link from "next/link";
import Roadmap from "./components/Sections/Roadmap";
import FAQ from "./components/Sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-custom">
        <About />
        <Features />
        {/* This is just picture in the background */}
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
      <footer className="footer">
        <div className="footer-container uppercase">
          <nav>
            <ul className="subtitle clr-primary flex flex-col lg:text-start">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Condition</Link>
              </li>
            </ul>
          </nav>

          <a href="/" className="nav-logo">
            <Image src="/logo.svg" alt="logo" width={184} height={50} />
          </a>
          <nav>
            <ul className="nav--footer">
              <li>
                <IconButton ariaLabel="Link to Twitter" type="primary">
                  <Image
                    src="/social-icons/x.svg"
                    alt="X (formerly twitter)"
                    width={20}
                    height={20}
                  />
                  <span className="sr-only">Twitter</span>
                </IconButton>
              </li>
              <IconButton ariaLabel="Link to Telegram" type="primary">
                <Image
                  src="/social-icons/telegram.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                />
                <span className="sr-only">Telegram</span>
              </IconButton>
              <li>
                <Button type="primary">Buy Mamba</Button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
