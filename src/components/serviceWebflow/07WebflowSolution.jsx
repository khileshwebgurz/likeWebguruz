import React from "react";
import Image from "next/image";

import star1 from "../../../public/images/webflowwimages/flow-lock-1.webp";
import star2 from "../../../public/images/webflowwimages/flow-lock-2.webp";
import star3 from "../../../public/images/webflowwimages/flow-lock-3.webp";
import star4 from "../../../public/images/webflowwimages/flow-lock-4.webp";
import star5 from "../../../public/images/webflowwimages/flow-lock-5.webp";
import star6 from "../../../public/images/webflowwimages/flow-lock-6.webp";
import star7 from "../../../public/images/webflowwimages/flow-lock-7.webp";
import star8 from "../../../public/images/webflowwimages/flow-lock-8.webp";
import star9 from "../../../public/images/webflowwimages/flow-lock-9.webp";
import star10 from "../../../public/images/webflowwimages/flow-lock-10.webp";
import star11 from "../../../public/images/webflowwimages/flow-lock-11.webp";
import star12 from "../../../public/images/webflowwimages/flow-lock-12.webp";

const solutions = [
  {
    id: 1,
    image: star1,
    title: "Custom Webflow solutions tailored to your business.",
    alt: "Setting Icon",
  },
  {
    id: 2,
    image: star2,
    title: "Secure, scalable, and future-proof web solutions.",
    alt: "Lock Icon",
  },
  {
    id: 3,
    image: star3,
    title: "24/7 technical support & maintenance.",
    alt: "24/7 Backup Icon",
  },
  {
    id: 4,
    image: star4,
    title: "Mobile-first, fully responsive website designs.",
    alt: "PC Icon",
  },
  {
    id: 5,
    image: star5,
    title: "Seamless third-party integrations.",
    alt: "Setting Icon",
  },
  {
    id: 6,
    image: star6,
    title: "Webflow training for your team post-development.",
    alt: "Testimonials Icon",
  },
  {
    id: 7,
    image: star7,
    title: "SEO-optimized websites for higher search rankings.",
    alt: "SEO Icon",
  },
  {
    id: 8,
    image: star8,
    title: "Dedicated Webflow developers & expert support.",
    alt: "Customer service Icon",
  },
  {
    id: 9,
    image: star9,
    title: "Compliance with the latest web standards & best practices.",
    alt: "Testimonials Icon",
  },
  {
    id: 10,
    image: star10,
    title: "Lightning-fast website speed & performance.",
    alt: "Security Icon",
  },
  {
    id: 11,
    image: star11,
    title: "Transparent pricing with no hidden costs.",
    alt: "Data Icon",
  },
  {
    id: 12,
    image: star12,
    title: "Fast project turnaround time.",
    alt: "Arrow Icon",
  },
];

const WebflowSolutiom = () => {
  return (
    <div className="webflow-solutions py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-5">
            <h2 className="mb-2"> 
            <span> USPs of Our   WebFlow  </span> Web Development Services 
            </h2>
            
          </div>

          {solutions.map((solution) => (
            <div key={solution.id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="Ecomsolution-one">
                <div className="eEcomsolution-main">
                  <div className="img-one">
                    <Image src={solution.image} alt={solution.alt} />
                  </div>
                  <div className="const-text">
                    <h5>{solution.title}</h5>
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

export default WebflowSolutiom;
