import Button from "../Button";
import Card from "../Card";


function About() {
  return (
    <section id="about" className="about">
      <Card className="about--card text-center lg:p-12" type="primary">
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
          mission fraught with challenges and excitement. Your task? Guide Mamba
          through a cosmic obstacle course, evading foes and gathering coins
          along the way.
        </p>
        <p className="clr-secondary mb-5">
          Join forces with Mamba to conquer the cosmos and achieve the highest
          scores in this captivating endless runner game!
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button type="primary">Telegram</Button>
          <Button type="primary">Connect X</Button>
        </div>
      </Card>
    </section>
  );
}

export default About;
