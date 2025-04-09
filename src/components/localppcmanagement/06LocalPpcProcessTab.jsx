"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { localppcTab } from "@/utils/03utilHomeTab";
import Image from "next/image";

const LocalPpcProcessTab = () => {
  return (
    <section className="seo-organic-process-service hub-onboarding-phases local-ppc-process">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h2 className="organic-process-title">
              Our Local <span>PPC Marketing Process</span>
            </h2>
            <p>
              We follow a structured, five-phase approach to ensure your
              campaigns are precisely tailored, effectively executed, and
              consistently optimized to deliver outstanding results.
            </p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="local-ppc-tabbing pb-5"
            >
              {localppcTab.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div className="row organic-content-seo-process local-process-tiles">
                    <div className="col-md-6">
                      <div
                        className="content-section local-ppc-content"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="image-section">
                        <Image
                          src={tab.image}
                          alt={tab.alt}
                          width={1200}
                          height={1200}
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

export default LocalPpcProcessTab;
