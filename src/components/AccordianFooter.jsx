"use client";
import { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null); // Ref for the content wrapper
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setContentHeight(contentRef.current.scrollHeight); // Set height to scrollHeight when open
    } else {
      setContentHeight(0); // Collapse when closed
    }
  }, [isOpen]);

  return (
    <div className={`accordion-footer ${isOpen ? "active" : ""}`}>
      <p
        style={{ cursor: "pointer", fontWeight: "bold" }}
        onClick={onClick}
      >
        {title}
      </p>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${contentHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
        className="bottom-foot col-12"
      >
        {content}
      </div>
    </div>
  );
};

const AccordianFooter = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Start with all closed

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="col-sm-12 col-xs-12 footer-bottom left">
      <AccordionItem
        title="Statutory legal information"
        content={
          <>
            WebgGuruz is the Registered Name of WebGuruz Technologies Pvt. Ltd.,
            a mobile app and web development company having its office in
            Mohali, Punjab, India at the registered address- C-205, 4th Floor,
            SM Heights, Sector 74, Mohali, 160055.The personal
            information(Name, Email, Phone and Project Details) that you submit
            to us through our website will remain confidential. We don&apos;t
            sell, share or rent this information to third-parties unless
            required by the law enforcement agencies governed by the State Govt.
            or the Govt. of India. For details, refer to our Privacy Policy. Our
            team will use this information to send updates to you about our
            company and projects or contact you if requested or when it deems
            necessary. You may opt out of receiving this communication by
            dropping us an email on{" "}
            <span>
              <a
                href="mailto:info@webguruz.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@webguruz.in
              </a>
            </span>
          </>
        }
        isOpen={openIndex === 0}
        onClick={() => handleToggle(0)}
      />
    </div>
  );
};

export default AccordianFooter;
