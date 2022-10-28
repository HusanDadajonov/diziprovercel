import React, { useState } from "react";
import AccordionDrop from "./AccordionDrop/accordionDrop";
import AccordionHeader from "./AccordionHeader/accordionHeader";

const Accordion = ({ faq }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className={`accordion global__text--color ${isAccordionOpen ? "accardion-open" : ""}`}>
      <AccordionHeader
        headerText={faq?.question}
        isAccordionOpen={isAccordionOpen}
        setIsAccordionOpen={setIsAccordionOpen}
        className={`global__text--color`}
      />
      {isAccordionOpen && <AccordionDrop dropText={faq?.answer} />}
    </div>
  );
};

export default Accordion;
