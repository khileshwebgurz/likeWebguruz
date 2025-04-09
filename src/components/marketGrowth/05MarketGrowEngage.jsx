import React from "react";
import Image from "next/image";
import platform1 from "../../../public/images/whyautomationimg/auto-icon-1.svg";
import platform2 from "../../../public/images/whyautomationimg/auto-icon-2.svg";
import platform3 from "../../../public/images/whyautomationimg/auto-icon-3.svg";
import platform5 from "../../../public/images/whyautomationimg/auto-icon-5.svg";
import platform6 from "../../../public/images/whyautomationimg/auto-icon-6.svg";
import platform7 from "../../../public/images/whyautomationimg/auto-icon-7.svg";
const MarketGrowEngage = () => {
  return (
    <div className="marketing-cap py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>
                Marketing Automation Platforms <br />{" "}
              </span>{" "}
              We Work With
            </h2>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="maket-cap-box">
              <div className="marketing-icon">
                <Image src={platform1} alt="offericon" />
              </div>
              <h4>HubSpot</h4>
              <p>Complete inbound marketing platform with powerful CRM integration and comprehensive automation capabilities.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="maket-cap-box">
              <div className="marketing-icon">
                <Image src={platform3} alt="offericon" />
              </div>
              <h4>Marketo</h4>
              <p>Enterprise-level solution offering advanced segmentation and lead management for complex marketing needs.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="maket-cap-box">
              <div className="marketing-icon">
                <Image src={platform2} alt="offericon" />
              </div>
              <h4>Mailchimp</h4>
              <p>User-friendly email marketing automation with growing capabilities for small and medium businesses.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="maket-cap-box">
              <div className="marketing-icon">
                <Image src={platform7} alt="offericon" />
              </div>
              <h4>ActiveCampaign</h4>
              <p>Affordable automation solution with robust CRM features and excellent email marketing capabilities.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="maket-cap-box">
              <div className="marketing-icon">
                <Image src={platform5} alt="offericon" />
              </div>
              <h4>Salesforce Marketing Cloud</h4>
              <p>Enterprise solution offering omnichannel marketing automation with deep integration to Salesforce CRM.</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="maket-cap-box">
              <div className="marketing-icon">
                <Image src={platform6} alt="offericon" />
              </div>
              <h4>Zoho Campaigns</h4>
              <p>Cost-effective automation tool with strong integration capabilities across the Zoho ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketGrowEngage;
