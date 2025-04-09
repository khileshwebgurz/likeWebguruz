import React from "react";
import Image from "next/image";
import work from "../../../public/images/whyautomationimg/automate-business.jpg";
const MarketAutoWork = () => {
  return (
    <div className="automation-need-section automation-work  py-5">
      <div className="container">
        <div className="row">
          <div className=" col-md-6 col-12 heading-main mb-4 mb-md-0">
            <div className="automation-why-left">
              <h2 className="mb-2">
                How Does Marketing Automation{" "}
                <span> Work for Your Business?</span>
              </h2>
              <p>
                Marketing automation works by creating systematic, repeatable
                processes that engage with prospects based on their behaviors
                and needs. When a potential customer interacts with your
                website, social media, or email campaigns, our automation
                systems capture this data and respond accordingly. This might
                mean sending a helpful resource, alerting your sales team, or
                moving the prospect to the next stage of your nurturing
                sequence—all without manual intervention
              </p>
              <p>
                Beyond simple responses, advanced marketing automation creates
                holistic customer experiences. The platforms we implement track
                interactions across multiple touchpoints, building comprehensive
                profiles of your prospects over time. This allows for
                increasingly personalized communication that addresses specific
                pain points and offers solutions at exactly the right moment in
                the buyer&apos;s journey, significantly increasing conversion
                rates and customer satisfaction.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="revopps-img">
              <Image src={work} alt="needautomation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAutoWork;
