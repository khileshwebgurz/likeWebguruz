import Image from "next/image";
import earnings from "../../../public/images/serviceImages/earning.webp";
import conversion from "../../../public/images/serviceImages/conversion.webp";
import competitor from "../../../public/images/serviceImages/competitors.webp";
import businessaudit from "../../../public/images/serviceImages/business-audit.webp";
import roi from "../../../public/images/serviceImages/roi.webp";
import reatltime from "../../../public/images/serviceImages/real-time.webp";

const sections = [
  {
    image: earnings,
    alt: "Proven Expertise Icon",
    title: "Proven Expertise",
    description:
      "With 16+ years of experience in the digital marketing industry, we have a proven track record of success.",
  },
  {
    image: conversion,
    alt: "Data-Driven Approach Icon",
    title: "Data-Driven Approach",
    description:
      "We use data-driven insights to optimize your campaigns and achieve measurable results.",
  },
  {
    image: competitor,
    alt: "Transparent Communication Icon",
    title: "Transparent Communication",
    description:
      "We maintain open and transparent communication throughout the process.",
  },
  {
    image: businessaudit,
    alt: "Customized Solutions Icon",
    title: "Customized Solutions",
    description:
      "We tailor our digital marketing strategies to meet your unique business needs.",
  },
  {
    image: roi,
    alt: "Dedicated Team Icon",
    title: "Dedicated Team",
    description:
      "Our team of experienced digital marketing professionals is committed to your success.",
  },
  {
    image: reatltime,
    alt: "Affordable Pricing Icon",
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing without compromising on the quality of services we provide.",
  },
];

const WhyChoose = () => {
  return (
    <section className="whychoose py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h2 className="mb-5">
              Why Choose <span>WebGuruz?</span>
              </h2>
            </div>

            <div className="earntraffic">
              {sections.map((section, index) => (
                <div key={index} className="earntrafficinr">
                  <div className="earntrfimg">
                    <Image
                      src={section.image}
                      className="img-fluid"
                      alt={section.alt}
                    />
                  </div>
                  <div className="earntrfcnt">
                    <h3 className="mt-3">{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
