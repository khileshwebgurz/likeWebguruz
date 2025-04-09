import React from "react";
import DevShopifyInnerSlides from "./10DevShopifyInnerSlides";

const DevShopifyOuterSlides = () => {
  return (
    <>
      <section className="shopify-dev-company py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-12 heading-main text-left mb-0 mb-lg-4">
              <div className="shopify-company-left">
                <h2>
                  Expanding Horizons with WebGuruz: A Trusted Shopify{" "}
                  <span> Development Company in India</span>
                </h2>
                <p>
                  Comprehensive Shopify Solutions for Seamless E-Commerce
                  Success.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <DevShopifyInnerSlides />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevShopifyOuterSlides;
