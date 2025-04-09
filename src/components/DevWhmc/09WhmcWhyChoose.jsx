import React from "react";
import Image from "next/image";
import Certi from "../../../public/images/whmcsimages/whmc-why-1.webp";
import Data from "../../../public/images/whmcsimages/whmc-why-2.webp";
import Custo from "../../../public/images/whmcsimages/whmc-why-3.webp";
import Trans from "../../../public/images/whmcsimages/whmc-why-4.webp";

const seoFeatures = [
  {
    id: 1,
    img: Certi,
    alt: "Certified Expertise Icon",
    title: "Certified Expertise",
    description:
      "Our team consists of certified WHMCS developers, ensuring you receive the best solutions. With years of specialized experience, we guarantee that your project will be handled by professionals who know how to deliver optimal results tailored to your business.",
    className: "yellow",
  },
  {
    id: 2,
    img: Data,
    alt: "Proven Track Record Icon",
    title: "Proven Track Record",
    description:
      "With over a decade of experience, we have successfully delivered hundreds of WHMCS projects worldwide. Our reputation for excellence speaks for itself, and we have built lasting relationships with clients by consistently exceeding expectations.",
    className: "two-choose",
  },
  {
    id: 3,
    img: Custo,
    alt: "Tailored Solutions Icon",
    title: "Tailored Solutions",
    description:
      "We specialize in custom-built solutions that perfectly match your business needs. By understanding the intricacies of your operations, we craft a solution that is both flexible and scalable, allowing your business to evolve with changing demands.",
    className: "",
  },
  {
    id: 4,
    img: Trans,
    alt: "24/7 Support Icon",
    title: "24/7 Support",
    description:
      "We offer round-the-clock support to resolve any issues and ensure your system runs smoothly. Whether it's a simple inquiry or urgent troubleshooting, our dedicated support team is always available to keep your system operating flawlessly.",
    className: "yellow reporting",
  },
];

const WhmcWhyChoose = () => {
  return (
    <div className="why_hire-section whmcs-webguruz pt-5 pb-0 pb-md-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 heading-main text-left mb-4 mb-lg-0">
            <h2 className="mb-3">
              Why Choose <span>WebGuruz ?</span>
            </h2>
            <p>
              At WebGuruz, we pride ourselves on providing exceptional WHMCS
              development services that help businesses succeed. Our commitment
              to quality, personalized attention, and technical expertise make
              us the ideal partner for your business.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-left">
            <div className="row why-chose-img flex-direction-row">
              {seoFeatures.map((feature) => (
                <div key={feature.id} className="col-sm-6 col-12">
                  <div className={`top-img ${feature.className}`}>
                    <Image src={feature.img} alt={feature.alt} />
                    <div className="why-choose-content">
                      <h5 className="mb-3">{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhmcWhyChoose;
