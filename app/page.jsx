import AccordionPanel from "./components/Accordion";
import Button from "./components/Button";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Image from "next/image";
import IconButton from "./components/IconButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-custom">
        <section id="about" className="about">
          <Card className="about--card text-center" type="primary">
            <h1 className="heading-lg clr-primary uppercase">
              A <span className="clr-secondary">Memecoin</span> on a mission
            </h1>
            <p className="mb-5">
              Mamba, a plucky pup with humble beginnings, sets his sights on the
              moon after a life spent rummaging through trash cans and seeking
              support from kind souls.
            </p>
            <p className="mb-5">
              Now, alongside players like you, Mamba embarks on an exhilarating
              mission fraught with challenges and excitement. Your task? Guide
              Mamba through a cosmic obstacle course, evading foes and gathering
              coins along the way.
            </p>
            <p className="clr-secondary mb-5">
              Join forces with Mamba to conquer the cosmos and achieve the
              highest scores in this captivating endless runner game!
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button text="Telegram" type="primary" />
              <Button text="Connect X" type="primary" />
            </div>
          </Card>
        </section>

        <section id="#tokenomics" className="features">
          <div className="grid lg:grid-flow-col lg:place-items-start">
            <div className="container--features">
              <h1 className="heading-lg clr-primary">
                Mamba <br />
                <span className="clr-secondary">Tokenomics</span>
              </h1>
              <ul className="feature-stats | my-12">
                <li>
                  {" "}
                  <span className="dot dot-presale"></span>50% of Supply to
                  Presale Participants
                </li>
                <li>
                  {" "}
                  <span className="dot dot-lp"></span>15% of Supply to LP
                </li>
                <li>
                  <span className="dot dot-token"></span>15% of Tokens for
                  Exchanges + Market Making
                  <ul className="list-disc pl-12">
                    <li>10% for CEX</li>
                    <li>5% for Market Making</li>
                  </ul>
                </li>
                <li>
                  <span className="dot dot-marketing"></span>10% Marketing
                  <ul className="list-disc pl-12">
                    <li>5% Strategic Partnerships</li>
                    <li>5% Advertiseme</li>
                  </ul>
                </li>
                <li>
                  <span className="dot dot-team"></span> 10% Team/Advisors
                  <ul className="list-disc pl-12">
                    <li>5% Team (Vested for 1 Year)</li>
                    <li>5% Advisors</li>
                  </ul>
                </li>
              </ul>
            </div>

            <Image
              src="/images/features.png"
              alt="stats"
              width={600}
              height={600}
            />
          </div>
        </section>
        <Image
          className="feaure_char_stone"
          src="/images/char_st.png"
          alt="stone"
          width={200}
          height={200}
        />
        <section className="character  text-center">
          <h1 className="heading-lg clr-primary mb-12">
            <span className="clr-secondary">MEET THE</span> CHARACTERS
          </h1>
          <Carousel />
        </section>
        <section id="#roadmap" className="roadmap">
          <h1 className="heading-lg clr-primary uppercase text-center">
            Mamba <span className="clr-secondary">Roadmap</span>
          </h1>
          <div className="roadmap-flow">
            <div className="roadmap-item left" data-nth={1}>
              <Card className="p-12 roadmap-content" type="primary">
                <h2 className="heading-md clr-primary">ADD BASE TO METAMASK</h2>
                <p>
                  Download & install the Metamask Wallet either from the app
                  store on your phone or the browser extension for desktop.
                </p>
              </Card>
            </div>

            <div className="roadmap-item right" data-nth={2}>
              <Card className="p-12 roadmap-content" type="primary">
                <h2 className="heading-md clr-primary">LOAD UP ETH</h2>
                <p>
                  Head over to bridge.base.org, connect your wallet on the
                  Ethereum blockchain. Choose how much ETH you would like to
                  bridge from the erc20 network to Base.
                </p>
              </Card>
            </div>
            <div className="roadmap-item left" data-nth={3}>
              <Card className="p-12 roadmap-content" type="primary">
                <h2 className="heading-md clr-primary">BUY $Mamba</h2>
                <p>
                  Head over to Uniswap and paste the $ROOST contract Address
                  listed on this website to swap your ETH.
                </p>
              </Card>
            </div>
            <div className="roadmap-item right" data-nth={4}>
              <Card className="p-12 roadmap-content" type="primary">
                <h2 className="heading-md clr-primary">ADD BASE TO METAMASK</h2>
                <p>
                  Now all you have to do is add the $ROOST contract address to
                  your Metamask Wallet for your $ROOST tokens to show. Welcome
                  aboard!
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="#faq" className="faq">
          <h1 className="heading-lg clr-primary uppercase mb-12">
            Frequently <span className="clr-secondary">Asked Questions</span>
          </h1>
          <div className="">
            <AccordionPanel
              title="Who is Mamba?"
              content=" ROOST is the champion of the Base ecosystem. Protecting, vibing and
          growing the $ROOST community."
              open="true"
            />
            <AccordionPanel
              title="What Chain is Mamba On?"
              content=" ROOST is the champion of the Base ecosystem. Protecting, vibing and
          growing the $ROOST community."
            />
            <AccordionPanel
              title=" How can I buy $Mamba?"
              content=" ROOST is the champion of the Base ecosystem. Protecting, vibing and
          growing the $ROOST community."
            />
          </div>
        </section>
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
                <Button text="Buy Mamba" type="primary" />
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
