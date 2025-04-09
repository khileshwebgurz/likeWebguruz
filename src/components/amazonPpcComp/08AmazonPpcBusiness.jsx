import React from "react";
import Image from "next/image";
import chart1 from "../../../public/images/amazeimages/amappc-1.webp";
import chart2 from "../../../public/images/amazeimages/amappc-2.webp";
import chart3 from "../../../public/images/amazeimages/amappc-3.webp";
import chart4 from "../../../public/images/amazeimages/amappc-4.webp";

const BENEFITS = [
  {
    image: chart1,
    title: "Increased ROI",
    alt:"Increased ROI Icon",
    description:
      "Expertly managed campaigns ensure every dollar works harder for you. By optimizing ad placements, targeting, and budgeting, we help you achieve the best returns on your investment.",
  },
  {
    image: chart2,
    title: "Data-Driven Decisions",
    alt:"Data-Driven Decisions Icon",
    description:
      "Access advanced analytics and insights for optimized campaigns. Our data-first approach ensures that every strategy is informed, effective, and aligned with your business goals.",
  },
  {
    image: chart3,
    title: "Time-Savings",
    alt:"Time-Savings Icon",
    description:
      "Let professionals handle your ads while you focus on other business aspects. From campaign setup to continuous monitoring, we manage every detail so you can prioritize your core operations.",
  },
  {
    image: chart4,
    title: "Scalable Growth",
    alt:"Scalable Growth Icon",
    description:
      "Scale your advertising efforts seamlessly as your business expands. Whether it’s launching new products or entering new markets, our adaptable strategies support your growth at every stage.",
  },
];

const AmazonPpcBussines = () => {
  return (
    <div className="Amazonagency-section Amazonbussines-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Benefits of Hiring an <span>Amazon PPC Management Company</span>
            </h2>
            <p>
              Gain access to expertly crafted campaigns designed to maximize
              your ROI through precise ad targeting, efficient budget
              allocation, and data-driven strategies, allowing you to focus on
              scaling your business.
            </p>
          </div>
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="Amazonbussines-card">
                <Image src={benefit.image} alt={benefit.alt} />
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

export default AmazonPpcBussines;
