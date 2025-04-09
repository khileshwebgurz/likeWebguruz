import React from "react";
import Image from "next/image";
import SaleOne from "../../../public/images/Seo-PackageImages/sale-one.webp";
import SaleTwo from "../../../public/images/Seo-PackageImages/sale-two.webp";
import SaleThree from "../../../public/images/Seo-PackageImages/sale-three.webp";
import Target from "../../../public/images/Seo-PackageImages/target.svg";
import Busines from "../../../public/images/Seo-PackageImages/Busines.svg";
import Competitos from "../../../public/images/Seo-PackageImages/Competitos.svg";
import Arrow from "../../../public/images/Seo-PackageImages/arrow.webp";

const seoSteps = [
  {
    title: "Initial SEO Audit and Strategy Creation",
    image: SaleOne,
    alt:"SEO Audit and Strategy Creation",
    subpoints: [
      {
        icon: Busines,
        text: "Identify SEO issues: We evaluate factors like site speed, usability, and keyword targeting.",
      },
      {
        icon: Target,
        text: "Competitor analysis: See how you stack up against competitors and find opportunities.",
      },
      {
        icon: Competitos,
        text: "Custom strategy: Develop a roadmap with specific milestones to align with your goals.",
      },
    ],
  },
  {
    title: "Implementation of SEO Plan",
    image: SaleTwo,
    alt:"SEO Plan",
    subpoints: [
      {
        icon: Busines,
        text: "On-page optimization: Optimize title tags, meta descriptions, and content for target keywords.",
      },
      {
        icon: Target,
        text: "Content creation: Publish engaging, keyword-optimized content that attracts and converts.",
      },
      {
        icon: Competitos,
        text: "Link building: Establish authority with high-quality, relevant backlinks to enhance rankings.",
      },
    ],
  },
  {
    title: "Ongoing Monitoring and Reporting",
    image: SaleThree,
    alt:"SEO Monitoring and Reporting",
    subpoints: [
      {
        icon: Busines,
        text: "Performance tracking: Measure organic traffic, rankings, and user engagement.",
      },
      {
        icon: Target,
        text: "Consistent Content",
      },
      {
        icon: Competitos,
        text: "Link Building",
      },
    ],
  },
];

const SeoLeads = () => {
  return (
    <div className="sales-section inner-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-3">
              How Does Our <span>SEO Team Work?</span>
            </h2>
          </div>
        </div>
        {seoSteps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`row sales-main pt-4 pt-md-5 ${index === 1 ? "sales-two" : ""}`}>
              <div className="col-md-6 col-12 sales-image">
                <Image src={step.image} alt={step.alt} />
              </div>
              <div className="col-md-6 col-12 sale-text">
                <h3 className="mt-3 mb-4 mt-md-3 mb-md-5">{step.title}</h3>
                {step.subpoints.map((subpoint, subIndex) => (
                  <div className="img-text" key={subIndex}>
                    <Image src={subpoint.icon} alt={subpoint.text.split(":")[0]} />
                    <h6>{subpoint.text}</h6>
                  </div>
                ))}
              </div>
            </div>
            {index < seoSteps.length - 1 && (
              <div className="arrow-img text-center">
                <Image src={Arrow} alt="arrow" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SeoLeads;
