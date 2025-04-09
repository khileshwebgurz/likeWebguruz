"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { migrationprocess } from "@/utils/03utilHomeTab"; 

const MigrateProcess = () => {
  return (
    <section className="seo-organic-process-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h2 className="organic-process-title migration-title">
            Our Proven <span>Migration Process</span>
            </h2>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="migrate-tabbing pb-5"
            >
              {migrationprocess.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div
                    className="organic-content-seo-process migrate-content"
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

export default MigrateProcess;
