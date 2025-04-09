"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import salestop1 from "../../../public/images/salesforceconsultimg/sales-todo-1.png";
import salestop2 from "../../../public/images/salesforceconsultimg/sales-todo-2.png";
import salestop3 from "../../../public/images/salesforceconsultimg/sales-todo-3.png";
import salestop4 from "../../../public/images/salesforceconsultimg/sales-todo-4.png";
const MarketoModel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const sidebarRefs = useRef([]);

  const sections = [
    {
      title: "Planning for Marketo",
      img: salestop1,
      category: [
        "Comprehensive marketing audit",
        "Current technology stack assessment",
        "Customized Marketo implementation roadmap",
        "Strategic recommendation report",
      ],
      content: [
        "Our strategic planning process creates a comprehensive roadmap for your Marketo implementation. We analyze your current marketing infrastructure, business goals, and technological landscape to develop a targeted strategy. Our experts design a detailed plan that minimizes implementation risks and sets a clear path for marketing automation success.",
      ],
    },
    {
      title: "Onboarding and Implementation",
      img: salestop2,
      category: [
        "Initial consultation and requirement gathering",
        "Customized Marketo configuration",
        "Data migration and system integration",
        "Comprehensive training and knowledge transfer",
      ],
      content: [
        "We transform Marketo from a software platform into a strategic marketing tool for your organization. Our team handles complete implementation, including configuration, data migration, and system integration. We provide comprehensive training and support to ensure your team can immediately leverage Marketo's full potential.",
      ],
    },
    {
      title: "Custom Integrations",
      img: salestop3,
      category: [
        "Detailed integration requirements analysis",
        "Technology compatibility assessment",
        "Custom integration development",
        "Rigorous testing and validation",
      ],
      content: [
        "Our custom integration service creates a seamless marketing technology ecosystem tailored to your business needs. We develop bespoke solutions that enable advanced data synchronization and workflow automation across your existing tech stack. Our goal is to make Marketo a powerful central hub of your marketing intelligence.",
      ],
    },
    {
      title: "Training and Enablement",
      img: salestop4,
      category: [
        "Individual and team skill assessment",
        "Customized training curriculum",
        "Hands-on practical workshops",
        "Continuous learning support",
      ],
      content: [
        "We offer a comprehensive training program designed to transform your team into Marketo experts. Through personalized assessments, hands-on workshops, and continuous learning resources, we empower your staff with advanced marketing automation skills and strategies.",
      ],
    },
  ];

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, sections.length);
    sidebarRefs.current = sidebarRefs.current.slice(0, sections.length);
  }, []);

  const handleSidebarClick = (index) => {
    setActiveIndex(index);
    const targetElement = contentRefs.current[index];
    if (!targetElement) return;

    const elementRect = targetElement.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const topOffset = 80;

    window.scrollTo({
      top: absoluteElementTop - topOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const activeSection = contentRefs.current.findIndex((ref) => {
        if (!ref) return false;

        const rect = ref.getBoundingClientRect();
        const topThreshold = 100;
        const bottomThreshold = window.innerHeight / 2;

        return (
          (rect.top <= topThreshold && rect.bottom > topThreshold) ||
          (rect.top >= topThreshold && rect.top <= bottomThreshold)
        );
      });

      if (activeSection !== -1 && activeSection !== activeIndex) {
        setActiveIndex(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section className="salesforce-planning marketo-model py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Project <span> Engagement Models </span>
            </h2>
          </div>
        </div>
        <div className="row plaining-row">
          {/* Sidebar */}
          <div className="col-md-12 col-lg-2 col-sm-3">
            <div className="saleforce-sidepanel">
              <ul>
                {sections.map((section, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? "active" : ""}
                    ref={(el) => (sidebarRefs.current[index] = el)}
                  >
                    <div
                      className="clickable-points"
                      onClick={() => handleSidebarClick(index)}
                    >
                      <div className="sidepanel-icon">
                        <Image src={section.img} alt="" />
                      </div>
                      <h5>{section.title}</h5>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-12 col-lg-10 col-sm-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="planning-content"
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <h3>{section.title}</h3>
                <div className="planning-category">
                  <ul>
                    {section.category.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="planning-content">
                  {section.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketoModel;
