import React from "react";
import Image from "next/image";
import hubspot1 from "../../../public/images/marketingautomationimg/auto-digit-1.png";
import hubspot2 from "../../../public/images/marketingautomationimg/auto-digit-2.png";
import hubspot3 from "../../../public/images/marketingautomationimg/auto-digit-3.png";
import hubspot4 from "../../../public/images/marketingautomationimg/auto-digit-4.png";
import hubspot5 from "../../../public/images/marketingautomationimg/auto-digit-5.png";
const MarketPerform = () => {
  return (
    <div className="marketing-service  py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Marketing Automation Solutions</span> We Offer
            </h2>
            <p>
              We provide end-to-end marketing automation services that cover
              every aspect of your digital marketing needs. Our expert team
              designs, implements, and optimizes automation solutions that align
              with your business objectives.
            </p>
          </div>
        </div>
        <div className="row marketing-row">
          <div className="col-lg-4 col-12 mb-4 mb-lg-0 box-1">
            <div className="marketing-box">
              <div className="marketing-img">
                <Image src={hubspot1} alt="hubspot" />
              </div>
              <h4>Email Marketing Automation </h4>
              <p>
                Create triggered email sequences that nurture leads through your
                sales funnel.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-4 mb-lg-0 two-box">
            <div className="marketing-box">
              <div className="marketing-img">
                <Image src={hubspot2} alt="hubspot" />
              </div>
              <h5>Social Media Automation</h5>
              <p>
                Schedule and publish content across platforms while maintaining
                a consistent brand voice.
              </p>
            </div>
            <div className="marketing-box">
              <div className="marketing-img">
                <Image src={hubspot3} alt="hubspot" />
              </div>
              <h5>Lead Scoring & Management</h5>
              <p>
                Identify and prioritize your most promising leads to focus sales
                efforts effectively.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 two-box">
            <div className="marketing-box">
              <div className="marketing-img">
                <Image src={hubspot4} alt="hubspot" />
              </div>
              <h5>Customer Journey Mapping</h5>
              <p>
                Design personalized experiences based on user behavior and
                preferences.
              </p>
            </div>
            <div className="marketing-box">
              <div className="marketing-img">
                <Image src={hubspot5} alt="hubspot" />
              </div>
              <h5>Analytics & Reporting</h5>
              <p>
                Track campaign performance with detailed metrics to continuously
                improve results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPerform;
