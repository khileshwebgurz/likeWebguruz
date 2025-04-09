"use client";
import Image from "next/image";
import consult from "../../../public/images/mondayconsimages/consult-process.svg";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const organicseoprocess = [
  {
    eventKey: "experts",
    title: "Step 1",
    alt: "Step 1",
    content: `
      <h3>Discovery & Analysis</h3>
<p>We start by understanding your current workflows, pain points, and goals. Our consultants analyze your existing processes and identify opportunities for improvement through Monday.com.</p>`,
  },
  {
    eventKey: "Records",
    title: "Step 2",
    alt: "Step 2",
    content: `
      <h3>Solution Design</h3>
<p>Based on our findings, we design a custom Monday.com implementation plan tailored to your specific business needs, including board structures, automation, integrations, and dashboards.</p>`,
  },
  {
    eventKey: "Reviews",
    title: "Step 3",
    alt: "Step 3",
    content: `
      <h3>Implementation & Configuration</h3>
<p>Our team sets up your Monday.com workspace, configuring it according to the approved design. We build custom workflows, automation, and integrations to create a seamless work ecosystem.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Step 4",
    alt: "Step 4",
    content: `
      <h3>Training & Onboarding</h3>
<p>We provide comprehensive training for your team, ensuring everyone understands how to use Monday.com effectively in their daily work. This includes documentation, live sessions, and hands-on practice.</p>`,
  },
  {
    eventKey: "webgurz",
    title: "Step 5",
    alt: "Step 5",
    content: `
      <h3>Ongoing Support & Optimization</h3>
<p>Our relationship doesn't end at implementation. We provide ongoing support and regular check-ins to ensure your Monday.com workspace continues to meet your evolving business needs.</p>`,
  },
];
const MonConsultSteps = () => {
  return (
    <section className="monday-consulting-process py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              How Does Our <span>Consulting Process Work?</span>
            </h2>
          </div>
          <div className="col-md-8 col-12 mb-4 mb-md-0">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="monday-tabbing pb-5"
            >
              {organicseoprocess.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div
                    className="monday-tabbing-content"
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />
                </Tab>
              ))}
            </Tabs>
          </div>
          <div className="col-md-4 col-12">
            <div className="consult-process-img">
              <Image src={consult} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonConsultSteps;
