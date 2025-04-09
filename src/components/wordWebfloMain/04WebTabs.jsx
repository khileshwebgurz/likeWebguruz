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
        <h3>Initial Assessment</h3>
  <p>Our team conducts a thorough evaluation of your Webflow website to identify potential issues, performance bottlenecks, and areas for improvement. We also review your website's structure, content management system, and any third-party integrations to ensure they're working correctly and efficiently. This comprehensive analysis allows us to create a complete picture of your website's current state and identify priorities for maintenance.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Customized Maintenance Plan</h3>
  <p>Based on our assessment, we create a tailored maintenance plan that addresses your specific needs and goals. This plan includes regular updates, security checks, and performance optimizations. Our maintenance plans aren't one-size-fits-all, we understand that an e-commerce site has different needs than a portfolio website, and we adjust our approach accordingly.</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Proactive Monitoring</h3>
  <p>We don't wait for problems to occur. Our team continuously monitors your website for issues and potential threats, allowing us to address them before they impact your business. Using advanced monitoring tools, we track your website's uptime, performance metrics, and security status around the clock. This proactive stance significantly reduces the risk of downtime or security breaches that could harm your business's reputation or revenue.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Regular Reporting</h3>
  <p>Transparency is key to our process. We provide detailed reports on the maintenance activities performed, issues resolved, and improvements made.  We explain our findings in clear, non-technical language so you can easily understand the value our maintenance services provide. Regular reporting helps you track the progress of your website's performance over time and make informed decisions about future investments in your online presence.</p>`,
  },
];
const WebTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              Our <span>Webflow Maintenance Process</span>
            </h2>
            <p className="text-center mt-2">
              We&apos;ve developed a streamlined process to ensure your Webflow
              website receives the care it needs to perform at its best. Our
              comprehensive approach guarantees that no aspect of your website
              maintenance is overlooked, providing you with peace of mind and
              optimal performance.
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

export default WebTabs;
