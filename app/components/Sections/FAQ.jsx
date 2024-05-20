import AccordionPanel from "../Accordion";
function FAQ() {
  return (
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
  );
}

export default FAQ;
