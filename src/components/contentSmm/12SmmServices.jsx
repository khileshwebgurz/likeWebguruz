import React from "react";
import agency1 from "../../../public/images/Socialmediaimg/smm-time-1.png";
import agency2 from "../../../public/images/Socialmediaimg/smm-time-2.png";
import agency3 from "../../../public/images/Socialmediaimg/smm-time-3.png";
import agency4 from "../../../public/images/Socialmediaimg/smm-time-4.png";
import agency5 from "../../../public/images/Socialmediaimg/smm-time-5.png";
import agency6 from "../../../public/images/Socialmediaimg/smm-time-6.png";
import agency7 from "../../../public/images/Socialmediaimg/smm-time-7.png";
import agency8 from "../../../public/images/Socialmediaimg/smm-time-8.png";
import Image from "next/image";

const cardData = [
  {
    image: agency1,
    title: "Professional Expertise",
    alt: "Professional Expertise Icon",
    description:
      "Gain access to a dedicated team of social media specialists who live and breathe digital marketing. Our professionals stay ahead of the latest trends, platform algorithm changes, and emerging technologies, ensuring your social media strategy is always innovative, relevant, and effective.",
  },
  {
    image: agency2,
    title: "Time and Resource Optimization",
    alt: "Time and Resource Optimization Icon",
    description:
      "Free up your internal team to focus on core business activities while our experts handle the complex, time-consuming aspects of social media management. This allows for improved operational efficiency and productivity.",
  },
  {
    image: agency3,
    title: "Advanced Technological Resources",
    alt: "Advanced Technological Resources Icon",
    description:
      "Benefit from enterprise-grade social media management tools, analytics platforms, and creative technologies that are typically unavailable or cost-prohibitive for individual businesses. We invest in cutting-edge resources to maximize your digital performance.",
  },
  {
    image: agency4,
    title: "Consistent Brand Messaging",
    alt: "Consistent Brand Messaging Icon",
    description:
      "Ensure a unified, professional brand voice across all social media platforms. Our strategic approach maintains brand consistency while adapting to each platform's unique communication style and audience expectations.",
  },
  {
    image: agency5,
    title: "Strategic Content Planning",
    alt: "Performance Monitoring Icon",
    description:
      "Develop a comprehensive, forward-looking content calendar that aligns perfectly with your business goals, seasonal trends, and audience preferences. Our content strategies are proactive, not reactive.",
  },
  {
    image: agency6,
    title: "Performance Tracking and Optimization",
    alt: "Continuous Optimization Icon",
    description:
      "Receive continuous, data-driven monitoring and optimization of your social media strategies. We don't just report metrics; we provide actionable insights that drive real business improvements.",
  },
  {
    image: agency7,
    title: "Cost-Effective Marketing Solution",
    alt: "Continuous Optimization Icon",
    description:
      "Achieve superior return on investment compared to traditional marketing channels. Our targeted, measurable social media campaigns provide more bang for your marketing buck.",
  },
  {
    image: agency8,
    title: "Competitive Intelligence",
    alt: "Continuous Optimization Icon",
    description:
      "Gain deep insights into industry trends, competitor strategies, and emerging market opportunities. Our comprehensive analysis helps you stay ahead of the curve and make informed strategic decisions.",
  },
];

const SmmServices = () => {
  return (
    <div className="smm-services-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Why Work with a <span>Social Media Agency?</span>
            </h2>
            <p>
              Partnering with a professional social media agency like WebGuruz
              offers numerous strategic advantages.
            </p>
          </div>
          {cardData.map((card, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="smm-service-card">
                <div className="smm-service-img">
                  <Image src={card.image} alt={card.alt} />
                </div>
                <div className="smm-service-content">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmmServices;
