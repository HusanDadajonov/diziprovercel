import axios from "../../../../axios";
import React, {useEffect, useState} from "react";
import Accordion from "../../../Accordion/accordion";
import { faqs } from "../../../../Store/Faqs";
import { useSelector } from "react-redux";

const FrequentQuestions = () => {
  const faqsData = useSelector(faqs)

  return (
    <section className="frequent-questions global__bg">
      <div className="container main-container">
        <h5 className="frequent-questions__heading global__text--color">
          Tez-tez beriladigan savollar
        </h5>
        <div className="accordion-wrapper">
          {faqsData?.data?.map((faq)=>(
            <Accordion key={faq?.id} faq={faq} />
          ))}
        </div>  
      </div>
    </section>
  );
};

export default FrequentQuestions;
