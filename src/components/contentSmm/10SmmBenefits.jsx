import React from "react";
import Image from "next/image";

import features1 from "../../../public/images/Socialmediaimg/smm-statistic-1.png";
import features2 from "../../../public/images/Socialmediaimg/smm-statistic-2.png";
import features3 from "../../../public/images/Socialmediaimg/smm-statistic-3.png";
import features4 from "../../../public/images/Socialmediaimg/smm-statistic-4.png";
import features5 from "../../../public/images/Socialmediaimg/smm-statistic-5.png";
import features6 from "../../../public/images/Socialmediaimg/smm-statistic-6.png";

const features = [
  {
    img: features1,
    title: "Amplify Brand Visibility",
    alt: "Drag-and-Drop Editor Icon",
  },
  {
    img: features2,
    title: "Cost-Effective Marketing",
    alt: "SEO Recommendations Icon",
  },
  {
    img: features3,
    title: "Competitive Advantage",
    alt: "Mobile Optimization Icon",
  },
  {
    img: features4,
    title: "Direct Customer Engagement",
    alt: "Content Personalization Icon",
  },
  {
    img: features5,
    title: "Real-Time Market Insights",
    alt: "Robust Security Icon",
  },
  {
    img: features6,
    title: "Scalable Growth",
    alt: "Multi-Language Support Icon",
  },
];

const SmmBenefits = () => {
  return (
    <div className="social-media-benefits py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Why Choose Social Media{" "}
              <span>Management for Your Business? </span>
            </h2>
            <p className="mb-4 mb-md-5">
              In the digital age, social media management has become a critical
              strategy for businesses looking to thrive and grow. Here are six
              compelling reasons why investing in social media management is
              crucial for your business:
            </p>
          </div>
        </div>
        <div className="row feature">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 col-sm-6 text-center">
              <div className="motion-search-card">
                <div className="card-img">
                  <Image src={feature.img} alt={feature.alt} />
                </div>
                <div className="feature-text">
                  <h6>{feature.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmmBenefits;
