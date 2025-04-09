import React from "react";
import Image from "next/image";
import Certi from "../../../public/images/hubonboardingimg/onboard-point-1.webp";
import Data from "../../../public/images/hubonboardingimg/onboard-point-2.webp";
import Custo from "../../../public/images/hubonboardingimg/onboard-point-3.webp";
import Trans from "../../../public/images/hubonboardingimg/onboard-point-4.webp";

const seoFeatures = [
  {
    id: 1,
    img: Certi,
    alt: "Proven Track Record Icon",
    title: "Proven Track Record",
    description:
      "With over 10 years of experience, we have successfully onboarded hundreds of clients across industries.",
    className: "yellow",
  },
  {
    id: 2,
    img: Data,
    alt: "Certified HubSpot Partner Icon",
    title: "Certified HubSpot Partner",
    description:
      "Our certified experts bring in-depth knowledge and insights to your onboarding process.",
    className: "two-choose",
  },
  {
    id: 3,
    img: Custo,
    alt: "Customized Solutions Icon",
    title: "Customized Solutions",
    description:
      "We tailor every aspect of onboarding to your unique business requirements.",
    className: "",
  },
  {
    id: 4,
    img: Trans,
    alt: "Continuous Support Icon",
    title: "Continuous Support",
    description:
      "Beyond onboarding, we offer ongoing support and optimization services.",
    className: "yellow reporting",
  },
];

const HubOnboardReasons = () => {
  return (
    <div className="why_hire-section onboarding-reasons pt-5 pb-0 pb-md-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 heading-main text-left mb-4 mb-lg-0">
            <h2 className="mb-3">
              Why Choose WebGuruz for <br />
              <span>HubSpot Onboarding Services?</span>
            </h2>
            <p>
              WebGuruz stands out as a trusted partner for HubSpot Onboarding,
              offering unmatched expertise and personalized service. Our team of
              certified professionals ensures that your HubSpot implementation
              aligns with your business strategy, delivering maximum value.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-left">
            <div className="row why-chose-img flex-direction-row">
              {seoFeatures.map((feature) => (
                <div key={feature.id} className="col-sm-6 col-12">
                  <div className={`top-img ${feature.className}`}>
                    <Image src={feature.img} alt={feature.alt} />
                    <div className="why-choose-content">
                      <h5 className="mb-3">{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubOnboardReasons;
