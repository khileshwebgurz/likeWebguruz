import React from "react";
import Image from "next/image";
import benifit from "../../../public/images/zohocrmimages/zoho-beneift.svg";
const ZohoCrmBenifit = () => {
  return (
    <div className="zohobenifit-section py-5">
      <div className="container">
        <div className="row">
          <div className=" heading-main col-12 text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Benefits of Zoho CRM Plus <span>Implementation & Consulting</span>
            </h2>
          </div>
          </div>
          <div className="row zoho-row">
            <div className="col-md-6  col-12 mb-4 mb-md-0">
            <div className="benfit-list">
              <ul>
                <li>Centralized customer data for improved tracking.</li>
                <li>AI-driven insights for data-based decision-making.</li>
                <li>Seamless automation for time and cost savings.</li>
                <li>Enhanced team collaboration with integrated tools.</li>
                <li>Better lead management and sales conversion rates.</li>
                <li>Custom dashboards and reports for real-time insights.</li>
                <li>Scalable solutions to grow your business.</li>
                <li>
                  Omnichannel communication for seamless customer interactions.
                </li>
                <li>
                  Easy third-party integrations for extended functionality.
                </li>
                <li>Improved marketing automation and lead nurturing.</li>
                <li>Reliable customer support to maximize CRM benefits.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="process-img">
              <Image src={benifit} alt="process" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoCrmBenifit;
