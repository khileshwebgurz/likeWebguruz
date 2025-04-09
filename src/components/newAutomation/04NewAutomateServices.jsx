import React from "react";
import Image from "next/image";
import afordableseoone from "../../../public/images/hubSpot-marketing-autoimg/new-market1.webp";
import afordableseotwo from "../../../public/images/hubSpot-marketing-autoimg/new-market2.webp";
import afordableseothree from "../../../public/images/hubSpot-marketing-autoimg/new-market3.webp";
import afordableseofour from "../../../public/images/hubSpot-marketing-autoimg/new-market4.webp";
import afordableseofive from "../../../public/images/hubSpot-marketing-autoimg/new-market5.webp";
import afordableseosix from "../../../public/images/hubSpot-marketing-autoimg/new-market6.webp";

const services = [
  {
    image: afordableseoone,
    alt: "Lead Nurturing Campaigns Icon",
    title: "Lead Nurturing Campaigns",
    description:
      "Automatically guide prospects through the sales funnel with personalized email campaigns and trigger-based communication.",
  },
  {
    image: afordableseotwo,
    alt: "CRM Integration and Optimization Icon",
    title: "CRM Integration and Optimization",
    description:
      "Sync your marketing efforts seamlessly with sales using HubSpot CRM automation and leverage its capabilities for growth.",
  },
  {
    image: afordableseothree,
    alt: "Behavioral Tracking Icon",
    title: "Behavioral Tracking",
    description:
      "Monitor user behavior on your website and email campaigns to deliver targeted and relevant messages.",
  },
  {
    image: afordableseofour,
    alt: "Social Media Management Icon",
    title: "Automated Social Media Management",
    description:
      "Schedule posts, track engagement, and measure performance effortlessly.",
  },
  {
    image: afordableseofive,
    alt: "Performance Analytics Icon",
    title: "Performance Analytics",
    description:
      "Gain insights with detailed reports and dashboards to measure campaign effectiveness.",
  },
  {
    image: afordableseosix,
    alt: "Content Personalization Icon",
    title: "Content Personalization",
    description:
      "Use dynamic content strategies to create customized experiences for each customer.",
  },
];

const NewAutomateServices = () => {
  return (
    <section className="local-service technical-service new-automate-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
            <h2>
              <span>Comprehensive Hubspot Marketing Automation </span>
              <br /> Services We Offer
            </h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-sm-4 col-xs-12" key={index}>
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={service.image} alt={service.alt} />
                </div>
                <div className="content">
                  <h3 className="mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewAutomateServices;
