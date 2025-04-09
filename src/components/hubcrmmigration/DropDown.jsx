"use client"
import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordionNew crm-dropdown ${isOpen ? "active" : ""}`}>
    <div
      onClick={onClick}
      style={{ cursor: "pointer", fontWeight: "bold" }}
      className="according-heading crm-accord-heading"
    >
      {title} <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && (
      <div
        className="accContentMain crm-accord-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )}
  </div>
);

const DropDown = ({ accordionData }) => { // Accept accordionData as a prop
  const [openIndex, setOpenIndex] = useState(0); // Set the first accordion to be open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
          <div className="faq-content crm-accordian">
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

export default DropDown;
