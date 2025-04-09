import React from "react";
import Image from "next/image";

import features1 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat1.webp";
import features2 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat2.webp";
import features3 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat3.webp";
import features4 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat4.webp";
import features5 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat5.webp";
import features6 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat6.webp";
import features7 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat7.webp";
import features8 from "../../../public/images/hubspotcmsdevimg/cms-dev-feat8.webp";

const features = [
  {
    img: features1,
    title: "Drag-and-Drop Editor",
    alt: "Drag-and-Drop Editor Icon",
  },
  {
    img: features2,
    title: "SEO Recommendations",
    alt: "SEO Recommendations Icon",
  },
  {
    img: features3,
    title: "Mobile Optimization",
    alt: "Mobile Optimization Icon",
  },
  {
    img: features4,
    title: "Content Personalization",
    alt: "Content Personalization Icon",
  },
  { img: features5, title: "Robust Security", alt: "Robust Security Icon" },
  {
    img: features6,
    title: "Multi-Language Support",
    alt: "Multi-Language Support Icon",
  },
  {
    img: features7,
    title: "Customizable Templates",
    alt: "Customizable Templates Icon",
  },
  {
    img: features8,
    title: "Integration with HubSpot CRM",
    alt: "Integration with HubSpot CRM Icon",
  },
];

const CmsDevFeature = () => {
  return (
    <div className="feature-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-5">
              <span>Features that Streamline </span> Website Management & <br />
              Deliver Exceptional User Experiences
            </h2>
          </div>
        </div>
        <div className="row feature">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 text-center">
              <div className="feature-card">
                <div className="card-img">
                  <Image src={feature.img} alt={feature.alt} />
                </div>
                <div className="feature text">
                  <h6>{feature.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CmsDevFeature;
