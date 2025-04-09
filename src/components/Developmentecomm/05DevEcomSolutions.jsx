"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ecomdevservices } from "@/utils/03utilHomeTab";
import Image from "next/image";

const DevEcomSolutions = () => {
  return (
    <section className="seo-organic-process-service hub-onboarding-phases ecom-development-solutions">
      <div className="container">
        <div className="row">
          <div className=" col-lg-9 mx-auto col-md-12 mb-4 text-center heading-main">
            <h2>
              <span>eCommerce Solutions </span> We Can Help Develop
            </h2>
            <p>
              We offer a wide range of eCommerce solutions to enhance the
              functionality and performance of your business.
            </p>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-example"
              className="ecom-dev-tabber pb-5"
            >
              {ecomdevservices.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div className="row organic-content-seo-process ecommerce-dev-process">
                    <div className="col-md-6">
                      <div
                        className="ecommerce-contents content-section"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="image-section">
                        <Image
                          src={tab.image}
                          alt={tab.alt}
                          width={1500}
                          height={1500}
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

export default DevEcomSolutions;
