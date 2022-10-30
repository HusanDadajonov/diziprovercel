import React from "react";

import { AiOutlinePlus,AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { faqs } from "../../../Store/Faqs";

const AccordionHeader = ({
  headerText,
}) => {

  function OpenAccardionHandler() {
  }

  return (
    <div
      className="accordion-header"
      onClick={OpenAccardionHandler}
    >
      <h3 className="accordion-header__text global__text--color">{headerText}</h3>
     
    </div>
  );
};

export default AccordionHeader;
