"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordionNew ${isOpen ? "active" : ""}`}>
    <div
      onClick={onClick}
      style={{ cursor: "pointer", fontWeight: "bold" }}
      className="according-heading"
    >
      {title} <span>{isOpen ? "-" : "+"}</span>
    </div>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.6 }}
          style={{ overflow: "hidden" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="accContentMain"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ServiceFaq = ({ accordionData }) => {
  // Accept accordionData as a prop
  const [openIndex, setOpenIndex] = useState(0); // Set the first accordion to be open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="webguruz-Faq pb-5">
      <div className="container">
        <div className="row heading-main text-center">
          <h2 className="Faq-heading">
            Frequently asked <span> Questions</span>
          </h2>
        </div>
        <div className="row">
          <div className="faq-content">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
