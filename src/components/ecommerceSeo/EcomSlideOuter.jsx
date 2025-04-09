import React from "react";
import EcommerceSlides from "./EcommerceSlides";

const EcomSlideOuter = () => {
  return (
    <>
      <section className="ecommerce-slides-working py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center  ">
              <span className="dot">Achieve maximum visibility and growth</span>
              <h2 className="text-center mb-5">
                Our <span>eCommerce SEO Process</span>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 ">
              <EcommerceSlides />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcomSlideOuter;
