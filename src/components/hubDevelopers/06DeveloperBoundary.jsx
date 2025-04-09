import React from "react";
import Image from "next/image";

// Image sources
import group1 from "../../../public/images/hubspot-developer-img/developer-service1.webp";
import group2 from "../../../public/images/hubspot-developer-img/developer-service2.webp";
import group3 from "../../../public/images/hubspot-developer-img/developer-service3.webp";
import group4 from "../../../public/images/hubspot-developer-img/developer-service4.webp";
import group5 from "../../../public/images/hubspot-developer-img/developer-service5.webp";

const services = [
  {
    image: group1,
    alt: "HubSpot API Integrations Icon",
    title: "HubSpot API Integrations",
    description:
      "We specialize in creating custom API integrations that automate workflows, synchronize data, and improve overall efficiency. Whether you need to integrate with Salesforce, Google Analytics, or other business applications, our developers ensure a smooth and secure connection tailored to your specific needs.",
  },
  {
    image: group2,
    alt: "Custom HubSpot Solutions Icon",
    title: "Custom HubSpot Solutions",
    description:
      "From developing bespoke modules to implementing tailored workflows, our Hubspot application developers create solutions that align with your business goals. Our expertise allows us to build intuitive, scalable, and results-driven HubSpot features that enhance your marketing, sales, and customer service strategies.",
  },
  {
    image: group3,
    alt: "HubSpot CMS Development Icon",
    title: "HubSpot CMS Development",
    description:
      "WebGuruz offers HubSpot CMS development services that help you create engaging, high-performance websites. Our developers craft custom themes and templates optimized for speed, usability, and SEO. By leveraging HubSpot’s CMS capabilities, we build dynamic websites that not only look great but also deliver exceptional user experiences, driving more traffic and conversions.",
  },
  {
    image: group4,
    alt: "HubSpot CRM Setup & Optimization Icon",
    title: "HubSpot CRM Setup & Optimization",
    description:
      "Our team ensures a smooth CRM implementation tailored to your business processes. We customize fields, pipelines, and workflows to streamline data management and improve lead tracking. Additionally, we provide optimization services to enhance CRM performance, ensuring your sales and marketing teams can operate more effectively.",
  },
  {
    image: group5,
    alt: "Marketing Automation with HubSpot Icon",
    title: "Marketing Automation with HubSpot",
    description:
      "We develop custom marketing automation workflows, including email campaigns, lead scoring, and segmentation. Our solutions help you deliver personalized content to the right audience at the right time, maximizing your marketing efforts and driving business growth.",
  },
];

const DeveloperBoundary = () => {
  return (
    <div className="Our-Developers-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main mb-4 mb-md-5 text-center">
            <h2>
              <span>Our HubSpot </span> Development Services
            </h2>
          </div>
        </div>
        <div className="row our-developer text-center align-items-center justify-content-center">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="our-dev-box">
                <div className="box-img mb-4">
                  <Image src={service.image} alt={service.alt} />
                </div>
                <div className="our-box-content">
                  <h5>
                    {service.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperBoundary;
