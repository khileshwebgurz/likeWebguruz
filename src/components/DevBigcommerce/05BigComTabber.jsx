"use client";
import React, { useState } from "react";
import Image from "next/image";
import big1 from "../../../public/images/bigcommerceimg/com-step-1.webp";
import big2 from "../../../public/images/bigcommerceimg/com-step-2.webp";
import big3 from "../../../public/images/bigcommerceimg/com-step-3.webp";
import big4 from "../../../public/images/bigcommerceimg/com-step-4.webp";
import big5 from "../../../public/images/bigcommerceimg/com-step-5.webp";

const tabData = [
  {
    title: "Discovery & Consultation",
    content: `<p>Every successful eCommerce project starts with a deep understanding of the business it serves. In this initial phase, we take the time to learn about your brand, products, target audience, and business objectives. Our experts conduct in-depth discussions with your team to identify pain points, opportunities, and specific requirements for your online store.</p>
    <p>Key activities in this phase include:</p>
            <ul>
  <li>Business requirement gathering</li>
  <li>Competitor analysis and market research</li>
  <li>Identifying key challenges and objectives</li>
  <li>Defining project scope, timelines, and budget</li>
  <li>Creating a roadmap for development</li>
</ul>
 <p>This consultation ensures that our BigCommerce development strategy aligns perfectly with your vision, setting the foundation for a powerful and profitable online store.</p>`,
    image: big1,
  },
  {
    title: "Design & UI/UX",
    content: `<p>Your website’s design plays a crucial role in attracting customers and driving conversions. Our UI/UX designers focus on creating visually stunning, intuitive, and mobile-responsive store layouts that enhance the shopping experience.</p>
    <p>During this phase, we:</p>
          <ul>
  <li>Develop wireframes and prototypes to visualize the store’s structure</li>
  <li>Design a custom, brand-aligned theme for a unique store appearance</li>
  <li>Ensure mobile-first design for seamless browsing on all devices</li>
  <li>Optimize navigation and user flow to minimize bounce rates</li>
  <li>Implement engaging CTAs, clear product displays, and optimized checkout pages</li>
</ul>
 <p>We ensure that every element of your store is designed to increase user engagement, improve dwell time, and maximize sales.</p>`,
    image: big2,
  },
  {
    title: "Development & Customization",
    content: `<p>Once the design is finalized, our certified BigCommerce developers start bringing it to life. This phase involves custom coding, theme implementation, API integrations, and feature enhancements to make your store highly functional and performance-driven.</p>
    <p>Key development activities include:</p>
          <ul>
  <li><strong>Custom Theme Development:</strong> Converting design files into a fully functional BigCommerce theme</li>
  <li><strong>Feature Customization:</strong> Adding tailored functionalities such as advanced product filters, custom checkout processes, and interactive elements</li>
  <li><strong>API Integrations:</strong> Connecting third-party apps, payment gateways, shipping providers, and CRM tools</li>
  <li><strong>Performance Optimization:</strong> Ensuring fast loading times and seamless performance</li>
  <li><strong>Security Implementation:</strong> Integrating SSL, data encryption, and other security measures</li>
</ul>
 <p>Our development process ensures that your BigCommerce store is secure, scalable, and future-ready, providing the best shopping experience for your customers.</p>`,
    image: big3,
  },
  {
    title: "Testing & Quality Assurance",
    content: `<p>Before launching your store, we conduct rigorous testing to eliminate bugs, enhance performance, and ensure a seamless shopping experience. Our QA specialists follow a comprehensive testing approach to validate every functionality and interaction.</p>
    <p>Testing procedures include:</p>
          <ul>
  <li><strong>Functional Testing:</strong> Ensuring all features, buttons, and forms work correctly</li>
  <li><strong>Performance Testing:</strong> Checking page load speed, server response time, and scalability</li>
  <li><strong>Cross-Browser Testing:</strong> Verifying smooth performance on Chrome, Firefox, Safari, and Edge</li>
  <li><strong>Mobile Responsiveness Testing:</strong> Ensuring your store looks perfect on smartphones, tablets, and desktops</li>
  <li><strong>Security Testing:</strong> Identifying vulnerabilities and implementing protection measures</li>
</ul>
 <p>By the end of this phase, your BigCommerce store will be 100% optimized, error-free, and ready for launch.</p>`,
    image: big4,
  },
  {
    title: "Launch & Support",
    content: `<p>After testing is successfully completed, we proceed with the final deployment of your BigCommerce store. This involves setting up hosting, configuring domain settings, and conducting a final review to ensure everything is in place.</p>
    <p>Key post-launch activities include:</p>
          <ul>
  <li>Final deployment on a live server</li>
  <li>Performance monitoring to ensure smooth operations</li>
  <li>SEO setup and indexing for better search rankings</li>
  <li>Onboarding support for your team to manage the store efficiently</li>
  <li>Ongoing maintenance and updates to prevent downtime</li>
</ul>
 <p>Even after your store goes live, our work doesn’t stop. We offer continuous support, security updates, and performance enhancements to ensure your eCommerce business runs smoothly and grows over time.</p>`,
    image: big5,
  },
];

const BigComTabber = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bigcommercedev-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
            <span>    Our  BigCommerce </span> Development Process
            </h2>
          </div>
        </div>
        <div className="row big-commerce-row">
          {/* Left Side Tabs */}
          <div className="col-md-6 col-12">
            <div className="commerc-experience-list">
              <ul className="commerc-tabs-list">
                {tabData.map((tab, index) => (
                  <li
                    key={index}
                    className={activeTab === index ? "active" : ""}
                    onClick={() => setActiveTab(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>{tab.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-md-6 col-12">
            <div className="experience-content">
              <div className="experience-tab-one">
                <Image src={tabData[activeTab].image} alt="design" />
                <h4>{tabData[activeTab].title}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: tabData[activeTab].content,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigComTabber;
