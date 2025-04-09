import React from "react";
import eyes1 from "../../../public/images/ecommerceimage/ecom-benefit-1.webp";
import eyes2 from "../../../public/images/ecommerceimage/ecom-benefit-2.webp";
import eyes3 from "../../../public/images/ecommerceimage/ecom-benefit-3.webp";
import eyes4 from "../../../public/images/ecommerceimage/ecom-benefit-4.webp";
import eyes5 from "../../../public/images/ecommerceimage/ecom-benefit-5.webp";
import eyes6 from "../../../public/images/ecommerceimage/ecom-benefit-6.webp";
import Image from "next/image";

const ecommerceBenefits = [
  {
    img: eyes1,
    alt: "Increased Visibility Icon",
    title: "Increased Visibility",
    description:
      "Rank higher in search engine results and attract more potential customers.",
  },
  {
    img: eyes2,
    alt: "Targeted Traffic Icon",
    title: "Targeted Traffic",
    description:
      "Bring the right audience to your store, increasing the likelihood of sales.",
  },
  {
    img: eyes3,
    alt: "User Experience Icon",
    title: "Better User Experience",
    description:
      "Improve site navigation, speed, and mobile-friendliness for a seamless shopping experience.",
  },
  {
    img: eyes4,
    alt: "Conversion Rates Icon",
    title: "Higher Conversion Rates",
    description:
      "Turn visitors into paying customers with optimized product pages.",
  },
  {
    img: eyes5,
    alt: "Cost-Effective Marketing Icon",
    title: "Cost-Effective Marketing",
    description:
      "Achieve long-term results without spending excessively on ads.",
  },
  {
    img: eyes6,
    alt: "Competitive Edge Icon",
    title: "Competitive Edge",
    description:
      "Stay ahead of competitors by consistently ranking higher in search results.",
  },
];

const EcommerceBenifits = () => {
  return (
    <div className="Ecommercebenifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Benefits of <span>eCommerce SEO</span>
            </h2>
            <p>Here’s why eCommerce SEO is a game-changer-</p>
          </div>
          {ecommerceBenefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-12">
              <div className="ecommerce-benifit text-center">
                <div className="ecommerce-small-icon">
                  <Image src={benefit.img} alt={benefit.alt} />
                </div>
                <h5>{benefit.title}</h5>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceBenifits;
