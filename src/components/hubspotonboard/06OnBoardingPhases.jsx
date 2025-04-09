"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { hubonboard } from "@/utils/03utilHomeTab";
import Image from "next/image";

const OnboardingPhases = () => {
  return (
    <section className="seo-organic-process-service hub-onboarding-phases">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h2 className="organic-process-title">
            Our HubSpot <span>Onboarding Services</span>
            </h2>
            <p>End-to-End Solutions Tailored to Your Needs.</p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="pb-5"
            >
              {hubonboard.map((tab) => (
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

export default OnboardingPhases;
