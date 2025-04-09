"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
const pardotdata = [
  {
    eventKey: "experts",
    title: "Phase 1",
    alt: "HubSpot CRM Setup & Configuration",
    content: `
      <h3>Advanced Analytics</h3>
<p>We transform marketing data into actionable insights through comprehensive performance analysis. Our advanced analytics uncover hidden patterns and provide deep understanding of your marketing funnel and customer behavior.</p>`,
    image: "/images/pardotimg/pardot-analysis-1.svg",
  },
  {
    eventKey: "Records",
    title: "Phase 2",
    alt: "Marketing Hub Onboarding",
    content: `
      <h3>Custom Workflow Design</h3>
<p>We create intelligent, automated marketing processes tailored to your unique business requirements. Our custom workflows streamline lead nurturing and reduce manual intervention across multiple marketing touchpoints.</p>`,
    image: "/images/pardotimg/pardot-analysis-2.svg",
  },
  {
    eventKey: "Reviews",
    title: "Phase 3",
    alt: "Sales Hub Onboarding",
    content: `
      <h3>Lead Scoring Implementation</h3>
<p>We develop sophisticated lead-scoring models that precisely qualify and prioritize prospects based on their engagement and potential value. Our intelligent scoring system helps your sales team focus on the most promising leads.</p>`,
    image: "/images/pardotimg/pardot-analysis-3.jpg",
  },
  {
    eventKey: "Technology",
    title: "Phase 4",
    alt: "CRM Integration",
    content: `
      <h3>CRM Integration</h3>
<p>We ensure seamless, real-time data synchronization between Pardot and your existing customer relationship management systems. Our integration creates intelligent data bridges that eliminate silos and provide unified customer views.</p>`,
    image: "/images/pardotimg/pardot-analysis-4.svg",
  },
  {
    eventKey: "webgurz",
    title: "Phase 5",
    alt: "Custom Integrations",
    content: `
      <h3>Personalization Strategies</h3>
<p>We craft data-driven personalization strategies that transform generic marketing communications into targeted, individual experiences. By leveraging advanced segmentation and dynamic content, we create highly resonant marketing communications.</p>`,
    image: "/images/pardotimg/pardot-analysis-5.jpg",
  },
  {
    eventKey: "pardot",
    title: "Phase 6",
    alt: "Custom Integrations",
    content: `
      <h3>Continuous Optimization</h3>
<p>We provide ongoing, proactive enhancement of your marketing automation performance through regular analysis and strategic recommendations. Our continuous optimization ensures your marketing technology remains at the cutting edge of performance and efficiency.</p>`,
    image: "/images/pardotimg/pardot-analysis-6.svg",
  },
];
const PardotTabs = () => {
  return (
    <section className="seo-organic-process-service hub-onboarding-phases pardot-tabs">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h2 className="organic-process-title">
              <span>Our Pardot </span> Consulting Expertise
            </h2>
            <p>End-to-End Solutions Tailored to Your Needs.</p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="pb-5"
            >
              {pardotdata.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div className="row organic-content-seo-process">
                    <div className="col-md-6">
                      <div
                        className="content-section"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="image-section">
                        <Image
                          src={tab.image}
                          alt={tab.alt}
                          width={600}
                          height={600}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PardotTabs;
