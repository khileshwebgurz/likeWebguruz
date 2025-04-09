import React from "react";
import Image from "next/image";
import benifit from "../../../public/images/newhubcrmautoimages/conversion.webp";
import efficiencyGain from "../../../public/images/newhubcrmautoimages/gain.webp";
import lead from "../../../public/images/newhubcrmautoimages/lead.webp";
import roi from "../../../public/images/newhubcrmautoimages/roi.webp";

const benefitsData = [
  {
    image: benifit,
    alt: "Higher Conversion Rates",
    title: "Higher Conversion Rates",
    percentage: "20%",
    description:
      "Businesses see up to a 20% increase in conversions after implementing HubSpot CRM automation.",
  },
  {
    image: efficiencyGain,
    alt: "Efficiency Gains",
    title: "Efficiency Gains",
    percentage: "40%",
    description:
      "HubSpot’s automation tools save businesses an average of 10 hours per week per employee.",
  },
  {
    image: lead,
    alt: "Higher Lead Retention",
    title: "Higher Lead Retention",
    percentage: "30%",
    description:
      "Automating lead nurturing can increase lead retention by 30%.",
  },
  {
    image: roi,
    alt: "Improved ROI",
    title: "Improved ROI",
    percentage: "25%",
    description:
      "Companies report a 25% increase in ROI after integrating HubSpot CRM automation into their workflows.",
  },
];

const CrmAutoBenefits = () => {
  return (
    <div className="Hubbenfit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Achieve Real Results with
              <br /> <span> HubSpot CRM Automation</span>
            </h2>
          </div>
          {benefitsData.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="benifit-card">
                <Image src={benefit.image} alt={benefit.alt} />
                <div className="card-content-main">
                  <h3>{benefit.title}</h3>
                  <h4>{benefit.percentage}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrmAutoBenefits;
