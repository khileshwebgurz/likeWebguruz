"use client";
import Image from "next/image";
import React, { useState } from "react";
import Android1 from "../../../public/images/magentoimg/magento-sub-1.webp";
import Android2 from "../../../public/images/magentoimg/magento-sub-2.webp";
import Android3 from "../../../public/images/magentoimg/magento-sub-3.webp";
import Android4 from "../../../public/images/magentoimg/magento-sub-4.webp";
import Android5 from "../../../public/images/magentoimg/magento-sub-5.webp";

const solutionData = [
  {
    id: 1,
    heading: "eCommerce Websites",
    imageSrc: Android1,
    alt:"eCommerce Websites Icon",
    content:
      "Our team focuses on creating a seamless shopping experience with optimized navigation, secure payment gateways, and intuitive design. From small businesses to large enterprises, we ensure your store is scalable, high-performing, and equipped to drive conversions.",
    relatedItems: [
      "Custom themes",
      "Integrated payment gateways",
      "Scalable architecture",
    ],
  },
  {
    id: 2,
    heading: "B2B eCommerce Solutions",
    imageSrc: Android2,
    alt:"B2B eCommerce Solutions Icon",
    content:
      "We specialize in developing Magento-powered B2B solutions with features such as bulk ordering capabilities, custom pricing models, role-based access controls, and integrated ERP systems. These solutions are tailored to streamline your workflows, enhance customer satisfaction, and scale your operations effortlessly.",
    relatedItems: [
      "Role-based access",
      "Bulk ordering capabilities",
      "Advanced analytics",
    ],
  },
  {
    id: 3,
    heading: "Marketplace Development",
    imageSrc: Android3,
    alt:"Marketplace Development Icon",
    content:
      "Our team creates platforms equipped with features like vendor management systems, commission models, product reviews, and advanced search functionalities. We ensure your marketplace is designed to attract vendors and shoppers alike, with a user-friendly interface and scalable architecture to handle high traffic and transactions seamlessly.",
    relatedItems: [
      "Vendor management tools",
      "Commission structures",
      "Mobile compatibility",
    ],
  },
  {
    id: 4,
    heading: "Magento Mobile Apps",
    imageSrc: Android4,
    alt:"Magento Mobile Apps Icon",
    content:
      "Our team designs and develops mobile apps with intuitive user interfaces, integrated push notifications, secure payment options, and multi-platform compatibility. These apps are built to enhance user engagement, increase sales, and provide your customers with the convenience of shopping on the go.",
    relatedItems: [
      "Intuitive UX design",
      "Push notifications",
      "Multi-platform compatibility",
    ],
  },
  {
    id: 5,
    heading: "Subscription Services",
    imageSrc: Android5,
    alt:"Subscription Services Icon",
    content:
      "Our services include automated billing systems, user-friendly customer portals, and flexible subscription plan management. Whether you’re offering subscription boxes, software-as-a-service (SaaS), or recurring memberships, we ensure a smooth, secure, and hassle-free experience for your customers while maximizing your business potential.",
    relatedItems: [
      "Automated billing",
      "Customer portals",
      "Flexible subscription plans",
    ],
  },
];

const DevMagentoSolution = () => {
  const [activeSolution, setActiveSolution] = useState(solutionData[0]);

  return (
    <section className="magento-dev-solution py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 text-center heading-main mb-4">
            <h2 className="mb-3">
              <span>Magento Solutions</span> We Can Help Develop
            </h2>
            <p>
              Empowering your business with tailored Magento solutions, designed
              and executed with precision to meet your unique eCommerce needs
              and drive sustainable growth.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="main-magento">
              {solutionData.map((solution) => (
                <div
                  key={solution.id}
                  className={`magento-solutions-left ${
                    activeSolution.id === solution.id ? "active" : ""
                  }`}
                  onClick={() => setActiveSolution(solution)}
                >
                  <div className="mag-solution-icon">
                    <Image src={solution.imageSrc} alt={solution.alt} />
                    <div className="icon-text">
                      <h4 className="mag-solution-controls">
                        {solution.heading}
                      </h4>
                      <p>{solution.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="dynamic-solutions">
              <div className="dynamic-img">
                <Image
                  src={activeSolution.imageSrc}
                  alt={activeSolution.heading}
                />
                <h4 className="dynamic-heading">{activeSolution.heading}</h4>
              </div>
              <p className="dynamic-content">{activeSolution.content}</p>
              <ul className="related-items">
                {activeSolution.relatedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevMagentoSolution;
