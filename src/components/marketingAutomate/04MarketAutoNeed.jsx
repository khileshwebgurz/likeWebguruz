import React from "react";
import Image from "next/image";
import need from "../../../public/images/whyautomationimg/automate-value.jpg";
const MarketAutoNeed = () => {
  return (
    <div className="automation-need-section py-5">
      <div className="container">
        <div className="row">
          <div className=" col-md-6 col-12 heading-main mb-4 mb-md-0">
            <div className="automation-why-left">
              <h2 className="mb-2">
                <span> Why Marketing Automation </span> Matters Now More Than
                Ever?
              </h2>
              <p>
                The digital marketing landscape has grown increasingly complex.
                Without automation, your team wastes precious time on repetitive
                tasks while missing opportunities to connect with prospects at
                critical moments. Marketing automation allows you to scale your
                efforts efficiently, delivering personalized experiences to
                thousands of prospects simultaneously.
              </p>
              <p>
                Marketing automation isn&apos;t just about efficiency- it&apos;s about
                effectiveness. By tracking customer interactions across multiple
                touchpoints, automation platforms provide invaluable insights
                into buyer behavior. These insights enable you to refine your
                messaging, optimize your campaigns, and allocate resources to
                the channels and tactics that deliver the best results.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="revopps-img">
              <Image src={need} alt="needautomation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAutoNeed;
