"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { organicseoprocess } from "@/utils/03utilHomeTab"; 

const OrganicProcess = () => {
  return (
    <section className="seo-organic-process-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h2 className="organic-process-title">
              Our Organic <span>SEO Process</span>
            </h2>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="pb-5"
            >
              {organicseoprocess.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div
                    className="organic-content-seo-process"
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

export default OrganicProcess;
