import React from "react";
import Image from "next/image";
import windpc1 from "../../../public/images/hubSpot-marketing-autoimg/new-auto-func1.webp";
import windpc2 from "../../../public/images/hubSpot-marketing-autoimg/new-auto-func2.webp";
import windpc3 from "../../../public/images/hubSpot-marketing-autoimg/new-auto-func3.webp";
import windpc4 from "../../../public/images/hubSpot-marketing-autoimg/new-auto-func4.webp";
import windpc5 from "../../../public/images/hubSpot-marketing-autoimg/new-auto-func5.webp";
import windpc6 from "../../../public/images/hubSpot-marketing-autoimg/new-auto-func6.webp";

const cardData = [
  {
    id: 1,
    img: windpc1,
    alt: "Certified Expertise Icon",
    title: "Certified Expertise",
    description:
      "As a HubSpot-certified agency, WebGuruz brings validated expertise and hands-on experience in deploying powerful marketing automation solutions. We ensure our clients receive industry-leading strategies tailored to their needs.",
  },
  {
    id: 2,
    img: windpc2,
    alt: "Dedicated Team Icon",
    title: "Dedicated Team",
    description:
      "Our team of seasoned HubSpot professionals collaborates closely with you, providing the insights, technical know-how, and creativity needed to make your marketing automation efforts a success.",
  },
  {
    id: 3,
    img: windpc3,
    alt: "Data-Driven Approach Icon",
    title: "Data-Driven Approach",
    description:
      "We leverage advanced analytics and performance metrics to make informed decisions, continually optimizing your marketing automation strategy for better results and higher ROI.",
  },
  {
    id: 4,
    img: windpc4,
    alt: "Tailored Solutions Icon",
    title: "Tailored Solutions",
    description:
      "We design bespoke automation strategies that align perfectly with your business objectives, ensuring that every workflow and campaign delivers maximum impact and measurable outcomes.",
  },
  {
    id: 5,
    img: windpc5,
    alt: "Comprehensive Support Icon",
    title: "Comprehensive Support",
    description:
      "From initial consultation to post-deployment optimization, we offer full-spectrum support, ensuring every element of your HubSpot implementation functions seamlessly and efficiently.",
  },
  {
    id: 6,
    img: windpc6,
    alt: "Global Recognition Icon",
    title: "Global Recognition",
    description:
      "With a proven track record of delivering exceptional services to clients worldwide, WebGuruz is a trusted partner for businesses seeking impactful and scalable marketing automation solutions.",
  },
];

const NewAutomateChoose = () => {
  return (
    <div className="automation-section newhubprocess-section new-why-choose-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto heading-main text-center mb-3 mb-md-5">
            <h2>
              Why Choose WebGuruz as Your <br />
              <span>HubSpot Automation Partner?</span>
            </h2>
            <p>
              Choosing the right partner is crucial to your marketing automation
              success. Here’s why WebGuruz stands out:
            </p>
          </div>
        </div>
        <div className="row automation-row">
          {cardData.map(({ id, img, alt, title, description }) => (
            <div key={id} className="col-md-6 col-sm-6 col-12 mb-4">
              <div className="newprocess-card new-why-card">
                <div className="autoimg">
                  <Image src={img} alt={alt} />
                </div>
                <div className="auto-text">
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewAutomateChoose;
