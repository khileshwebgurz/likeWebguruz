import React from "react";
import Image from "next/image";
import email from "../../../public/images/marketingautomationimg/auto-necess.jpg";
const MarketGrowBrand = () => {
  return (
    <div className="marketing-brand py-5">
      <div className="container">
        <div className="row">
          <div className=" col-lg-7 col-12 heading-main mb-4 mb-lg-0">
            <div className="marketing-brand-left">
              <h2 className="mb-2">
                Why Marketing Automation Is <br />{" "}
                <span> No Longer Optional?</span>
              </h2>
              <p>
                In today&apos;s competitive business landscape, marketing automation
                has transformed from a luxury to a necessity. By implementing
                smart automation tools, your business can reach more customers,
                deliver more personalized experiences, and achieve better
                results- all while reducing the workload on your marketing team.
              </p>
              <ul className="marketing-brand-list">
                <li>Save time by automating repetitive marketing tasks</li>
                <li>
                  Increase revenue through improved lead nurturing and
                  conversion
                </li>
                <li>
                  Enhance personalization with targeted content based on
                  customer behavior
                </li>
                <li>
                  Improve customer retention with timely, relevant
                  communications
                </li>
                <li>
                  Gain valuable insights from comprehensive marketing analytics
                </li>
                <li>
                  Scale marketing efforts without proportionally increasing
                  staff
                </li>
                <li>
                  Create consistent customer experiences across all touchpoints
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="marketing-brand-img">
              <Image src={email} alt="zohocrm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketGrowBrand;
