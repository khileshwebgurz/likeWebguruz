"use client";
import React, { useState } from "react";
import choose from "../../../public/images/manualsoftimages/testing-expert.webp";
import choosecheck from "../../../public/images/manualsoftimages/choose-check.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    title: "Human Insight",
    description:
      "Our testers think like real users, finding usability issues and edge cases that automated tests often miss.",
  },
  {
    title: "Flexible Adaptation",
    description:
      "Manual testing can quickly adapt to changing requirements without the need for extensive script modifications.",
  },
  {
    title: "Visual Verification",
    description:
      "Our testers can spot visual inconsistencies, layout problems, and design issues that automated tools might overlook.",
  },
  {
    title: "Exploratory Testing",
    description:
      "We go beyond scripted scenarios to uncover unexpected bugs through intuitive exploration of your application.",
  },
];

const ManualReasons = () => {
  const [openIndex, setOpenIndex] = useState(0); // First accordion open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="manualchoose-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="choose-img">
              <Image src={choose} alt="choose" style={{borderRadius:"20px"}} />
            </div>
          </div>
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-4">
              Why Choose <span>Manual Software Testing Services?</span>
            </h2>
            <div className="choose-accordion">
              <ul className="accordion-list">
                {accordionData.map((item, index) => (
                  <li key={index}>
                    <div
                      className="accordion-icon-text"
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="accordion-icon">
                        <Image src={choosecheck} alt="check" />
                      </div>
                      <div className="accordion-title">
                        <h4>{item.title}</h4>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="accordion-content"
                        >
                          <p className="description">{item.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualReasons;
