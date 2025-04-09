import React from "react";
import adds1 from "../../../public/images/remarketingimg/remarket-segment-1.webp";
import adds2 from "../../../public/images/remarketingimg/remarket-segment-2.webp";
import adds3 from "../../../public/images/remarketingimg/remarket-segment-3.webp";
import adds4 from "../../../public/images/remarketingimg/remarket-segment-4.webp";
import adds5 from "../../../public/images/remarketingimg/remarket-segment-5.webp";
import Image from "next/image";

const RemarkSeoServices = () => {
  const services = [
    {
      imgSrc: adds1,
      altText: "Remarketing Ads Icon",
      title: "Dynamic Remarketing Ads",
      description:
        "We create dynamic ads that showcase the exact products or services users viewed on your website. These ads are tailored to the individual’s interests, ensuring they see content that is highly relevant to their previous browsing behavior.",
      cardClass: "card-one",
    },
    {
      imgSrc: adds2,
      altText: "Audience Segmentation Icon",
      title: "Audience Segmentation",
      description:
        "Our team develops detailed audience lists based on user actions, demographics, and interests. By categorizing your audience into precise segments, we ensure your ads reach the right people at the right stage of their buyer journey, improving overall campaign efficiency and impact.",
      cardClass: "card-two",
    },
    {
      imgSrc: adds3,
      altText: "Bid Management Icon",
      title: "Bid Management",
      description:
        "Using advanced tools and techniques, the experts at our Google Ads Remarketing company, optimize your ad bids to ensure maximum ROI. We focus on allocating your budget effectively, bidding higher on high-value prospects while maintaining cost-efficiency across your campaigns.",
      cardClass: "card-three",
    },
    {
      imgSrc: adds4,
      altText: "Performance Tracking Icon",
      title: "Performance Tracking",
      description:
        "We continuously monitor your campaign performance through detailed analytics and reporting. This allows us to identify what’s working, make data-driven adjustments, and ensure your campaigns deliver the results you expect.",
      cardClass: "card-four",
    },
    {
      imgSrc: adds5,
      altText: "Ad Copy and Design Icon",
      title: "Ad Copy and Design",
      description:
        "Our creative team crafts compelling visuals and persuasive ad copy that capture your audience’s attention. From eye-catching graphics to impactful messaging, every element is designed to drive engagement and encourage conversions.",
      cardClass: "card-five",
    },
  ];

  return (
    <div className="Remarketingads-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Google Ads <span> Remarketing Services</span>
            </h2>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className={`Remarketingads-card ${service.cardClass}`}>
                <div className="img-ppc">
                  <Image src={service.imgSrc} alt={service.altText} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemarkSeoServices;
