"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const whiteseophase = [
  {
    eventKey: "experts",
    title: "Step 1",
    alt: "Step 1",
    content: `
        <h3>Initial Website Audit</h3>
  <p>We begin by thoroughly examining your Squarespace website to identify existing issues, security vulnerabilities, and performance bottlenecks that need immediate attention. Our comprehensive audit covers everything from page load times and mobile responsiveness to broken links and outdated plugins. This thorough evaluation gives us a complete picture of your website's health and helps us prioritize the most critical improvements.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Customized Maintenance Plan</h3>
  <p>Based on our audit findings and your specific business needs, we create a tailored maintenance plan that addresses your website's unique requirements and aligns with your goals. This personalized approach ensures you're not paying for unnecessary services while still receiving the exact support your website needs. We'll review this plan with you and make adjustments based on your feedback and budget considerations.</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Regular Maintenance Implementation</h3>
  <p>Our team implements scheduled maintenance activities, including updates, backups, security checks, and performance optimization to keep your website running smoothly. We perform these tasks during low-traffic periods to minimize any potential disruption to your business operations. Our technicians follow a detailed checklist for each maintenance session to ensure consistent quality and thoroughness.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Ongoing Monitoring & Support</h3>
  <p>We continuously monitor your website's performance and security, providing detailed reports and recommendations to ensure your online presence remains effective. Our monitoring tools alert us to potential issues before they impact your visitors, allowing us to take proactive measures. Every month, you'll receive an easy-to-understand report outlining completed maintenance tasks, website performance metrics, and recommendations for future improvements.</p>`,
  },
];
const SquareTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              Our <span>Squarespace Maintenance Process</span>
            </h2>
            <p className="text-center mt-2">
              We&apos;ve developed a streamlined approach to Squarespace website
              maintenance that delivers consistent results for our clients. Our
              process ensures no aspect of your website is overlooked and all
              maintenance tasks are completed efficiently.
            </p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="maintain-click-tab pb-5"
            >
              {whiteseophase.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div
                    className="maintainance-content"
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquareTabs;
