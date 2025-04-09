import React from "react";
import dev1 from "../../../public/images/graphmotionimg/smm-customer-1.png";
import dev2 from "../../../public/images/graphmotionimg/smm-customer-2.png";
import dev3 from "../../../public/images/graphmotionimg/smm-customer-3.png";
import dev4 from "../../../public/images/graphmotionimg/smm-customer-4.png";
import dev5 from "../../../public/images/graphmotionimg/smm-customer-5.png";
import dev6 from "../../../public/images/graphmotionimg/smm-customer-6.png";
import Image from "next/image";

const designServices = [
  {
    imgSrc: dev1,
    title: "Increase Audience Engagement",
    alt: "Custom eCommerce Design Icon",
    description: "Visuals attract and retain attention better than text.",
  },
  {
    imgSrc: dev2,
    title: "Improve Brand Authority",
    alt: "Conversion Optimization Icon",
    description: "Professionally designed graphics showcase credibility.",
  },
  {
    imgSrc: dev3,
    title: "Simplify Complex Concepts",
    alt: "Responsive Design Icon",
    description:
      "Infographics and animations make detailed information easy to digest.",
  },
  {
    imgSrc: dev4,
    title: "Enhance Marketing Campaigns",
    alt: "Maintenance and Updates Icon",
    description:
      "Graphics and animations improve ad and email campaign performance.",
  },
  {
    imgSrc: dev5,
    title: "Boost Social Media Presence",
    alt: "Maintenance and Updates Icon",
    description: "Highly shareable visual content enhances brand visibility.",
  },
  {
    imgSrc: dev6,
    title: "Drive Higher Conversion Rates",
    alt: "Maintenance and Updates Icon",
    description:
      "Visual storytelling influences purchasing decisions effectively.",
  },
];

const ContInfoBusiness = () => {
  return (
    <div className="Designservices-section Develpomentservices infographic-business py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              How Can Infographics & <span>Motion Graphics Help?</span>
            </h2>
            <p>
              Infographics and motion graphics simplify complex ideas, making
              them more engaging and memorable. Whether you’re looking to boost
              brand awareness, increase user engagement, or improve conversion
              rates, infographics and motion graphics can transform how you
              connect with your audience.
            </p>
          </div>
          {designServices.map((service, index) => (
            <div className="col-md-6 col-12 mb-4" key={index}>
              <div className="design-services-one">
                <div className="dev-img">
                  <Image src={service.imgSrc} alt={service.alt} />
                </div>
                <div className="design-text">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContInfoBusiness;
