"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`magento-dropdown ${isOpen ? "active" : ""}`}>
    <div
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="magento-accord-heading"
    >
    <h4>  {title} </h4> <span><FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} /></span>
    </div>
    {isOpen && (
      <div
        className="accContentMain magento-accord-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )}
  </div>
);

const MagnetoDrop = ({ accordionData }) => {
  // Accept accordionData as a prop
  const [openIndex, setOpenIndex] = useState(0); // Set the first accordion to be open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" magento-accordian">
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
  );
};

export default MagnetoDrop;
