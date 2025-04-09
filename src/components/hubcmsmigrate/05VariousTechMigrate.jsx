import React from "react";
import Image from "next/image";

import cmsmigration1 from "../../../public/images/Hubspotcmsimages/cms-migration-1.webp";
import cmsmigration2 from "../../../public/images/Hubspotcmsimages/cms-migration-2.webp";
import cmsmigration3 from "../../../public/images/Hubspotcmsimages/cms-migration-3.webp";
import cmsmigration4 from "../../../public/images/Hubspotcmsimages/cms-migration-4.webp";
import cmsmigration5 from "../../../public/images/Hubspotcmsimages/cms-migration-5.webp";
import cmsmigration6 from "../../../public/images/Hubspotcmsimages/cms-migration-6.webp";

const serviceCards = [
  {
    img: cmsmigration1,
    alt: "Website Migration Icon",
    title: "Full Website Migration",
    description: "We handle the complete migration of your website, ensuring every page, image, and asset transitions smoothly.",
  },
  {
    img: cmsmigration2,
    alt: "SEO Migration & Optimization Icon",
    title: "SEO Migration & Optimization",
    description: "Maintain your search engine rankings with our SEO-focused migration strategy.",
  },
  {
    img: cmsmigration3,
    alt: "Content & Data Migration Icon",
    title: "Content & Data Migration",
    description: "Preserve your valuable content and data by migrating it securely and efficiently to HubSpot CMS.",
  },
  {
    img: cmsmigration4,
    alt: "Third-Party Integrations Icon",
    title: "Third-Party Integrations",
    description: "Seamlessly connect HubSpot CMS with your existing tools and software for a unified experience.",
  },
  {
    img: cmsmigration5,
    alt: "Custom Theme Development Icon",
    title: "Custom Theme Development",
    description: "Our developers create custom themes that reflect your brand identity and optimize user experience.",
  },
  {
    img: cmsmigration6,
    alt: "Support & Maintenance Icon",
    title: "Ongoing Support & Maintenance",
    description: "Post-migration, we offer continuous support and maintenance to ensure your website stays at peak performance.",
  },
];

const VariousTechMigrate = () => {
  return (
    <div className="hubProcess hubProcess_cms pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-3 mb-md-5">
            <h2 className="mb-2">
              <span>HubSpot CMS Migration </span>
              <br /> Services We Offer
            </h2>
            <p className="mb-4">
              Transform your website with our comprehensive HubSpot CMS migration services:
            </p>
          </div>
        </div>
        <div className="row process">
          {serviceCards.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="process-card">
                <div className="check-icon">
                  <Image src={card.img} alt={card.alt} />
                </div>
                <div className="process text">
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

export default VariousTechMigrate;
