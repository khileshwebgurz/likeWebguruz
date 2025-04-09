import React from "react";
import agency1 from "../../../public/images/EcommercPPCimg/ecomppc-init-1.webp";
import agency2 from "../../../public/images/EcommercPPCimg/ecomppc-init-2.webp";
import agency3 from "../../../public/images/EcommercPPCimg/ecomppc-init-3.webp";
import agency4 from "../../../public/images/EcommercPPCimg/ecomppc-init-4.webp";
import agency5 from "../../../public/images/EcommercPPCimg/ecomppc-init-5.webp";
import agency6 from "../../../public/images/EcommercPPCimg/ecomppc-init-6.webp";
import Image from "next/image";

const cardData = [
  {
    image: agency1,
    title: "Initial Consultation",
    alt:"Initial Consultation Icon",
    description:
      "Our team takes the time to learn about your products, target audience, and overall marketing objectives. This ensures that our strategies align perfectly with your vision, setting the stage for a successful PPC campaign.",
  },
  {
    image: agency2,
    title: "Campaign Setup",
    alt:"Campaign Setup Icon",
    description:
      "Once the strategy is finalized, we move on to creating and launching your PPC campaigns. From selecting the right keywords to designing compelling ads, every detail is meticulously planned and executed to ensure maximum impact and efficiency.",
  },
  {
    image: agency3,
    title: "Detailed Reporting",
    alt:"Detailed Reporting Icon",
    description:
      "Transparency is at the heart of our process. We provide you with regular, comprehensive reports that break down your campaign’s performance. These reports include actionable insights and recommendations, giving you a clear picture of your return on investment.",
  },
  {
    image: agency4,
    title: "Market Research",
    alt:"Market Research Icon",
    description:
      "We dive deep into your industry to analyze market trends, consumer behavior, and competitor strategies. This research helps us identify opportunities and challenges, enabling us to craft a campaign that not only stands out but also resonates with your potential customers.",
  },
  {
    image: agency5,
    title: "Performance Monitoring",
    alt:"Performance Monitoring Icon",
    description:
      "After your campaign goes live, we continuously monitor its performance. By tracking key metrics such as click-through rates, conversion rates, and ROI, we gain valuable insights into what’s working and what needs improvement, ensuring your campaign stays on track.",
  },
  {
    image: agency6,
    title: "Continuous Optimization",
    alt:"Continuous Optimization Icon",
    description:
      "We continuously refine your campaigns based on performance data and market changes. From adjusting bids to testing new ad creatives, our goal is to ensure your campaigns remain effective and deliver consistent results over time.",
  },
];

const EcomPpcAgency = () => {
  return (
    <div className="Ecommerceagency-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Our <span>eCommerce PPC Process</span>
            </h2>
          </div>
          {cardData.map((card, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="ecommerce-agency-card">
                <Image src={card.image} alt={card.alt} />
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcomPpcAgency;
