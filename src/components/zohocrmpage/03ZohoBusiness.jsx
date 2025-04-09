import React from "react";
import Image from "next/image";
import zohocrm from "../../../public/images/zohocrmimages/zoho-services.png";
const ZohoBusiness = () => {
  return (
    <div className="zohocrm-section py-5">
      <div className="container">
        <div className="row">
          <div className=" col-lg-7 col-12 heading-main mb-4 mb-lg-0">
            <div className="roi-left">
              <h2 className="mb-2">
                Empower Your Business with <span> Zoho CRM Plus </span>
              </h2>
              <p>
                WebGuruz Technologies specializes in Zoho CRM Plus
                implementation and consulting to help businesses harness the
                full power of CRM automation. Our services are designed to:
              </p>
              <ul className="roi-list">
                <li>
                  <h3>Increase Productivity</h3>
                  <p>
                    Automate workflows, reduce manual tasks, and focus on
                    growth.
                  </p>
                </li>
                <li>
                  <h3>Enhance Customer Relationships</h3>
                  <p>
                    Centralize customer data for better engagement and
                    retention.
                  </p>
                </li>
                <li>
                  <h3>Boost Sales Performance</h3>
                  <p>Streamline the sales cycle and close deals faster.</p>
                </li>
                <li>
                  <h3>improve Collaboration</h3>
                  <p>
                    Enable seamless teamwork with integrated communication
                    tools.
                  </p>
                </li>
                <li>
                  <h3>Provide Actionable Insights</h3>
                  <p>Utilize AI-driven analytics for data-backed decisions.</p>
                </li>
                <li>
                  <h3>Ensure Scalability</h3>
                  <p>
                    Grow your business with a CRM that adapts to your needs.
                  </p>
                </li>
                <li>
                  <h3>Enhance Marketing Efforts</h3>
                  <p>Implement targeted campaigns with real-time tracking.</p>
                </li>
                <li>
                  <h3>Optimize Support & Service</h3>
                  <p>
                    Improve customer satisfaction with efficient ticket
                    management.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="revopps-img">
              <Image src={zohocrm} alt="zohocrm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZohoBusiness;
