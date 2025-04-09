import React from "react";
import Image from "next/image";

import migrate1 from "../../../public/images/hubspotmigrationimages/migration1.webp";
import migrate2 from "../../../public/images/hubspotmigrationimages/migration2.webp";
import migrate3 from "../../../public/images/hubspotmigrationimages/migration3.webp";
import migrate4 from "../../../public/images/hubspotmigrationimages/migration4.webp";
import migrate5 from "../../../public/images/hubspotmigrationimages/migration5.webp";
import migrate6 from "../../../public/images/hubspotmigrationimages/migration6.webp";
import migrate7 from "../../../public/images/hubspotmigrationimages/migration7.webp";
import migrate8 from "../../../public/images/hubspotmigrationimages/migration8.webp";

const migrations = [
  {
    image: migrate2,
    alt: "Marketo to HubSpot Migration",
    title: "Marketo to HubSpot Migration",
    description: "Transfer your marketing automation data and campaigns seamlessly for improved results.",
  },
  {
    image: migrate7,
    alt: "Wix to HubSpot Migration",
    title: "Wix to HubSpot Migration",
    description: "Improve your site performance and marketing capabilities by migrating from Wix to HubSpot.",
  },
  {
    image: migrate6,
    alt: "Salesforce to HubSpot Migration",
    title: "Salesforce to HubSpot Migration",
    description: "Migrate CRM data, including contacts and opportunities, with precision and accuracy.",
  },
  {
    image: migrate5,
    alt: "Bitrix24 to HubSpot Migration",
    title: "Bitrix24 to HubSpot Migration",
    description: "Move your CRM and marketing data to HubSpot for a more cohesive approach.",
  },
  {
    image: migrate3,
    alt: "PipeDrive to HubSpot Migration",
    title: "PipeDrive to HubSpot Migration",
    description: "Transition sales pipelines and workflows smoothly, enhancing your sales efficiency.",
  },
  {
    image: migrate1,
    alt: "Zoho to HubSpot Migration",
    title: "Zoho to HubSpot Migration",
    description: "Ensure all customer data is migrated accurately to leverage HubSpot’s powerful tools.",
  },
  {
    image: migrate8,
    alt: "WordPress to HubSpot Migration",
    title: "WordPress to HubSpot Migration",
    description: "Shift your website, blogs, and pages to HubSpot’s CMS for better content management.",
  },
  {
    image: migrate4,
    alt: "Zendesk to HubSpot Migration",
    title: "Zendesk to HubSpot Migration",
    description: "Transition customer service data for a unified customer experience.",
  },
];

const HubMigrationServices = () => {
  return (
    <div className="Migration-services pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-4">
              <span>HubSpot Migration Services </span> We Offer
            </h2>
            <p>
              We specialize in migrating data, workflows, and assets from a
              variety of platforms to HubSpot. Each migration is customized to
              ensure accuracy, continuity, and performance:
            </p>
          </div>
        </div>
        <div className="row Migration-row mt-3">
          {migrations.map((migration, index) => (
            <div
              key={index}
              className="col-xl-3 col-md-4 col-sm-6 col-12"
            >
              <div className="Migration-card">
                <div className="card-icon d-flex align-items-center">
                  <Image src={migration.image} alt={migration.alt} />
                </div>
                <div className="card-services-content">
                  <div className="card text border-0">
                    <h5>{migration.title}</h5>
                    <p>{migration.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HubMigrationServices;
