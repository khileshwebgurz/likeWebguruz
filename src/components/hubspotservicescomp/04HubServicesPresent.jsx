import React from "react";
import Image from "next/image";
import Link from "next/link";
import servimg1 from "../../../public/images/hubservicesimg/services-present-1.webp";
import servimg2 from "../../../public/images/hubservicesimg/services-present-2.webp";
import servimg3 from "../../../public/images/hubservicesimg/services-present-3.webp";
import servimg4 from "../../../public/images/hubservicesimg/services-present-4.webp";
import servimg5 from "../../../public/images/hubservicesimg/services-present-5.webp";
import servimg6 from "../../../public/images/hubservicesimg/services-present-6.webp";

const services = [
  {
    image: servimg1,
    alt: "HubSpot Onboarding Icon",
    title: "HubSpot Onboarding",
    description: "Seamless setup and configuration tailored to your business needs.",
    link: "/hubspot-onboarding",
  },
  {
    image: servimg2,
    alt: "HubSpot Design & Development Icon",
    title: "HubSpot Design & Development",
    description: "Customized templates and designs to reflect your brand.",
    link: "/hubspot-development",
  },
  {
    image: servimg3,
    alt: "HubSpot Automation Icon",
    title: "HubSpot Automation",
    description: "Workflow automation to save time and enhance efficiency.",
    link: "/hubspot-automation-services",
  },
  {
    image: servimg4,
    alt: "HubSpot Consulting Icon",
    title: "HubSpot Consulting",
    description: "Strategic advice and insights for optimal HubSpot utilization.",
    link: "/hubspot-consulting",
  },
  {
    image: servimg5,
    alt: "HubSpot CMS Development Icon",
    title: "HubSpot CMS Development",
    description: "Powerful, user-friendly websites built on the HubSpot CMS.",
    link: "/hubspot-cms-development",
  },
  {
    image: servimg6,
    alt: "HubSpot Migration Icon",
    title: "HubSpot Migration",
    description: "Effortless migration from your existing platform to HubSpot.",
    link: "/hubspot-migration-services",
  },
];

const HubServicesPresent = () => {
  return (
    <div className="our-hubspot-services hubspot-present-services  whyhrs py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main mb-3 mb-md-5 text-center">
            <h2>
              <span>HubSpot Services </span> We Offer
            </h2>
          </div>
        </div>
        <div className="row hub-services">
          {services.map((service, index) => (
            <div className={`col-lg-4 col-md-6 col-12 box-${index + 1}`} key={index}>
              <div className="services-box">
                <div className="services-img">
                  <Image src={service.image} alt={service.alt} />
                </div>
                <div className="services-text">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                  <Link href={service.link} className="read-more">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HubServicesPresent;
