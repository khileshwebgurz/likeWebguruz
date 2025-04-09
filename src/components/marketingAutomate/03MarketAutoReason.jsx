import React from "react";
import Image from "next/image";
import auto from "../../../public/images/whyautomationimg/automate-growth.jpg";
const MarketAutoReason = () => {
  return (
    <div className="automation-why-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-md-6 col-12 heading-main mb-4 mb-md-0">
            <div className="automation-why-left">
              <h2 className="mb-2">
                Accelerate Growth with WebGuruz&apos;s Industry-Leading{" "}
                <span> Marketing Automation Solutions </span>
              </h2>
              <p>
                Our comprehensive B2B marketing automation services bridge the
                gap between your marketing vision and execution. We help you
                build seamless customer journeys that nurture relationships at
                every stage of the funnel. With WebGuruz as your technology
                partner, you&apos;ll deploy automation that works around the clock to
                engage prospects, qualify leads, and support your sales team
                with actionable intelligence.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="automation-img">
              <Image src={auto} alt="automation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAutoReason;
