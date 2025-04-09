import React from "react";
import Rightarrow from "../../../public/images/whiteseoimg/right.svg";
import seowork from "../../../public/images/whiteseoimg/white-label-beneift.webp";
import Image from "next/image";

const WhiteSeoWorking = () => {
  const benefits = [
    "Focus on your core business activities while we handle the SEO work.",
    "No need to hire a full-time in-house team or invest in costly SEO tools.",
    "Easily scale your SEO efforts as your business grows, without additional overhead.",
    "Benefit from a team of SEO experts who stay updated on the latest trends and best practices.",
    "Deliver high-quality SEO results that exceed your client’s expectations.",
  ];

  return (
    <div className="webguruzprocesswork-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="work-seo-img">
              <Image src={seowork} alt="White-Label SEO Strategies" />
            </div>
          </div>

          <div className="col-6 heading-main text-left mb-4 mb-md-5">
            <h2>
              Benefits of <span>White-Label SEO Strategies </span>
            </h2>
            <h5>Reasons to Choose White Label SEO for Your Business</h5>
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
        </div>
      </div>
    </div>
  );
};

export default WhiteSeoWorking;
