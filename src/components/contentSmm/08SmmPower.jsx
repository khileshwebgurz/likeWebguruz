import React from "react";
import Image from "next/image";
import brand1 from "../../../public/images/Socialmediaimg/smm-content-1.png";
import brand2 from "../../../public/images/Socialmediaimg/smm-content-2.png";

const services = [
  {
    id: 1,
    image: brand1,
    title: "Organic Social Media Management",
    para: "Struggling to build a loyal online community? Our organic social media management services help you create meaningful connections that drive long-term brand success. We craft engaging content, interact with your audience, and establish your brand as a trusted industry leader- without the need for paid ads. With our expertise, you’ll experience sustainable growth, improved brand credibility, and enhanced search engine visibility.",
    alt: "Custom eCommerce Website Design Icon",
    features: [
      "Builds authentic, long-term relationships",
      "Develops brand credibility",
      "Cost-effective approach",
      "Sustainable audience growth",
      "Enhanced customer trust",
      "Consistent brand messaging",
      "Improved search engine visibility",
    ],
  },
  {
    id: 2,
    image: brand2,
    title: "Paid Social Media Approach",
    para: "Want to reach your ideal customers instantly? Our paid social media advertising services are designed to maximize your ROI and put your brand in front of the right audience at the right time. We create data-driven campaigns with precise targeting, compelling ad creatives, and strategic budget management to ensure you get the best results. Whether you're looking for quick lead generation, product promotions, or market expansion, our team ensures every ad dollar works for you. ",
    alt: "Mobile Responsive Development Icon",
    features: [
      "Immediate market visibility",
      "Precise audience targeting",
      "Rapid lead generation",
      "Scalable campaign structures",
      "Measurable ROI",
      "Flexible budget management",
      "Quick market testing capabilities",
    ],
  },
];

const SmmPower = () => {
  return (
    <div className="social-media-power py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span> Organic vs. Paid: </span> A Comprehensive Comparison
            </h2>
            <p>
              Social media marketing consists of two primary approaches: organic
              and paid. We follow a well-balanced combination of both to
              maximize engagement, reach, and conversions.
            </p>
          </div>
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-12 mb-4">
              <div className="power-card">
                <Image src={service.image} alt={service.alt} />
                <h4>{service.title}</h4>
                <p>{service.para}</p>
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

export default SmmPower;
