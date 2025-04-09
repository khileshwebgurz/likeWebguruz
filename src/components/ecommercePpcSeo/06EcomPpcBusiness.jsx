import React from "react";
import Image from "next/image";
import Target1 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-1.webp";
import Target2 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-2.webp";
import Target3 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-3.webp";
import Target4 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-4.webp";
import Target5 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-5.webp";
import Target6 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-6.webp";
import Target7 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-7.webp";
import Target8 from "../../../public/images/EcommercPPCimg/ecom-ppc-result-8.webp";

const benefits = [
  {
    image: Target1,
    title: "Instant Results",
    alt:"Instant Results Icon",
    description: "See traffic and sales grow almost immediately.",
  },
  {
    image: Target2,
    title: "Detailed Analytics",
    alt:"Detailed Analytics Icon",
    description: "Track performance to refine campaigns continuously.",
  },
  {
    image: Target3,
    title: "Cost-Effective Advertising",
    alt:"Advertising Icon",
    description: "Pay only for clicks, making it budget-friendly.",
  },
  {
    image: Target4,
    title: "Customizable Campaigns",
    alt:"Customizable Campaigns Icon",
    description: "Tailored strategies to meet your goals.",
  },
  {
    image: Target5,
    title: "Targeted Reach",
    alt:"Targeted Reach Icon",
    description: "Connect with the audience most likely to convert.",
  },
  {
    image: Target6,
    title: "Competitive Edge",
    alt:"Competitive Edge Icon",
    description: "Outperform competitors in your niche.",
  },
  {
    image: Target7,
    title: "Enhanced Brand Visibility",
    alt:"Brand Visibility Icon",
    description: "Build recognition with strategic ad placements.",
  },
  {
    image: Target8,
    title: "Increased Sales",
    alt:"Increased Sales Icon",
    description: "Drive more conversions and grow revenue.",
  },
];

const EcomPpcBusiness = () => {
  return (
    <div className="Marketing-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Key Benefits of
              <br /> <span> eCommerce PPC Management</span>
            </h2>
          </div>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-3 col-12 mb-4">
              <div className="marketing-icon-section">
                <div className="marketing-icon">
                  <Image src={benefit.image} alt={benefit.alt} />
                </div>
                <h6>{benefit.title}</h6>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcomPpcBusiness;
