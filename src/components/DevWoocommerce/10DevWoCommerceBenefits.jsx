import React from "react";
import benifit from "../../../public/images/wocommercesimg/wocom-points.webp";
import Image from "next/image";

const DevWoCommerceBenefits = () => {
  const benefits = [
    {
      title: "Certified WooCommerce Experts",
      description:
        "Our team consists of certified WooCommerce developers with extensive experience in designing, developing, and optimizing WooCommerce stores, ensuring your project is in expert hands.",
    },
    {
      title: "Tailored Solutions for Your Business",
      description:
        "We take the time to understand your specific business needs and provide personalized WooCommerce development solutions that align with your goals and deliver measurable results.",
    },
    {
      title: "Proven Track Record",
      description:
        "With over 15 years of industry experience and hundreds of successful projects, WebGuruz has built a solid reputation for delivering high-quality, scalable, and secure eCommerce solutions.",
    },
    {
      title: "End-to-End WooCommerce Services",
      description:
        "From custom design and development to integration, optimization, and ongoing support, we offer a complete range of WooCommerce services, ensuring a seamless experience from start to finish.",
    },
    {
      title: "Focus on Long-Term Success",
      description:
        "We’re not just about launching your store- we’re dedicated to ensuring its continued growth and success. With our post-launch support and optimization services, we help your store adapt to market changes and achieve sustained growth.",
    },
  ];

  return (
    <div className="Woobenifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Why Choose <span>WebGuruz?</span>
            </h2>
            <p>
              At WebGuruz, we are committed to delivering top-tier WooCommerce
              development services, providing you with the expertise,
              innovation, and support needed to create a successful online
              store.
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <div className="woobenifit-content">
              {benefits.map((benefit, index) => (
                <div className="benifit-title-main" key={index}>
                  <div className="wo-title">
                    <h4>{benefit.title}</h4>
                  </div>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-4 mt-md-0">
            <div className="benfit-img">
              <Image src={benifit} alt="WooCommerce Development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevWoCommerceBenefits;
