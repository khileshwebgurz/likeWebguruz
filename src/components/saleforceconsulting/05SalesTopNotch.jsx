"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import servTeam1 from "../../../public/images/salesforceconsultimg/sales-why.jpg";
import email from "../../../public/images/salesforceconsultimg/sales-development.jpg";
import email2 from "../../../public/images/salesforceconsultimg/sales-integarte.jpg";
import email27 from "../../../public/images/salesforceconsultimg/sales-support.jpg";

const SalesTopNotch = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  const images = [servTeam1, email, email2, email27];

  const contentData = [
    {
      title: "Salesforce Implementation & Setup",
      description:
        "We handle the complete Salesforce setup process, from initial configuration to data migration and user training. Our implementation services ensure a smooth transition to Salesforce with minimal disruption to your daily operations.",
      list: [
        "Custom configuration tailored to your specific business processes",
        "Seamless data migration from existing systems",
        "User training and adoption strategies to maximize platform utilization",
      ],
    },
    {
      title: "Salesforce Customization & Development",
      description:
        "We build custom Salesforce solutions that perfectly match your business workflows and requirements.",
      list: [
        "Custom object and field creation to capture your unique business data",
        "Workflow and process automation to increase efficiency",
        "Custom application development on the Salesforce platform",
      ],
    },
    {
      title: "Salesforce Integration Services",
      description:
        "Connect Salesforce with your existing business applications for a unified business ecosystem.",
      list: [
        "Integration with ERP, accounting, and e-commerce platforms",
        "API development and management",
        "Data synchronization across multiple systems",
      ],
    },
    {
      title: "Salesforce Support & Maintenance",
      description:
        "Ongoing support and optimization to ensure your Salesforce environment continues to deliver value.",
      list: [
        "Regular system health checks and performance optimization",
        "User support and troubleshooting",
        "Periodic reviews and system enhancements",
      ],
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="salesforce-effecieny py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-4 mb-md-5 col-12">
            <h2>
              Comprehensive Salesforce <span>Consulting Services We</span>
            </h2>
            <p>
              Our range of Salesforce consulting services is designed to address
              all aspects of your CRM needs:
            </p>
          </div>

          {/* Left Side Image */}
          <div className="col-md-6 col-12">
            <div className="sales-left-img">
              <div className="sale-first-img">
                <Image src={images[activeIndex]} alt={contentData[activeIndex].title} />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="sale-right-content">
              {contentData.map((content, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className={`sale-right-content-one ${index === activeIndex ? "active" : ""}`}
                >
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                  <ul className="sale-list">
                    {content.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Dots for Navigation */}
            <div className="slider-dots">
              {contentData.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={dotIndex === activeIndex ? "active" : ""}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesTopNotch;
