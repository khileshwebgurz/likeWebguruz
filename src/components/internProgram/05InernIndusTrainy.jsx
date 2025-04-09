import React from "react";
import Image from "next/image";
import management1 from "../../../public/images/internproimg/intern-value-1.webp";
import management2 from "../../../public/images/internproimg/intern-value-2.webp";
import management3 from "../../../public/images/internproimg/intern-value-3.webp";
import management4 from "../../../public/images/internproimg/intern-value-4.webp";
import management5 from "../../../public/images/internproimg/intern-value-5.webp";
import management6 from "../../../public/images/internproimg/intern-value-6.webp";

const InernIndusTrainy = () => {
  const domains = [
    {
      image: management1,
      title: "Digital Marketing",
      description:
        "Learn SEO, social media marketing, content creation, and more.",
    },
    {
      image: management2,
      title: "Mobile App Development (iOS/Android)",
      description:
        "Gain expertise in app development for leading mobile platforms.",
    },
    {
      image: management3,
      title: "UI/UX & Graphic Design",
      description:
        "Master design tools and principles for creating stunning user interfaces and experiences.",
    },
    {
      image: management4,
      title: "Website Development",
      description:
        "Learn how to build and maintain websites using modern technologies.",
    },
    {
      image: management5,
      title: "Web Design",
      description:
        "Focus on designing engaging websites with a strong visual appeal.",
    },
    {
      image: management6,
      title: "Quality Testing",
      description:
        "Understand how to ensure quality through manual and automated testing methods.",
    },
  ];

  return (
    <div className="caree-opportunity-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              <span>Domains </span> We Cover
            </h2>
            <p className="my-3">
              Our 3 months internship program in Mohali/Chandigarh offers many
              benefits that make it stand out from the rest. It is <br />
              designed to cover a wide range of industry domains to help you
              stay ahead. We specialize in the following areas:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="grid-wrap-career text-center">
            {domains.map((domain, index) => (
              <div className="card-career-wrap" key={index}>
                <Image src={domain.image} alt={`${domain.title} Icon`} />
                <h5>{domain.title}</h5>
                <p>{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InernIndusTrainy;
