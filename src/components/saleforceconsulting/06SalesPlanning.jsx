"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import salestop1 from '../../../public/images/salesforceconsultimg/sales-todo-1.png'
import salestop2 from '../../../public/images/salesforceconsultimg/sales-todo-2.png'
import salestop3 from '../../../public/images/salesforceconsultimg/sales-todo-3.png'
import salestop4 from '../../../public/images/salesforceconsultimg/sales-todo-4.png'
const SalesPlanning = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const sidebarRefs = useRef([]);

  const sections = [
    {
      title: "Planning for Salesforce",
      img:salestop1,
      category: [
        "Business process analysis",
        "Requirements gathering and documentation",
        "Solution architecture design",
        "Implementation roadmap creation",
      ],
      content: [
        "Our Salesforce planning services help you create a solid foundation for success.",
        "We begin by thoroughly understanding your business goals and challenges. Our consultants analyze your existing processes, identify improvement opportunities, and create a detailed Salesforce implementation roadmap. This planning phase is crucial for ensuring that the final solution aligns perfectly with your business objectives and delivers the expected ROI.",
      ],
    },
    {
      title: "Salesforce Onboarding and Implementation",
      img:salestop2,
      category: [
        "System configuration and customization",
        "Data migration and cleansing",
        "Integration with existing systems",
        "User training and adoption support",
      ],
      content: [
        "We handle the complete Salesforce implementation process to ensure quick time-to-value. Our implementation services cover everything from basic setups to complex customizations. We ensure that your data is properly migrated, all integrations work smoothly, and your team is fully trained on the new system. With our structured implementation approach, you can start leveraging Salesforce benefits in weeks rather than months.",
      ],
    },
    {
      title: "Custom Salesforce Integrations",
      img:salestop3,
      category: [
        "Integration requirement analysis",
        "API development and configuration",
        "Data mapping and transformation",
        "Testing and deployment",
      ],
      content: [
        "Connect Salesforce with your entire technology stack for seamless data flow. We specialize in connecting Salesforce with other business applications, including ERP systems, accounting software, marketing automation platforms, and custom applications. Our integration services ensure that data flows seamlessly between systems, eliminating manual data entry and providing a unified view of your business information.",
      ],
    },
    {
      title: "Salesforce Training",
      img:salestop4,
      category: [
        "Role-based training curriculum development",
        "Hands-on training sessions",
        "Knowledge transfer documentation",
        "Ongoing learning support",
      ],
      content: [
        "Comprehensive training programs to maximize user adoption and platform utilization. Our training programs are designed to help your team quickly become proficient with Salesforce. We offer role-specific training sessions, customized to the exact functions your team members will be performing. Additionally, we provide detailed documentation and ongoing support to ensure continued learning and adoption.",
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
    <section className="salesforce-planning py-5">
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

export default SalesPlanning;
