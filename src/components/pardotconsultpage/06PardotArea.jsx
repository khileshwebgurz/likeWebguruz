import React from "react";
import Image from "next/image";
import pardot1 from "../../../public/images/pardotimg/cloud-en-1.png";
import pardot2 from "../../../public/images/pardotimg/cloud-en-2.png";
import pardot3 from "../../../public/images/pardotimg/cloud-en-3.png";
import pardot4 from "../../../public/images/pardotimg/cloud-en-4.png";
const PardotArea = () => {
  return (
    <div className="Pardotarea py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span> Salesforce-Enabled</span> Solutions
            </h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="pardot-card">
              <div className="pardot-img text-center">
                <Image src={pardot1} alt="pardot-area" />
              </div>
              <h5 className="text-center">Marketing Cloud Integration</h5>
              <p>
                Comprehensive marketing solution connecting multiple
                communication channels.
              </p>
              <ul>
                <li>Unified customer data management</li>
                <li>Cross-channel campaign orchestration</li>
                <li>Advanced segmentation capabilities</li>
                <li>Personalized customer journey mapping</li>
                <li>Comprehensive performance reporting</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="pardot-card">
              <div className="pardot-img text-center">
                <Image src={pardot2} alt="pardot-area" />
              </div>
              <h5 className="text-center">Sales Cloud Enhancement</h5>
              <p>
                Streamline sales processes and improve customer relationship
                management.
              </p>
              <ul>
                <li>Lead qualification automation</li>
                <li>Sales pipeline visualization</li>
                <li>Performance tracking tools</li>
                <li>Customer interaction management</li>
                <li>Predictive sales analytics</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="pardot-card">
              <div className="pardot-img text-center">
                <Image src={pardot3} alt="pardot-area" />
              </div>
              <h5 className="text-center">Service Cloud Optimization</h5>
              <p>Elevate customer support and service delivery.</p>
              <ul>
                <li>Intelligent case routing</li>
                <li>Self-service portal development</li>
                <li>Customer interaction tracking</li>
                <li>Support performance analytics</li>
                <li>Knowledge base management</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-0  mb-lg-0 mb-md-4">
            <div className="pardot-card">
              <div className="pardot-img text-center">
                <Image src={pardot4} alt="pardot-area" />
              </div>
              <h5 className="text-center">Commerce Cloud Integration</h5>
              <p>Create seamless, personalized digital commerce experiences.</p>
              <ul>
                <li>Unified customer profile management</li>
                <li>Personalized product recommendations</li>
                <li>Omnichannel shopping experiences</li>
                <li>Conversion rate optimization</li>
                <li>Customer loyalty program integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PardotArea;
