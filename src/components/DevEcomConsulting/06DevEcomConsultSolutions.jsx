import React from "react";
import Image from "next/image";

import star1 from "../../../public/images/ecommerceconstimg/consult-chart-1.webp";
import star2 from "../../../public/images/ecommerceconstimg/consult-chart-2.webp";
import star3 from "../../../public/images/ecommerceconstimg/consult-chart-3.webp";
import star4 from "../../../public/images/ecommerceconstimg/consult-chart-4.webp";
import star5 from "../../../public/images/ecommerceconstimg/consult-chart-5.webp";
import star6 from "../../../public/images/ecommerceconstimg/consult-chart-6.webp";
import star7 from "../../../public/images/ecommerceconstimg/consult-chart-7.webp";
import star8 from "../../../public/images/ecommerceconstimg/consult-chart-8.webp";
import star9 from "../../../public/images/ecommerceconstimg/consult-chart-9.webp";

const solutions = [
  {
    id: 1,
    image: star1,
    title: "Market Research & Analysis",
    alt: "Market Research and Analysis Icon",
  },
  {
    id: 2,
    image: star2,
    title: "Conversion Rate Optimization",
    alt: "Conversion Rate Optimization Icon",
  },
  {
    id: 3,
    image: star3,
    title: "Personalized Product Recommendations",
    alt: "Personalized Product Recommendations Icon",
  },
  {
    id: 4,
    image: star4,
    title: "Digital Marketing Consultation",
    alt: "Digital Marketing Consultation Icon",
  },
  {
    id: 5,
    image: star5,
    title: "Brand Development & Positioning",
    alt: "Brand Development & Positioning Icon",
  },
  {
    id: 6,
    image: star6,
    title: "Omnichannel Integration",
    alt: "Omnichannel Integration Icon",
  },
  {
    id: 7,
    image: star7,
    title: "Supply Chain Optimization",
    alt: "Supply Chain Optimization Icon",
  },
  {
    id: 8,
    image: star8,
    title: "Customer Retention Strategies",
    alt: "Customer Retention Strategies Icon",
  },
  {
    id: 9,
    image: star9,
    title: "Website Performance Optimization",
    alt: "Website Performance Optimization Icon",
  },
];

const DevEcomConsultSolutions = () => {
  return (
    <div className="Ecomsolution-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-5">
            <h2>
              Other <span>eCommerce Consulting Solutions </span>
            </h2>
            <p>
              Comprehensive consulting solutions to address every aspect of your
              eCommerce journey, from market research and brand development to
              customer retention and supply chain optimization.
            </p>
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

export default DevEcomConsultSolutions;
