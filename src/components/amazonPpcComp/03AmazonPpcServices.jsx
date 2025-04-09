import React from "react";
import Image from "next/image";
import brand1 from "../../../public/images/amazeimages/amazon-camp-1.webp";
import brand2 from "../../../public/images/amazeimages/amazon-camp-2.webp";
import brand3 from "../../../public/images/amazeimages/amazon-camp-3.webp";

const services = [
  {
    id: 1,
    image: brand1,
    title: "Campaign Strategy & Setup",
    alt:"Campaign Strategy Icon",
    features: [
      "Comprehensive keyword research for optimal targeting.",
      "Strategic ad placement to maximize visibility.",
      "Budget allocation for cost-effective campaigns.",
      "Competitor analysis to stay ahead.",
    ],
  },
  {
    id: 2,
    image: brand2,
    title: "Performance Monitoring & Optimization",
    alt:"Performance Monitoring Icon",
    features: [
      "Real-time campaign performance tracking.",
      "Bid adjustments for maximum ROI.",
      "Negative keyword management to minimize waste.",
      "Regular performance reporting with actionable insights.",
    ],
  },
  {
    id: 3,
    image: brand3,
    title: "A/B Testing & Reporting",
    alt:"A/B Testing & Reporting Icon",
    features: [
      "Ad copy and visual testing for effectiveness.",
      "Conversion rate optimization techniques.",
      "Detailed analysis of customer behavior trends.",
      "Transparent reporting to measure success.",
    ],
  },
];

const AmazonPpcServices = () => {
  return (
    <div className="Amazonoffer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> Amazon PPC Management Services</span>
            </h2>
            <p>
              As a leading Amazon PPC Management agency, we specialize in
              tailoring advertising strategies that meet your unique business
              needs.
            </p>
          </div>
          {services.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 col-12 mb-4"
            >
              <div className="amazon-card">
                <Image src={service.image} alt={service.alt} />
                <h4>{service.title}</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonPpcServices;
