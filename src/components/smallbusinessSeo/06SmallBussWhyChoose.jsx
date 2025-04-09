import React from "react";
import cloud1 from "../../../public/images/smallbussinesimg/small-cloud-voice-2.webp";
import cloud2 from "../../../public/images/smallbussinesimg/small-cloud-08.webp";
import cloud3 from "../../../public/images/smallbussinesimg/small-cloud-07.webp";
import cloud4 from "../../../public/images/smallbussinesimg/small-cloud-05.webp";
import cloud5 from "../../../public/images/smallbussinesimg/small-cloud-06.webp";
import cloud6 from "../../../public/images/smallbussinesimg/small-cloud-04.webp";
import bigg from "../../../public/images/smallbussinesimg/small-bussiness-idea.webp";
import Image from "next/image";

const seoPoints = [
  {
    image: cloud1,
    alt: "cloud",
    text: "We provide SEO strategies tailored to your unique business needs, ensuring maximum effectiveness.",
  },
  {
    image: cloud2,
    alt: "cloud",
    text: "Our SEO services are cost-effective, and designed to fit small business budgets without compromising on quality.",
  },
  {
    image: cloud3,
    alt: "cloud",
    text: "Our track record of successful SEO projects speaks for itself, with clients seeing real improvements in website traffic and conversions.",
  },
  {
    image: cloud4,
    alt: "cloud",
    text: "We offer continuous monitoring and optimization to ensure your SEO strategy evolves with changing search engine algorithms and trends.",
  },
  {
    image: cloud6,
    alt: "cloud",
    text: "Our SEO strategies are tailored specifically for your business needs, ensuring you get the best results within your budget.",
  },
  {
    image: cloud5,
    alt: "cloud",
    text: "We focus on driving targeted traffic, improving your website’s visibility, and helping you achieve measurable results.",
  },
];

const SmallBussWhyChoose = () => {
  return (
    <div className="Smallbussinesseo-sec py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2>
              Why Choose Small Business SEO Services <br />
              <span>at WebGuruz?</span>
            </h2>
            <ul className="small-seo-list">
              {seoPoints.map((point, index) => (
                <li key={index}>
                  <span>
                    <Image src={point.image} alt={point.alt} />
                  </span>
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 col-12">
            <div className="bussiness-seo-img">
              <Image src={bigg} alt="Small Business SEO Agency" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBussWhyChoose;
