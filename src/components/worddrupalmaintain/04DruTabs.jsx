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
        <h3>Site Audit & Issue Identification</h3>
  <p>We start with a comprehensive website audit to identify bugs, security vulnerabilities, and performance issues that need immediate attention. Based on this assessment, we create a detailed action plan to resolve critical problems and improve overall website performance.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Security Updates & Patch Management</h3>
  <p>Our team ensures that all Drupal core and module updates are installed on time to protect your site from potential security threats and compatibility issues. Our proactive approach prevents hackers from exploiting vulnerabilities, keeping your website and customer data secure at all times.</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Performance Optimization & Bug Fixes</h3>
  <p>We optimize your website’s speed, fix broken links, eliminate slow-loading elements, and enhance database efficiency for a seamless user experience. Additionally, we identify and fix broken links, resolve coding errors, enhance database efficiency, and streamline content delivery for a smooth browsing experience. Our goal is to make your website faster, more reliable, and fully functional.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Continuous Monitoring & Support</h3>
  <p>With 24/7 website monitoring, we proactively detect and fix issues before they impact your business. With our dedicated support team available round the clock, you can rely on us to provide immediate troubleshooting, technical assistance, and expert guidance whenever you need it.</p>`,
  },
];
const DruTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              Our <span>Drupal Maintenance Process</span>
            </h2>
            <p className="text-center mt-2">
              We follow a structured process to ensure your Drupal website stays
              secure, optimized, and fully functional. Our expert team monitors,
              updates, and enhances your website to prevent unexpected issues.
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

export default DruTabs;
