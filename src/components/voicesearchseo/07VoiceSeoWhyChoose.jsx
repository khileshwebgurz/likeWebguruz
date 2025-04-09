import React from "react";
import cloud1 from "../../../public/images/smallbussinesimg/small-cloud-09.webp";
import cloud2 from "../../../public/images/smallbussinesimg/small-cloud-2.webp";
import cloud3 from "../../../public/images/smallbussinesimg/small-cloud-3.webp";
import cloud4 from "../../../public/images/smallbussinesimg/small-cloud-02.webp";
import cloud5 from "../../../public/images/smallbussinesimg/small-cloud-03.webp";
import bigg from "../../../public/images/voicesearchimg/voice-optimize.webp";
import Image from "next/image";

const VoiceSeoWhyChoose = () => {
  const seoFeatures = [
    {
      image: cloud3,
      text: "Our specialists have extensive experience in SEO and voice search trends, ensuring top-quality optimization services."
    },
    {
      image: cloud1,
      text: "We design custom solutions based on your business needs and target audience."
    },
    {
      image: cloud4,
      text: "We’ve helped numerous clients achieve higher rankings and increased traffic through voice search optimization."
    },
    {
      image: cloud5,
      text: "From analysis to implementation, we provide end-to-end support to ensure your success."
    }
  ];

  return (
    <div className="Smallbussinesseo-sec voice-seo-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-3">
              Why WebGuruz for <br />
              <span>Voice Search Optimization?</span>
            </h2>
            <p>
              Partnering with WebGuruz means leveraging the latest technology
              and expertise to prepare your business for the future of search.
              Let us help you stay ahead in this dynamic digital landscape.
            </p>
            <ul className="small-seo-list">
              {seoFeatures.map((feature, index) => (
                <li key={index}>
                  <span>
                    <Image src={feature.image} alt="cloud" />
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="bussiness-seo-img">
              <Image src={bigg} alt="Voice Search Optimization" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSeoWhyChoose;
