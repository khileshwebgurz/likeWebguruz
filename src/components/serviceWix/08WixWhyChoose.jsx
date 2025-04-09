import React from "react";
import adds1 from "../../../public/images/wiximages/wix-xp-1.webp";
import adds2 from "../../../public/images/wiximages/wix-xp-2.webp";
import adds3 from "../../../public/images/wiximages/wix-xp-3.webp";
import adds4 from "../../../public/images/wiximages/wix-xp-4.webp";
import adds5 from "../../../public/images/wiximages/wix-xp-5.webp";
import Image from "next/image";
import Link from "next/link";

const WixWhyChoose = () => {
  const services = [
    {
      imgSrc: adds1,
      altText: "Award Icon",
      title: "Proven Experience",
      description:
        "With 10+ years of experience, we bring expertise to every Wix project.",
    },
    {
      imgSrc: adds2,
      altText: "Think Icon",
      title: "Certified Wix Experts",
      description:
        "Our team includes 50+ certified professionals skilled in Wix development.",
    },
    {
      imgSrc: adds3,
      altText: "Setting Icon",
      title: "Customized Solutions",
      description:
        "We create tailored Wix websites to match your business objectives.",
    },
    {
      imgSrc: adds4,
      altText: "Investment Icon",
      title: "Affordable Pricing",
      description:
        "We offer cost-effective solutions without compromising on quality.",
    },
    {
      imgSrc: adds5,
      altText: "Data Security Icon",
      title: "Excellent Support",
      description:
        "Our 24/7 support team ensures your website runs smoothly at all times.",
    },
  ];

  return (
    <div className="wix-choose-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Why Choose WebGuruz Technologies</span> Pvt Ltd for Wix
              Development?
            </h2>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="wix-choose-card">
                <div className="img-card">
                  <Image src={service.imgSrc} alt={service.altText} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row our-btn-group">
          <div className=" benifit-cta ">
            <Link href="/contact-us" className="explore-btn partner-btn">
              Partner With Us
            </Link>
            <Link
              href="/services/wix-development/wix-maintenance-package"
              className="explore-btn wix-btn"
            >
              Maintenance Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WixWhyChoose;
