import React from "react";
import Image from "next/image";
import adds1 from "../../../public/images/localppcimages/local-audience-1.webp";
import adds2 from "../../../public/images/localppcimages/local-audience-2.webp";
import adds3 from "../../../public/images/localppcimages/local-audience-3.webp";
import adds4 from "../../../public/images/localppcimages/local-audience-4.webp";
import adds5 from "../../../public/images/localppcimages/local-audience-5.webp";
import adds6 from "../../../public/images/localppcimages/local-audience-6.webp";

const cardData = [
  {
    image: adds1,
    title: "Audience Targeting",
    alt:"Audience Targeting Icon",
    description:
      "Identify and connect with your ideal customers using advanced audience segmentation tools. By analyzing location, demographics, interests, and online behavior, we ensure your ads reach users who are genuinely interested in your offerings. This precision targeting helps drive meaningful engagements and boosts conversion rates.",
  },
  {
    image: adds2,
    title: "Ad Design and Copywriting",
    alt:"Ad Design Icon",
    description:
      "Stand out in a crowded marketplace with ads that capture attention and inspire action. Our team of experts crafts visually compelling designs and persuasive ad copy that speaks directly to your audience. Every element, from headlines to call-to-action buttons, is optimized to drive clicks and conversions.",
  },
  {
    image: adds3,
    title: "Competitor Analysis",
    alt:"Competitor Analysis Icon",
    description:
      "Stay ahead of your competitors with our in-depth analysis of their PPC strategies. We identify gaps and opportunities in their campaigns, enabling us to design ads that outperform theirs in both visibility and conversions. By leveraging this competitive intelligence, we ensure your business stands out in the local market.",
  },
  {
    image: adds4,
    title: "Keyword Optimization",
    alt:"Keyword Optimization Icon",
    description:
      "Effective PPC campaigns begin with choosing the right keywords. We conduct extensive keyword research to uncover high-converting search terms and refine them throughout the campaign. By bidding strategically on these keywords, we position your business in front of ready-to-buy customers, ensuring maximum ROI.",
  },
  {
    image: adds5,
    title: "Performance Monitoring",
    alt:"Performance Monitoring Icon",
    description:
      "Keep your campaigns on track with real-time performance monitoring. We provide detailed reports that highlight key metrics and actionable insights, ensuring transparency and accountability. This enables us to fine-tune campaigns regularly, keeping them aligned with your goals.",
  },
  {
    image: adds6,
    title: "Landing Page Optimization",
    alt:"Landing Page Optimization Icon",
    description:
      "Maximize conversions with landing pages tailored to your campaign goals. Our team designs and optimizes pages to ensure they align with your ads, delivering a seamless user experience. With clear calls-to-action and persuasive content, we turn clicks into valuable leads and sales.",
  },
];

const LocalPpcApproach = () => {
  return (
    <div className="Localapproach-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Aspects of <br /> <span> Local PPC Marketing</span>
            </h2>
          </div>
          {cardData.map((card, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="Localapproach-card">
                <Image src={card.image} alt={card.alt} />
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalPpcApproach;
