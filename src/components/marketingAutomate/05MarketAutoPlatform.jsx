import React from "react";
import Image from "next/image";
import platform1 from "../../../public/images/whyautomationimg/auto-icon-1.svg";
import platform2 from "../../../public/images/whyautomationimg/auto-icon-2.svg";
import platform3 from "../../../public/images/whyautomationimg/auto-icon-3.svg";
import platform4 from "../../../public/images/whyautomationimg/auto-icon-4.svg";
import platform5 from "../../../public/images/whyautomationimg/auto-icon-5.svg";
import platform6 from "../../../public/images/whyautomationimg/auto-icon-6.svg";
import platform7 from "../../../public/images/whyautomationimg/auto-icon-7.svg";
const MarketAutoPlatform = () => {
  return (
    <div className="automation-platform squarespace-services  py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              <span>Marketing Automation Platforms </span> We Work With
            </h2>
          </div>
        </div>
        <div className="row automation-platform-row justify-content-center">
          <div className="col-lg-3 col-md-6 col-12 mb-4 ">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform1} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>HubSpot</h4>
                <p>
                  Comprehensive all-in-one marketing platform with powerful
                  workflow automation and detailed analytics for seamless
                  marketing-to-sales alignment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 ">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform2} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>Mailchimp</h4>
                <p>
                  Accessible marketing platform with growing automation
                  capabilities ideal for small to medium businesses entering the
                  automation space.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 ">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform3} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>Marketo</h4>
                <p>
                  Enterprise-grade automation solution with advanced lead
                  management capabilities and sophisticated scoring models for
                  B2B companies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 ">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform4} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>Oracle Eloqua</h4>
                <p>
                  Robust enterprise marketing automation platform with advanced
                  segmentation and campaign orchestration for complex B2B
                  scenarios.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-4 mb-lg-0 ">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform5} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>Salesforce Pardot</h4>
                <p>
                  B2B marketing automation platform that integrates perfectly
                  with Salesforce CRM for unified sales and marketing processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform6} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>Zoho Marketing Automation</h4>
                <p>
                  Cost-effective solution with strong multichannel capabilities
                  and deep integration with Zoho&apos;s business software suite.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={platform7} alt="squarespace" />
              </div>
              <div className="squarspace-card-title">
                <h4>ActiveCampaign</h4>
                <p>
                  User-friendly platform that combines email marketing,
                  automation, and CRM features for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAutoPlatform;
