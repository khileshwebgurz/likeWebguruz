import React from "react";
import Image from "next/image";
import dev1 from "../../../public/images/EcommerceImplementimg/design-accnt-1.webp";
import dev2 from "../../../public/images/EcommerceImplementimg/design-accnt-2.webp";
import dev3 from "../../../public/images/EcommerceImplementimg/design-accnt-3.webp";
import dev4 from "../../../public/images/EcommerceImplementimg/design-accnt-4.webp";

const benefits = [
  {
    image: dev1,
    title: "Increased Efficiency",
    alt:"Increased Efficiency Icon",
    description:
      "Our eCommerce implementation services are designed to optimize your workflows, eliminating inefficiencies and reducing operational bottlenecks. By integrating advanced automation tools and streamlining repetitive tasks, your team can focus on core business activities.",
  },
  {
    image: dev2,
    title: "Revenue Growth",
    alt:"Revenue Growth Icon",
    description:
      "Experience a significant boost in sales with a well-implemented eCommerce platform. By enhancing user experience through intuitive designs, faster page loads, and seamless navigation, we help your business attract and convert more customers.",
  },
  {
    image: dev3,
    title: "Market Expansion",
    alt:"Market Expansion Icon",
    description:
      "With our eCommerce implementation, your business can break into new markets and tap into a global audience. Robust platform integrations and multi-channel sales strategies enable you to sell across diverse regions and platforms.",
  },
  {
    image: dev4,
    title: "Customer Retention",
    alt:"Customer Retention Icon",
    description:
      "Building lasting relationships with your customers is key to sustainable growth. Our implementation services include advanced personalization tools that deliver tailored experiences to your audience.",
  },
];

const ImplementEcoSolution = () => {
  return (
    <div className="Designservices-section Develpomentservices implement-eco-sol py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              Benefits of <span>eCommerce Implementation</span>
            </h2>
            <p>
              Our eCommerce implementation offers tangible, long-term benefits
              for your business.
            </p>
          </div>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className="design-services-one">
                <div className="dev-img">
                  <Image src={benefit.image} alt={benefit.alt} />
                </div>
                <div className="design-text">
                  <h5>{benefit.title}</h5>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementEcoSolution;
