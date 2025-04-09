import React from "react";
import Image from "next/image";
import Program1 from "../../../public/images/whiteseoimg/white-service-1.webp";
import Program2 from "../../../public/images/whiteseoimg/white-service-2.webp";
import Program3 from "../../../public/images/whiteseoimg/white-service-3.webp";
import Program4 from "../../../public/images/whiteseoimg/white-service-4.webp";

const WhiteSeoBenefits = () => {
  const programs = [
    { image: Program1, title: "Digital <br/> Agencies", alt: "Digital Agencies" },
    { image: Program2, title: "Local <br/> Businesses", alt: "Local Businesses" },
    { image: Program3, title: "E-commerce <br/> Stores", alt: "E-commerce Stores" },
    { image: Program4, title: "Content Creators & <br/> Bloggers", alt: "Content Creators" },
  ];

  return (
    <div className="Webguruzprogram-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Who Can Benefit from <span>White Label SEO?</span>
            </h2>
            <p>
              White label SEO services are perfect for a variety of businesses,
              including:
            </p>
          </div>
          {programs.map((program, index) => (
            <div
              className="col-lg-3 col-md-6 mb-4 mb-lg-0 col-12"
              key={index}
            >
              <div className="program-card">
                <Image src={program.image} alt={program.alt} />
                <h4 dangerouslySetInnerHTML={{ __html: program.title }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteSeoBenefits;
