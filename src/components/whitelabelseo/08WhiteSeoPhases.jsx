"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { whiteseophase } from "@/utils/03utilHomeTab";

const WhiteSeoPhases = () => {
  return (
    <section className="seo-organic-process-service white-seo-phases">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h2 className="organic-process-title white-seo-title">
              How We Work as a <span>White-Label SEO Agency?</span>
            </h2>
            <p className="text-center mt-2">
              As a leading White-label SEO company, we pride ourselves on
              offering seamless white-label SEO services that allow you to
              deliver exceptional results to your clients. We work with
              businesses to create tailored SEO strategies, provide regular
              progress reports, and ensure complete transparency in all our
              processes. Here’s how we operate:
            </p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="white-label-tabs pb-5"
            >
              {whiteseophase.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div
                    className="organic-content-seo-process white-label-content"
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

export default WhiteSeoPhases;
