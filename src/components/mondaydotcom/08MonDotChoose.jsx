import React from "react";
import Rightarrow from "../../../public/images/whiteseoimg/right.svg";
import seowork from "../../../public/images/mondaycomimages/mon-webguruz.jpg";
import Image from "next/image";

const MonDotChoose = () => {
  const benefits = [
    "Certified Monday.com experts with extensive implementation experience.",
    "Client-focused approach with solutions tailored to your specific needs.",
    "Proven methodology that ensures smooth adoption and maximum ROI.",
    "Ongoing support and optimization services for continued success.",
  ];

  return (
    <div className="webguruzprocesswork-sec monday-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 heading-main text-left mb-4 mb-md-5">
            <h2>
              Why Choose WebGuruz for <span>Monday.com Implementation? </span>
            </h2>
            <p className="mt-3">
              As India&apos;s leading Monday.com partner, we bring unparalleled
              expertise and a proven track record of successful implementations
              that drive real business transformation.
            </p>
            <div className="icon-text-main-work">
              <ul className="icon-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span>
                      <Image src={Rightarrow} alt="right" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="work-seo-img">
              <Image src={seowork} alt="White-Label SEO Strategies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonDotChoose;
