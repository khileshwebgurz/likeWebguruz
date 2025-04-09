import React from "react";
import MotionGraphSlider from "./MotionGraphSlider";

const ContInfoDelivery = () => {
  return (
    <>
      <div className="infographic-motion-delivery py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 heading-main text-center text-md-start mb-4 mb-lg-0">
              <h2>
              Our Infographics &  <span> Motion Graphics Services </span>
              </h2>
              <p>
              Comprehensive Visual Solutions Tailored to Your Needs
              </p>
            </div>
            <div className="col-lg-9 col-12 graphic-slider">
              <MotionGraphSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContInfoDelivery;
