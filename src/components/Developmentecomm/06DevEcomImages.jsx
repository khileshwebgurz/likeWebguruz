"use client";
import Image from "next/image";
import process1 from "../../../public/images/devecomerceimg/ecom-img-sec-1.webp";
import process2 from "../../../public/images/devecomerceimg/ecom-img-sec-2.webp";
import process3 from "../../../public/images/devecomerceimg/ecom-img-sec-3.webp";
import process4 from "../../../public/images/devecomerceimg/ecom-img-sec-4.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DevEcomImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(activeIndex);
  };

  const shopifyCards = [
    {
      title: "Consultation & Requirements Gathering",
      img:process1,
      alt:"Consultation & Requirements Gathering",
      description:
        "This phase involves in-depth discussions with your team to gather essential details about your target audience, products, and goals. We then tailor a strategy that aligns with your vision and sets the foundation for a successful eCommerce website.  ",
    },
    {
      title: "Design & Development",
      img:process2,
      alt:"Design and Development",
      description:
        "Our design team ensures that the visual elements are user-friendly, aesthetically appealing, and conversion-driven, while our development team builds a seamless, secure, and scalable website using the latest technologies to meet your business needs.",
   
    },
    {
      title: "Testing & QA",
      img:process3,
      alt:"Testing and QA",
      description:
        "This phase includes thorough functional, usability, and performance testing to guarantee that the website provides a flawless user experience, performs well under load, and meets all industry standards for security and accessibility.",
   
    },
    {
      title: "Launch & Ongoing Support",
      img:process4,
      alt:"Launch and Ongoing Support",
      description:
        "We provide continuous maintenance and support to ensure your store stays up-to-date and performs at its best. We monitor website performance, conduct regular updates, and address any technical issues, ensuring that your site remains secure, functional, and competitive in an ever-changing market.",
    
    },
  ];

  return (
    <div className="Shopifysolution-section ecommerce-process-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> eCommerce Development Process</span>
            </h2>
            <p>
              Our proven process ensures the successful creation and launch of
              your online store, step-by-step.
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
                  <Image src={card.img} alt={card.alt} />
                  <div className="shopifyServiceProcess">
                    <div className="shopifyProcess-one">
                      <h3 className="shopifyProcess">{card.title}</h3>
                      <p>{card.description}</p>
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

export default DevEcomImages;
