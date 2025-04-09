import React from "react";
import Image from "next/image";

import features1 from "../../../public/images/graphmotionimg/graph-data-1.png";
import features2 from "../../../public/images/graphmotionimg/graph-data-2.png";
import features3 from "../../../public/images/graphmotionimg/graph-data-3.png";
import features4 from "../../../public/images/graphmotionimg/graph-data-4.png";
import features5 from "../../../public/images/graphmotionimg/graph-data-5.png";
import features6 from "../../../public/images/graphmotionimg/graph-data-6.png";

const features = [
  {
    img: features1,
    title: "Expertise in Visual Storytelling",
    alt: "Drag-and-Drop Editor Icon",
  },
  {
    img: features2,
    title: "Access to Cutting-Edge Tools & Technology",
    alt: "SEO Recommendations Icon",
  },
  {
    img: features3,
    title: "Time & Cost Savings",
    alt: "Mobile Optimization Icon",
  },
  {
    img: features4,
    title: "High-Quality, Custom Designs",
    alt: "Content Personalization Icon",
  },
  {
    img: features5,
    title: "Scalability & Flexibility",
    alt: "Robust Security Icon",
  },
  {
    img: features6,
    title: "SEO-Optimized Graphics for Better Online Visibility",
    alt: "Multi-Language Support Icon",
  },
];

const ConstInfoSearch = () => {
  return (
    <div className="infographic-search-end py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Why Work with <span> a Graphic Agency?</span>
            </h2>
            <p className="mb-5">
              Working with an expert graphic design agency like WebGuruz ensures
              your visuals are professional, polished, and impactful, helping
              you make a lasting impression on your audience. A specialized
              agency brings together a team of skilled designers, animators, and
              strategists who understand the latest design trends, industry
              standards, and storytelling techniques.
            </p>
          </div>
        </div>
        <div className="row feature">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 col-sm-6 text-center">
              <div className="motion-search-card">
                <div className="card-img">
                  <Image src={feature.img} alt={feature.alt} />
                </div>
                <div className="feature-text">
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

export default ConstInfoSearch;
