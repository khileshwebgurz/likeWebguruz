import React from "react";
import Image from "next/image";

import agile from "../../../public/images/Hubspotappimages/app-deve-1.webp";
import comprehensive from "../../../public/images/Hubspotappimages/app-deve-2.webp";
import cost from "../../../public/images/Hubspotappimages/app-deve-3.webp";
import expert from "../../../public/images/Hubspotappimages/app-deve-4.webp";
import track from "../../../public/images/Hubspotappimages/app-deve-5.webp";
import tailored from "../../../public/images/Hubspotappimages/app-deve-6.webp";

const cardData = [
  {
    img: expert,
    alt: "Expert Developers Icon",
    title: "Expert Developers",
    description:
      "Certified HubSpot developers with years of experience. Our team leverages advanced skills and industry knowledge to create innovative and effective solutions.",
  },
  {
    img: tailored,
    alt: "Tailored Solutions Icon",
    title: "Tailored Solutions",
    description:
      "Custom applications built to match your unique requirements. We work closely with you to ensure the final product aligns perfectly with your business objectives.",
  },
  {
    img: track,
    alt: "Track Record Icon",
    title: "Proven Track Record",
    description:
      "Hundreds of successful projects delivered worldwide. Our extensive portfolio reflects our ability to handle diverse challenges and exceed client expectations.",
  },
  {
    img: comprehensive,
    alt: "Comprehensive Support Icon",
    title: "Comprehensive Support",
    description:
      "Dedicated support to ensure your application’s success. We offer continuous assistance through every phase, from initial launch to long-term optimization.",
  },
  {
    img: agile,
    alt: "Agile Development Icon",
    title: "Agile Development",
    description:
      "Flexible processes that adapt to your business needs. Our iterative approach allows for faster adjustments and ensures your project evolves with your goals.",
  },
  {
    img: cost,
    alt: "Cost-Effective Solutions Icon",
    title: "Cost-Effective Solutions",
    description:
      "High-quality services at competitive prices. We prioritize efficiency and value, delivering outstanding results without compromising on quality.",
  },
];

const AppDevHire = () => {
  return (
    <div className="Hubwhyus py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>Why Work with Us?</h2>
            <p>
              Choosing the right partner is essential for your success. Here’s
              why we stand out:
            </p>
          </div>
          {cardData.map((card, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="why-us-card text-center">
                <div className="why-img-content">
                  <Image
                    src={card.img}
                    className="small-icon-img mb-4"
                    alt={card.alt}
                  />
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDevHire;
