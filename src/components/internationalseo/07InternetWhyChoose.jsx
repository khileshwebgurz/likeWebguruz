import React from "react";
import cloud1 from "../../../public/images/smallbussinesimg/small-cloud-voice-2.webp";
import cloud4 from "../../../public/images/smallbussinesimg/small-cloud-02.webp";
import cloud5 from "../../../public/images/smallbussinesimg/small-cloud-06.webp";
import cloud6 from "../../../public/images/smallbussinesimg/small-cloud-3.webp";
import bigg from "../../../public/images/internationalseoimg/internet-service.webp";
import Image from "next/image";

const seoPoints = [
  {
    image: cloud1,
    alt: "cloud",
    text: "We’ve successfully managed international SEO campaigns for businesses of all sizes.",
  },
  {
    image: cloud5,
    alt: "cloud",
    text: "Our strategies are customized to meet the unique needs of your business and target market.",
  },
  {
    image: cloud6,
    alt: "cloud",
    text: "Our team of SEO experts stays updated with the latest global SEO trends and best practices.",
  },
  {
    image: cloud4,
    alt: "cloud",
    text: "From keyword research to performance tracking, we provide end-to-end international SEO services.",
  },
];

const InternetWhyChoose = () => {
  return (
    <div className="Smallbussinesseo-sec international-choice py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2>
              Why WebGuruz for <br />
              <span>International SEO Services?</span>
            </h2>
            <p>
              At WebGuruz, we believe in delivering results that matter. With
              years of experience and a client-focused approach, we help
              businesses achieve global success through intelligent
              international SEO strategies.
            </p>
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
              <Image src={bigg} alt="International SEO Agency" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetWhyChoose;
