import React from "react";

import { AiOutlinePlus,AiOutlineClose } from "react-icons/ai";

const AccordionHeader = ({
  isAccordionOpen,
  setIsAccordionOpen,
  headerText,
}) => {
  return (
    <div
      className="accordion-header "
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
    >
      <h3 className="accordion-header__text global__text--color">{headerText}</h3>
     
        <div className="accardion-header__icon">
          {
             isAccordionOpen ?  <AiOutlineClose /> :     <AiOutlinePlus />
          }
           
        </div>
    </div>
  );
};

export default AccordionHeader;
