import React from "react";
import ConsultInner from "./ConsultInner";

const SeoStratergySlides = () => {
  return (
    <div className="cnsulting-slides-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 heading-main mb-3 mb-md-0">
            <h2>
              <span>Our SEO Strategy</span> & Consulting Process
            </h2>
          </div>
          <div className="col-md-8 col-12">
            <p>
              We follow a transparent and proven process to deliver outstanding
              results. Below is a brief overview of the steps we follow while we
              prepare SEO strategies for you:
            </p>
          </div>
          <div className="col-12 mt-4 mt-md-5">
            <ConsultInner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoStratergySlides;
