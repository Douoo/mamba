import Image from "next/image";

function Features() {
  return (
    <section id="#tokenomics" className="features">
      <div className="grid lg:grid-flow-col lg:place-items-start">
        <div className="container--features">
          <h1 className="heading-lg clr-primary uppercase">
            Mamba <br />
            <span className="clr-secondary">Tokenomics</span>
          </h1>
          <ul className="feature-stats | my-12">
            <li>
              {" "}
              <span className="dot dot-presale"></span>50% of Supply to Presale
              Participants
            </li>
            <li>
              {" "}
              <span className="dot dot-lp"></span>15% of Supply to LP
            </li>
            <li>
              <span className="dot dot-token"></span>15% of Tokens for Exchanges
              + Market Making
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
  );
}

export default Features;
