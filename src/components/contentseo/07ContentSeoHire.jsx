import React from "react";
import Proven from "../../../public/images/contentseoimgages/expertise.webp";
import HighQuality from "../../../public/images/contentseoimgages/high-quality.webp";
import Support from "../../../public/images/contentseoimgages/support.webp";
import Delivery from "../../../public/images/contentseoimgages/delivery.webp";
import Strategies from "../../../public/images/contentseoimgages/customized.webp";
import Image from "next/image";

const ContentSeoHire = () => {
  const items = [
    {
      image: Proven,
      alt: "Proven Expertise Icon",
      title: "Proven\n Expertise",
    },
    {
      image: HighQuality,
      alt: "High Quality Icon",
      title: "High\n Quality",
    },
    {
      image: Support,
      alt: "Exceptional Support Icon",
      title: "Exceptional\n Support",
    },
    {
      image: Strategies,
      alt: "Custom Strategies Icon",
      title: "Custom\n Strategies",
    },
    {
      image: Delivery,
      alt: "Timely Delivery Icon",
      title: "Timely\n Delivery",
    },
  ];

  // Function to replace `\n` with <br /> for line breaks
  const renderTitle = (title) => {
    return title.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < title.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="Hireseocontent py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Hire Us for <span>SEO content writing?</span>
            </h2>
            <p>
              Our team delivers exceptional results, ensuring your content meets
              your goals.
            </p>
          </div>
        </div>
        <div className="row hire-seo-new">
          {items.map((item, index) => (
            <div key={index} className="col-md col-12">
              <div className="why-hire-seo-content">
                <div className="hire-img">
                  <Image
                    src={item.image}
                    className="checkicon"
                    alt={item.alt}
                  />
                </div>
                <h5>{renderTitle(item.title)}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSeoHire;
