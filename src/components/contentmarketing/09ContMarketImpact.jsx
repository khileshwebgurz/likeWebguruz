import React from "react";
import Image from "next/image";
import woo1 from "../../../public/images/contentmarketingimg/content-review-1.png";
import woo2 from "../../../public/images/contentmarketingimg/content-review-2.png";
import woo3 from "../../../public/images/contentmarketingimg/content-review-3.png";
import woo4 from "../../../public/images/contentmarketingimg/content-review-4.png";
import woo5 from "../../../public/images/contentmarketingimg/content-review-5.png";
import woo6 from "../../../public/images/contentmarketingimg/content-review-6.png";

const platforms = [
  {
    image: woo1,
    title: "Expertise & Experience",
    alt: "Expertise Icon",
    description:
      "Agencies bring specialized knowledge and industry insights to create effective content strategies that drive results. Their deep understanding of market trends ensures that every campaign is both innovative and targeted for success.",
  },
  {
    image: woo2,
    title: "Cost-Effective Solutions",
    alt: "Cost-Effective Icon",
    description:
      "Outsourcing content marketing allows you to access top talent and advanced tools without the overhead of an in-house team. This approach not only reduces operational costs but also delivers a high return on investment.",
  },
  {
    image: woo3,
    title: "Consistent Quality",
    alt: "Quality Icon",
    description:
      "A dedicated agency ensures your content is consistently high-quality and aligned with evolving SEO standards. Their rigorous quality control processes guarantee that your brand message remains clear and professional across all platforms.",
  },
  {
    image: woo4,
    title: "Scalable Services",
    alt: "Scalability Icon",
    description:
      "Agencies can quickly scale efforts to meet your growing needs, adapting strategies to new market trends. This flexibility allows your business to respond swiftly to changes and seize emerging opportunities without missing a beat.",
  },
  {
    image: woo5,
    title: "Time Efficiency",
    alt: "Time Efficiency Icon",
    description:
      "Focus on your core business while experts manage your content strategy, saving you valuable time. Their streamlined processes and proactive management mean you can achieve more in less time without sacrificing quality.",
  },
  {
    image: woo6,
    title: "Fresh Perspectives",
    alt: "Fresh Ideas Icon",
    description:
      "Agencies provide new ideas and creative approaches that keep your content fresh and engaging, driving better results. By bringing in diverse perspectives, they help ensure your marketing remains innovative and relevant in a competitive landscape.",
  },
];

const ContMarketImpact = () => {
  return (
    <div className="content-market-impact py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Work with a <span>Content Marketing Agency? </span>
            </h2>
          </div>
          {platforms.map((platform, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="work-card">
                <div className="work-card-img">
                  <Image src={platform.image} alt={platform.alt} />
                </div>
                <h4>{platform.title}</h4>
                <p>{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContMarketImpact;
