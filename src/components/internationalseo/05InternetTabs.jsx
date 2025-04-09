"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import { Nav } from "react-bootstrap";
import { internationalTabbs } from "@/utils/03utilHomeTab";

const InternetTabs = () => {
  return (
    <section className="international-tabs py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-12 mx-auto mb-4 text-center heading-main">
            <h2 className="intern-tab-heading">
              Our <span>International SEO Process</span>
            </h2>
            <p>
              We follow a streamlined and effective process to ensure your
              website reaches its full potential in international markets. From
              technical SEO to content optimization, our method ensures every
              aspect of your site is perfectly tuned for global performance.
            </p>
          </div>
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="experts" id="uncontrolled-example">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 tab-sidebar internet-tab-column">
                  <Nav variant="pills" className=" flex-column">
                    {internationalTabbs.map((tab) => (
                      <Nav.Item key={tab.eventKey}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                {/* Right column for content */}
                <div className="col-lg-9 col-md-8 package-phases new-international-phase">
                  <Tab.Content>
                    {internationalTabbs.map((tab) => (
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

export default InternetTabs;
