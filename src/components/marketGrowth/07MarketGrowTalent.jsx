import Image from "next/image";
import email from "../../../public/images/marketingautomationimg/work-web.svg";
import React from "react";
import offericon1 from "../../../public/images/marketingautomationimg/auto-exp-1.png";
import offericon2 from "../../../public/images/marketingautomationimg/auto-exp-2.png";
import offericon3 from "../../../public/images/marketingautomationimg/auto-exp-3.png";

const MarketGrowTalent = () => {
  return (
    <>
      <section className="market-grow-talent py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4 mb-md-5">
              <h2>
                Why Work <span>With WebGuruz?</span>
              </h2>
            </div>
            </div>
            <div className="row market-talent-row">
            <div className="col-md-6 col-12">
              <div className="grow-talent-left">
                <Image src={email} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-4 mb-md-0">
              <div className="talent-growth-content">
                <div className="talent-img">
                  <Image src={offericon1} alt="" />
                </div>
                <div className="talent-content">
                  <h4>Local Expertise</h4>
                  <p>
                    As an Indian company, we understand the unique challenges
                    and opportunities in the Indian market.
                  </p>
                </div>
              </div>
              <div className="talent-growth-content">
                <div className="talent-img">
                  <Image src={offericon2} alt="" />
                </div>
                <div className="talent-content">
                  <h4>Proven Results</h4>
                  <p>
                    Our clients typically see a 30-40% increase in marketing
                    efficiency within just three months.
                  </p>
                </div>
              </div>
              <div className="talent-growth-content">
                <div className="talent-img">
                  <Image src={offericon3} alt="" />
                </div>
                <div className="talent-content">
                  <h4>End-to-End Support</h4>
                  <p>
                    From strategy development to implementation and ongoing
                    optimization, we&apos;re with you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketGrowTalent;
