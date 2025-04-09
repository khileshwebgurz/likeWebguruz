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
        <h3>System Audit & Assessment</h3>
  <p>We perform a thorough evaluation of your Keap implementation, identifying potential issues before they become major problems and documenting opportunities for improvement. Our audit covers everything from automation workflows and CRM configurations to data integrity and third-party integrations. By understanding the strengths and weaknesses of your current setup, we ensure that your system is aligned with your business objectives and capable of delivering optimal performance.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Strategic Planning</h3>
  <p>Based on our findings, we develop a customized maintenance plan tailored to your business needs, prioritizing critical issues and setting clear timelines for resolution. Our strategy includes recommendations for workflow enhancements, data management improvements, and automation refinements to streamline operations. We also provide a roadmap for long-term system optimization, ensuring your Keap CRM evolves with your business and stays ahead of potential challenges.
</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Implementation & Optimization</h3>
  <p>Our team implements the necessary fixes and optimizations, ensuring your Keap system is properly configured and running efficiently. Whether it's troubleshooting errors, refining automation sequences, or improving email deliverability, we apply best practices to maximize system performance. We also fine-tune lead management, campaign tracking, and reporting features, helping you gain better insights and achieve greater marketing and sales effectiveness.
</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Ongoing Monitoring & Support</h3>
  <p>We provide continuous monitoring and support to catch and address any issues as they arise, ensuring your system remains stable and effective. Our team proactively tracks system performance, identifies anomalies, and applies updates to keep your Keap implementation secure and up to date. With dedicated customer support and regular performance reviews, we help you adapt to business changes, prevent downtime, and maintain a seamless CRM experience.</p>`,
  },
];
const KeapTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              Our <span>Keap Maintenance Process</span>
            </h2>
            <p className="text-center mt-2">
              We&apos;ve developed a structured approach to Keap maintenance that
              ensures no detail is overlooked. Our process begins with a
              comprehensive system audit and ends with ongoing optimization to
              keep your system running at peak efficiency.
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

export default KeapTabs;
