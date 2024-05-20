import Button from "../Button";
import IconButton from "../IconButton";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
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
  );
}

export default Footer;
