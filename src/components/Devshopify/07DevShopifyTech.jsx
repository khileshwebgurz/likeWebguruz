"use client";
import Image from "next/image";
import process1 from "../../../public/images/shopifydevlpomentimg/shop-image-1.webp";
import process2 from "../../../public/images/shopifydevlpomentimg/shop-image-2.webp";
import process3 from "../../../public/images/shopifydevlpomentimg/shop-image-3.webp";
import process4 from "../../../public/images/shopifydevlpomentimg/shop-image-4.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DevShopifyTech = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(activeIndex);
  };

  const shopifyCards = [
    {
      title: "Expert Guidance",
      img: process1,
      alt:"Expert Guidance",
      description:
        "Our team of certified Shopify developers brings a wealth of experience and technical expertise to every project, ensuring your store is built to the highest standards. They stay updated with the latest platform advancements to provide innovative and reliable solutions.",
      activities: ["Customized solutions.", "Best practices for e-commerce."],
      deliverables: [
        "Access to advanced tools.",
        "Dedicated project management.",
      ],
    },
    {
      title: "Time and Cost Efficiency",
      img: process2,
      alt:"Time and Cost Efficiency",
      description:
        "Save valuable resources through our streamlined processes, which reduce development time and operational costs. By avoiding common pitfalls and delivering solutions right the first time, we help you achieve faster launches and long-term cost savings.",
      activities: ["Faster development.", "Reduced overheads."],
      deliverables: ["Avoid costly errors.", "Comprehensive support."],
    },
    {
      title: "Requirement Assessment",
      img: process3,
      alt:"Requirement Assessment",
      description:
        "Initiating the process with a comprehensive understanding of your vision. We delve into your business objectives, market trends, and target audience to ensure a bespoke strategy tailored for success.",
      activities: ["Seamless integrations.", "Advanced analytics."],
      deliverables: ["Custom plugins.", "Future-ready designs."],
    },
    {
      title: "Reliable Support",
      img: process4,
      alt:"Reliable Support",
      description:
        "We ensure your store operates smoothly with a robust support system designed to address your needs quickly and effectively.",
      activities: ["24/7 support.", "Proactive maintenance."],
      deliverables: ["Quick issue resolution.", "Regular updates."],
    },
  ];

  return (
    <div className="Shopifysolution-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Benefits of Hiring a{" "}
              <span> Shopify Website Development Company</span>
            </h2>
            <p>
              Leverage the wealth of expertise and knowledge for your ecommerce
              business’s success.
            </p>
          </div>
          <div className="col-12 shopify">
            <div className="shopify-solution-main">
              {shopifyCards.map((card, index) => (
                <div
                  key={index}
                  className={`shopify-card-one ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="shopify-arrow">
                    <FontAwesomeIcon icon={faChevronLeft} height={20} />
                    <FontAwesomeIcon icon={faChevronRight} height={20} />
                  </div>
                  <Image src={card.img} alt="process-img" />
                  <div className="shopifyServiceProcess">
                    <div className="shopifyProcess-one">
                      <h3 className="shopifyProcess">{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                    <div className="shopifyProcess-two">
                      <div className="shopifyProcess-list">
                        <ul>
                          {card.activities.map((activity, i) => (
                            <li key={i}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="shopifyProcess-list">
                        <ul>
                          {card.deliverables.map((deliverable, i) => (
                            <li key={i}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="shopify-span">{card.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevShopifyTech;
