import React from "react";
import WhmcInnerSlides from "./07WhmcInnerSlides";

const WhmcMainSlider = () => {
  return (
    <>
      <section className="whmcs-cycle py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-3">
              <h2>
                Our <span>WHMCS Development Process</span>
              </h2>
              <span className="d-inline-block mb-3">
                We follow a proven, structured approach to deliver high-quality
                WHMCS development solutions for your business.
              </span>
            </div>
            <div className="col-12">
              <WhmcInnerSlides />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhmcMainSlider;
