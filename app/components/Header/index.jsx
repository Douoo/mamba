import Button from "../Button";
import IconButton from "../IconButton";
import Image from "next/image";
import Link from "next/link";
import NavToggle from "./NavToggle";

function Header() {
  return (
    <header>
      <div className="navbar |">
        <Link href="/" className="nav-logo |">
          <Image src="/logo.svg" alt="logo" width={184} height={50} />
        </Link>
        <NavToggle />
        <nav className="nav-list">
          <ul className="nav-primary">
            <li>
              <Button type="secondary">Home</Button>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#tokenomics">Tokenomics</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
          <ul className="nav-secondary">
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

      <div className="hero container mx-auto text-center">
        <h1 className="heading-lg hero__title | clr-primary uppercase">
          <span className="clr-secondary">Mamba</span> <br />
          to The Moon
        </h1>
        <Image
          className="mx-auto hero__img"
          src="/images/hero.png"
          alt="Mamba on rocket"
          width={540}
          height={550}
        />
        <div className="grid gap-6 place-items-center">
          <p>
            Blast off with Mamba to The Moon! Explore the cosmos and beyond with
            us. Join the adventure now!
          </p>
          <Button type="primary">Explore Now</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
