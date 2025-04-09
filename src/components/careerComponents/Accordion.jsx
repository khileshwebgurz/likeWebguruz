"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, jobs, isOpen, onClick }) => {
  return (
    <div className={`accordionNew ${isOpen ? "active" : ""}`}>
      <div
        onClick={onClick}
        style={{ cursor: "pointer", fontWeight: "bold" }}
        className="according-heading"
      >
        <h2>
          {title.replace(/&amp;/g, "&")} <span>{isOpen ? "-" : "+"}</span>
        </h2>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        {isOpen && (
          <div>
            {jobs.length > 0 ? (
              <ul>
                {jobs.map((job) => (
                  <Link key={job.id} href={`/jobs-in-mohali/${job.slug}`}>
                    <li className="tooltip">
                      {job.title.rendered}
                      <span className="tooltip-text">Click to view job details</span>
                    </li>
                    <span className="opening-wgz">
                      No. of openings: {job.acf.no_of_opening}
                    </span>
                  </Link>
                ))}
              </ul>
            ) : (
              <p>No jobs available.</p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Accordion = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(0); // Start with the first accordion item open

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Close if the same index is clicked, otherwise open the new one
  };

  return (
    <div>
      {categories.map((category, index) => (
        <AccordionItem
          key={category.id}
          title={category.name}
          jobs={category.jobs}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;