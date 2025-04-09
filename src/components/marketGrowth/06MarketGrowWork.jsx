import Image from "next/image";
import React from "react";
import offericon1 from "../../../public/images/marketingautomationimg/engage-1.png";
import offericon2 from "../../../public/images/marketingautomationimg/engage-2.png";
import offericon3 from "../../../public/images/marketingautomationimg/engage-3.png";

const MarketGrowWork = () => {
  return (
    <>
      <section className="marketing-growth-working py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="market-work-boxes">
                <div className="market-work-img">
                  <Image src={offericon1} alt="" />
                </div>
                <div className="makret-work-content">
                  <p>ENGAGE</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="market-work-boxes">
                <div className="market-work-img">
                  <Image src={offericon2} alt="" />
                </div>
                <div className="makret-work-content">
                  <p>CONVERT</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="market-work-boxes">
                <div className="market-work-img">
                  <Image src={offericon3} alt="" />
                </div>
                <div className="makret-work-content">
                  <p>GROW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketGrowWork;
