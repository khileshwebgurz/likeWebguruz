import React from "react";
import Rightarrow from "../../../public/images/whiteseoimg/right.svg";
import seowork from "../../../public/images/zohoservicesimg/crm-implement.jpg";
import Image from "next/image";

const ZohoServeChoose = () => {
  const benefits = [
    "Certified Zoho expertise with 50+ successful implementations.",
    "Deep understanding of the Indian business environment and compliance requirements.",
    "Flexible engagement models tailored to your budget and timeline.",
    "Dedicated support team ensuring ongoing system optimization.",
  ];

  return (
    <div className="webguruzprocesswork-sec zoho-implement-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 heading-main text-left mb-4 mb-md-5">
            <h2>
            Why Choose WebGuruz for  <span>Zoho CRM Implementation? </span>
            </h2>
            <p className="mt-3">Our unmatched combination of technical expertise, industry knowledge, implementation experience, and commitment to client success makes WebGuruz the preferred Zoho implementation partner for businesses across India.</p>
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

export default ZohoServeChoose;
