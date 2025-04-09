import React from "react";
import Image from "next/image";
import Certi from "../../../public/images/Seo-PackageImages/certi.svg";
import Data from "../../../public/images/Seo-PackageImages/data.svg";
import Custo from "../../../public/images/Seo-PackageImages/customize.svg";
import Trans from "../../../public/images/Seo-PackageImages/Transparent.svg";

const seoFeatures = [
  {
    id: 1,
    img: Certi,
    alt: "SEO Professionals Icon",
    title: "Certified SEO Professionals",
    description: "Our team includes Google-certified SEO specialists with proven track records in improving rankings.",
    className: "yellow",
  },
  {
    id: 2,
    img: Data,
    alt: "Data-Driven Approach Icon",
    title: "Data-Driven Approach",
    description: "We analyze and interpret vast data sets to create strategies that deliver measurable results.",
    className: "two-choose",
  },
  {
    id: 3,
    img: Custo,
    alt: "Customized Strategies Icon",
    title: "Customized Strategies",
    description: "We understand every business is unique and provide personalized SEO solutions accordingly.",
    className: "",
  },
  {
    id: 4,
    img: Trans,
    alt: "Transparent Reporting Icon",
    title: "Transparent Reporting",
    description: "Monthly detailed reports help you see the progress and understand where your investment is going.",
    className: "yellow reporting",
  },
];

const SeoWhyHire = () => {
  return (
    <div className="why_hire-section pt-5 pb-0 pb-md-5 inner-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 heading-main text-left mb-4 mb-lg-0">
            <h2 className="mb-3">
              Why Hire SEO Experts at <br />
              <span>WebGuruz ?</span>
            </h2>
            <p>
              With WebGuruz, you&apos;re not just hiring an SEO agency; you&apos;re
              partnering with a team that cares about your success. Our SEO
              experts have years of hands-on experience, staying updated with
              the latest trends and algorithms to provide you with
              industry-leading expertise. We build strategies tailored to your
              unique business needs, giving you a competitive edge.
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

export default SeoWhyHire;
