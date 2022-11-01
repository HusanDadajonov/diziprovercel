import React, { useState } from "react";
import { useSelector } from "react-redux";
import { faqs } from "../../Store/Faqs";
import AccordionDrop from "./AccordionDrop/accordionDrop";
import AccordionHeader from "./AccordionHeader/accordionHeader";

const Accordion = ({ faq,index }) => {
  const faqsData = useSelector(faqs)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  // const [accardionActive,setAccardionActive] = useState()
  return (
    <div className={`accordion global__text--color ${isAccordionOpen ? "accardion-open" : ""}`}>
      <AccordionHeader
        headerText={faq?.question}
        className={`global__text--color`}
        index={index}
      />
    </div>
  );
};

export default Accordion;
