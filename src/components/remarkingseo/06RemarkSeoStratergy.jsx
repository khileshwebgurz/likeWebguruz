import React from "react";
import sales1 from "../../../public/images/remarketingimg/remarket-audience-1.webp";
import sales2 from "../../../public/images/remarketingimg/remarket-audience-2.webp";
import sales3 from "../../../public/images/remarketingimg/remarket-audience-3.webp";
import sales4 from "../../../public/images/remarketingimg/remarket-audience-4.webp";
import sales5 from "../../../public/images/remarketingimg/remarket-audience-5.webp";
import sales6 from "../../../public/images/remarketingimg/remarket-audience-6.webp";
import Image from "next/image";

const RemarkSeoStratergy = () => {
  const strategies = [
    {
      image: sales1,
      alt: "Audience Lists Icon",
      title: "Custom Audience Lists",
      description:
        "We carefully analyze user behavior on your site to create segmented lists that target the most relevant audience. These lists allow us to tailor ads to specific user groups, increasing the likelihood of re-engagement and conversions.",
    },
    {
      image: sales2,
      alt: "A/B Testing Icon",
      title: "A/B Testing",
      description:
        "To maximize performance, our Google Ads Remarketing company conducts rigorous A/B testing of ad creatives, messaging, and targeting strategies. This ensures we identify and implement the most effective approach for your campaigns.",
    },
    {
      image: sales3,
      alt: "Frequency Capping Icon",
      title: "Frequency Capping",
      description:
        "By setting limits on how often your ads appear to the same user, we prevent overexposure and ensure your brand maintains a positive impression. This balance helps retain user interest without overwhelming them.",
    },
    {
      image: sales4,
      alt: "Cross-Device Remarketing",
      title: "Cross-Device Remarketing",
      description:
        "We ensure your ads reach users wherever they are, whether on desktop, mobile, or tablet. This seamless experience increases the likelihood of re-engagement across multiple touchpoints.",
    },
    {
      image: sales5,
      alt: "Engaging Visuals Icon",
      title: "Engaging Visuals",
      description:
        "Our design team produces high-quality banners and videos that reflect your brand’s identity and capture attention. These visuals are crafted to resonate with your audience and encourage clicks.",
    },
    {
      image: sales6,
      alt: "Geo-Targeting Icon",
      title: "Geo-Targeting",
      description:
        "We use precise geographic targeting to show your ads to users in specific locations. This strategy is ideal for driving local traffic or engaging audiences in targeted regions.",
    },
  ];

  return (
    <div className="Remarketingads-section Remarketingsales-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Proven Google Ads Remarketing </span> Strategies for Success
            </h2>
            <p>Data-driven strategies designed to achieve your goals.</p>
          </div>
          {strategies.map((strategy, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="Remarketingads-card Remarketingsales-card">
                <div className="img-ppc">
                  <Image src={strategy.image} alt={strategy.alt} />
                </div>
                <h4>{strategy.title}</h4>
                <p>{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemarkSeoStratergy;
