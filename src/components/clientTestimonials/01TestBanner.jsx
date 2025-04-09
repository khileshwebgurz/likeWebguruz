import Image from "next/image";
import React from "react";
import banner from "../../../public/images/testimonialImages/markitingbanner.webp";
const TestBanner = () => {
  return (
    <section className="testimonial-banner py-5 d-flex align-items-center inner-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 video-banner">
            <Image src={banner} alt="Image" />
          </div>
          <div className="col col-sm-8 col-xs-12 banner-content text-center w-full heading-main">
            <h1>
              <span>Satisfied </span> Clients
            </h1>
            <p className="banner-p color-wt">
            With Webguruz, your Conceived plan will get achieved and succeed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestBanner;
