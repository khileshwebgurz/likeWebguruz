"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";

const newtabs = [
  {
    eventKey: "experts",
    title: "Understand Your Business",
    alt: "Understand Your Business",
    content: `<p>We begin by diving deep into your business objectives, target audience, and past performance. This helps us create a custom strategy that aligns with your goals and resonates with your audience.</p>`,
  },

  {
    eventKey: "Reviews",
    title: "Set Up Remarketing Tags",
    alt: "Set Up Remarketing Tags ",
    content: `<p>Our team implements advanced tracking codes across your site to collect essential user data. These tags are the foundation of creating highly targeted and effective remarketing campaigns.</p>`,
  },
  {
    eventKey: "Technical SEO",
    title: "Segment Audiences",
    alt: "Segment Audiences ",
    content: `<p>We analyze user data to create custom audience lists based on behavior, interests, and demographics. This segmentation ensures your ads are highly relevant and impactful.</p>`,
  },
  {
    eventKey: "Technology",
    title: "Craft Remarketing Ads",
    alt: "Craft Remarketing Ads",
    content: `<p>Using the insights gained, we design visually appealing and compelling ads that grab attention. Whether it’s banners, videos, or dynamic ads, each is crafted to convert.</p>`,
  },
  {
    eventKey: "webgurz",
    title: "Optimize Campaigns",
    alt: "Optimize Campaigns",
    content: `<p>Through continuous monitoring and testing, we refine your campaigns to ensure optimal performance. We adjust bids, targeting, and creatives to maximize ROI.</p>`,
  },
  {
    eventKey: "Analytics & Reporting",
    title: "Monitor and Report",
    alt: "Monitor and Report",
    content: `<p>We provide detailed and transparent reports that keep you informed about your campaign’s progress. This includes insights into key metrics, performance trends, and recommendations for improvement.</p>`,
  },
];

const RemarkingTabber = () => {
  return (
    <section className="remarking-seo-tabs py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-12 mx-auto mb-4 text-center heading-main">
            <h2 className="remark-tabs-heading">
              Our Google Ads <span> Remarketing Process</span>
            </h2>
          </div>
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="experts" id="uncontrolled-example">
              <div className="row">
                <div className="col-lg-3 col-md-4 tab-sidebar column-remark-page">
                  <Nav variant="pills" className=" flex-column">
                    {newtabs.map((tab) => (
                      <Nav.Item key={tab.eventKey}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                <div className="col-lg-9 col-md-8 package-phases new-remarking-phase">
                  <Tab.Content>
                    {newtabs.map((tab) => (
                      <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                        <div
                          className="packages-content"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemarkingTabber;
