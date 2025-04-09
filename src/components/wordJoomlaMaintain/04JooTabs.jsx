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
  <p>We begin by thoroughly examining your Joomla website to identify existing issues, security vulnerabilities, outdated extensions, and performance bottlenecks. This comprehensive audit includes code review, database analysis, server configuration assessment, and security scanning. This initial assessment forms the foundation of our maintenance strategy and helps us understand the unique characteristics of your website.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
        <h3>Customized Maintenance Plan</h3>
  <p>Based on our audit findings, we create a tailored maintenance plan that addresses your specific needs, priorities, and budget constraints. This plan outlines the frequency of updates, backup schedules, security protocols, performance optimization strategies, and monitoring procedures. We review this plan with you to ensure it aligns with your business goals and technical requirements.</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
        <h3>Regular Scheduled Maintenance</h3>
  <p>We perform routine updates, security checks, and performance optimizations according to your agreed schedule, keeping detailed logs of all actions taken. This includes Joomla core updates, extension updates, template updates, database optimization, and security patches. Before implementing updates, we create complete backups and test updates in a staging environment to ensure they don't negatively impact your website's functionality.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
        <h3>Ongoing Monitoring & Support</h3>
  <p>Our team continuously monitors your website for issues and provides prompt support when problems arise. We use advanced monitoring tools to track your website's availability, loading speed, error rates, and security status. When issues are detected, our team quickly investigates and resolves them. We also maintain open communication channels so you can report issues or request assistance whenever needed.</p>`,
  },
];
const JooTabs = () => {
  return (
    <section className="maintainance-tabbing py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center mb-5">
            <h2>
              How Does Our <span>Joomla Maintenance Process Work?</span>
            </h2>
            <p className="text-center mt-2">
              Our maintenance process follows a systematic approach that
              combines proactive monitoring, regular scheduled maintenance, and
              responsive support. This comprehensive strategy helps us identify
              potential issues before they impact your website&apos;s performance,
              implement updates in a controlled manner to prevent compatibility
              problems, and quickly resolve any unexpected issues that may
              arise.
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

export default JooTabs;
