import React from "react";
import check from "../../../public/images/ecommercemainteimg/pcheck.svg";
import Image from "next/image";

const SupportEcomAgency = () => {
  const services = [
    {
      title: "Proven Expertise",
      description: "A decade of experience in eCommerce support and maintenance.",
    },
    {
      title: "Tailored Solutions",
      description: "Custom plans to suit your business needs.",
    },
    {
      title: "24/7 Support",
      description: "Around-the-clock availability for prompt issue resolution.",
    },
    {
      title: "Certified Professionals",
      description:
        "Skilled teams specializing in leading platforms like Shopify, Magento, and WooCommerce.",
    },
    {
      title: "Global Reach",
      description: "Serving clients worldwide with unwavering commitment.",
    },
  ];

  return (
    <div className="maintenance-agency-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Choose <span>WebGuruz? </span>
            </h2>
          </div>
        </div>
        <div className="row maintenace-agency">
          {services.map((service, index) => (
            <div key={index} className="col-lg col-md-4 col-12 mb-4">
              <div className="services-box">
                <div className="bg-check">
                  <Image src={check} alt="ppc" />
                  <div className="circl-bg"></div>
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportEcomAgency;
