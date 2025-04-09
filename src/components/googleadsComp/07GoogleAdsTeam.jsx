import React from "react";
import Image from "next/image";
import Certi from "../../../public/images/googleadsimg/google-data-1.webp";
import Data from "../../../public/images/googleadsimg/google-data-2.webp";
import Custo from "../../../public/images/googleadsimg/google-data-3.webp";
import Trans from "../../../public/images/googleadsimg/google-data-4.webp";

const seoFeatures = [
  {
    id: 1,
    img: Certi,
    alt: "Campaign Management Icon",
    title: "Personalized Campaign Management",
    description:
      "We tailor every campaign to your unique business goals, ensuring a personal approach to your ads.",
    className: "yellow",
  },
  {
    id: 2,
    img: Data,
    alt: "Communication Icon",
    title: "Transparent Communication",
    description:
      "You’ll always know how your campaigns are doing with our clear, actionable reports.",
    className: "two-choose",
  },
  {
    id: 3,
    img: Custo,
    alt: "Expert Optimization Icon",
    title: "Expert Optimization",
    description:
      "Our team continuously fine-tunes campaigns to ensure that every ad performs at its best.",
    className: "",
  },
  {
    id: 4,
    img: Trans,
    alt: "24/7 Support Icon",
    title: "24/7 Support",
    description:
      "We’re here whenever you need us, offering round-the-clock support to keep your ads running smoothly.",
    className: "yellow reporting",
  },
];

const GoogleAdsteam = () => {
  return (
    <div className="why_hire-section google-ads-team pt-5 pb-0 pb-md-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 heading-main text-left mb-4 mb-lg-0">
            <h2 className="mb-3">
              Our Team is <span>Your Team</span>
            </h2>
            <p>
              Partner with a team that delivers personalized campaigns, expert
              optimization, transparent reporting, and 24/7 support to keep your
              ads performing at their best.
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

export default GoogleAdsteam;
