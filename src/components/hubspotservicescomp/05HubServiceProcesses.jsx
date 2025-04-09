import React from "react";
import Image from "next/image";
import contentimg1 from "../../../public/images/hubservicesimg/content1.webp";
import contentimg2 from "../../../public/images/hubservicesimg/content2.webp";
import contentimg3 from "../../../public/images/hubservicesimg/content3.webp";
import contentimg4 from "../../../public/images/hubservicesimg/content4.webp";
import contentimg5 from "../../../public/images/hubservicesimg/content5.webp";
import contentimg6 from "../../../public/images/hubservicesimg/content6.webp";

const services = [
  {
    image: contentimg1,
    alt: "HubSpot CRM Setup Icon",
    title: "HubSpot CRM Setup",
    description:
      "We set up and configure HubSpot CRM to centralize your customer data, streamline communication, and improve relationship management. Our team ensures smooth integration with existing tools and customizes the platform to suit your sales and marketing needs.",
  },
  {
    image: contentimg2,
    alt: "CMS Hub Setup Icon",
    title: "CMS Hub Setup",
    description:
      "We create, design, and launch user-friendly websites using HubSpot’s CMS Hub. Our services include building dynamic, secure, and scalable sites that reflect your brand identity and enhance user experience.",
  },
  {
    image: contentimg3,
    alt: "Sales Hub Setup Icon",
    title: "Sales Hub Setup",
    description:
      "We configure HubSpot’s Sales Hub to optimize your sales processes, automate tasks, and boost productivity. From deal tracking to automated follow-ups, we help your sales team close more deals efficiently.",
  },
  {
    image: contentimg4,
    alt: "Operations Hub Setup Icon",
    title: "Operations Hub Setup",
    description:
      "Our team helps you leverage HubSpot’s Operations Hub to sync data across platforms, automate workflows, and improve operational efficiency. We ensure your business processes run smoothly with minimal manual intervention.",
  },
  {
    image: contentimg5,
    alt: "Service Hub Setup Icon",
    title: "Service Hub Setup",
    description:
      "We set up HubSpot’s Service Hub to enhance your customer support capabilities. Our services include ticket management, customer feedback tracking, and automation tools to improve customer satisfaction and retention.",
  },
  {
    image: contentimg6,
    alt: "Marketing Hub Setup Icon",
    title: "Marketing Hub Setup",
    description:
      "We help you harness the power of HubSpot’s Marketing Hub to execute campaigns, nurture leads, and track performance. Our setup includes automation, email marketing, and lead management to drive measurable results.",
  },
];

const HubServiceProcesses = () => {
  return (
    <div className="hub-Services-process pt-4 pb-4 pb-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Other Essential <span>HubSpot Services</span>
            </h2>
          </div>
        </div>
        <div className="row servicess-process-main">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-sm-6 col-12">
              <div className="process-main-one">
                <Image src={service.image} alt={service.alt} />
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

export default HubServiceProcesses;
