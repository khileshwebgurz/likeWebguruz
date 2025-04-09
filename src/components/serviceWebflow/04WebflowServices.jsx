"use client";
import Image from "next/image";
import React, { useState } from "react";
import cancel from "../../../public/images/webflowwimages/cancel-icon.svg";
import icon1 from "../../../public/images/webflowwimages/flow-web-1.webp";
import icon2 from "../../../public/images/webflowwimages/flow-web-2.webp";
import icon3 from "../../../public/images/webflowwimages/flow-web-3.webp";
import icon4 from "../../../public/images/webflowwimages/flow-web-4.webp";
import icon5 from "../../../public/images/webflowwimages/flow-web-5.webp";
import icon6 from "../../../public/images/webflowwimages/flow-web-6.webp";
import Link from "next/link";

const WebflowServices = () => {
  const [activeIndexes, setActiveIndexes] = useState(Array(6).fill(false));

  const toggleActive = (index) => {
    setActiveIndexes((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const services = [
    {
      icon: icon1,
      title: "Custom Webflow Website Development",
      description:
        "We design and develop bespoke Webflow websites that align with your brand and business objectives.",
    },
    {
      icon: icon2,
      title: "Webflow eCommerce Development",
      description:
        "Build a powerful online store with seamless payment integration, inventory management, and an engaging user experience.",
    },
    {
      icon: icon3,
      title: "Webflow CMS Development",
      description:
        "Easily manage and update your website content with Webflow’s intuitive content management system.",
    },
    {
      icon: icon4,
      title: "Webflow SEO Optimization",
      description:
        "Enhance your website’s visibility with our Webflow SEO services, ensuring higher rankings and increased traffic.",
    },
    {
      icon: icon5,
      title: "Webflow Migration Services",
      description:
        "Migrate your existing website to Webflow seamlessly, ensuring zero downtime and data security.",
    },
    {
      icon: icon6,
      title: "Webflow Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly with our expert Webflow support services.",
    },
  ];

  return (
    <section className="webflow-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2 className="mb-2">
              Our Webflow <span> Web Development Services</span>
            </h2>
            <p>
              We offer a full range of Webflow services to help businesses
              establish a strong digital presence.
            </p>
          </div>

          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div
                className={`webflow-service-inner ${
                  activeIndexes[index] ? "active" : ""
                }`}
              >
                <div
                  className="service-close-icon"
                  onClick={() => toggleActive(index)}
                >
                  <Image src={cancel} alt="close icon" />
                </div>

                {activeIndexes[index] ? (
                  /** Show this when active */
                  <div className="webflow-inner-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ) : (
                  /** Default view when not active */
                  <div className="webflow-service-content">
                    <div className="webflow-service-icon">
                      <Image src={service.icon} alt="Square Background Image" />
                    </div>
                    <div className="webflow-service-heading">
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebflowServices;
