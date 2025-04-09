import React from "react";
import banner from "../../../public/images/fullcycleimage/cycle-banner.webp";
import Image from "next/image";
const CycleBanner = () => {
  return (
    <>
      <section className="full-cycle-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <div className="full-cycle-banner-left mb-4 mb-md-0">
                <div className="cycle-banner-heading">
                  <h1 className="mb-3">
                    Shape Your Product With <span> Our Project Managers</span>
                  </h1>
                </div>
                <div className="cycle-banner-para">
                  <p>
                    Our expert project managers ensure seamless coordination and
                    execution throughout the product development journey. From
                    ideation to launch, we focus on innovation, efficiency, and
                    cutting-edge technology to shape a product that stands out
                    in the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Image
                src={banner}
                alt="Full Cycle Product Development Services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CycleBanner;
