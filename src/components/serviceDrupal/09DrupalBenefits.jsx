import React from "react";
import Image from "next/image";
import Certi from "../../../public/images/drupaldevimages/drupal-www-1.webp";
import Data from "../../../public/images/drupaldevimages/drupal-www-2.webp";
import Custo from "../../../public/images/drupaldevimages/drupal-www-3.webp";
import Trans from "../../../public/images/drupaldevimages/drupal-www-4.webp";

const seoFeatures = [
  {
    id: 1,
    img: Certi,
    alt: "User Setting Icon",
    title: "Unmatched Flexibility & Customization",
    description:
      "Build a website that adapts to your business needs with Drupal’s highly customizable architecture and extensive module library.",
    className: "yellow",
  },
  {
    id: 2,
    img: Data,
    alt: "Check Icon",
    title: "Robust Security & Reliability",
    description:
      "Protect your digital assets with Drupal’s enterprise-level security features, including strong encryption, access control, and regular security updates.",
    className: "two-choose",
  },
  {
    id: 3,
    img: Custo,
    alt: "Money Icon",
    title: "Scalability for Business Growth",
    description:
      "Expand effortlessly with a platform designed to handle high traffic, increasing content demands, and seamless third-party integrations.",
    className: "",
  },
  {
    id: 4,
    img: Trans,
    alt: "Search Icon",
    title: "SEO & Performance Optimization",
    description:
      "Boost your online visibility with a Drupal site optimized for search engines, mobile responsiveness, and lightning-fast performance.",
    className: "yellow reporting",
  },
];

const DrupalBenefits = () => {
  return (
    <div className="why_hire-section drupal-dev-benefits pt-5 pb-0 pb-md-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 heading-main text-left mb-4 mb-lg-0">
            <h2 className="mb-3">
              Benefits of <br />
              <span>Drupal Development</span>
            </h2>
            <p>
              Drupal has gained a lot of reputation for both mobile and web
              development purposes. Get ready to build custom Drupal solutions
              and manage dynamic websites, communities, and much more.
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

export default DrupalBenefits;
