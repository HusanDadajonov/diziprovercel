import axios from "../../../../axios";
import React, {useEffect, useState} from "react";
import { faqs } from "../../../../Store/Faqs";
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccordionHeader from "../../../Accordion/AccordionHeader/accordionHeader";
import AccordionDrop from "../../../Accordion/AccordionDrop/accordionDrop";

import { BsChevronDown } from "react-icons/bs";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<BsChevronDown />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row',
  padding:"0",
  margin:"0 !important",
  minHeight: "auto",
  fontSize:"20px",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));


const FrequentQuestions = () => {
  const faqsData = useSelector(faqs)
  const [accardionActive,setAccardionActive] = useState(false)

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setAccardionActive(!accardionActive)
  };

  return (
    <section className="frequent-questions global__bg">
      <div className="container main-container">
        <h5 className="frequent-questions__heading global__text--color">
          Tez-tez beriladigan savollar
        </h5>
        <div className="accordion-wrapper">
          {faqsData?.data?.map((faq,index)=>(
            // <Accordion index={index} key={faq?.id} faq={faq} />

            <Accordion className={`global__bg global__text--color ${expanded === `panel${index + 1}` ? "accardion_open" : ""} `} key={faq.id} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
              <AccordionSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                <AccordionHeader
                  headerText={faq?.question}
                  className={`global__text--color`}
                  accardionActive={accardionActive}
                />
              </AccordionSummary>

              <AccordionDetails sx={{padding:"0"}}>
                <AccordionDrop dropText={faq?.answer} />
              </AccordionDetails>
            </Accordion>
          ))}


        </div>  
      </div>
    </section>
  );
};

export default FrequentQuestions;
