import React from "react";
import Image from "next/image";
import adds1 from "../../../public/images/EcommercPPCimg/ecom-camp-1.webp";
import adds2 from "../../../public/images/EcommercPPCimg/ecom-camp-2.webp";
import adds3 from "../../../public/images/EcommercPPCimg/ecom-camp-3.webp";
import adds4 from "../../../public/images/EcommercPPCimg/ecom-camp-4.webp";
import adds5 from "../../../public/images/EcommercPPCimg/ecom-camp-5.webp";
import adds6 from "../../../public/images/EcommercPPCimg/ecom-camp-6.webp";

const EcomPpcManagement = () => {
  const services = [
    {
      img: adds1,
      title: "Campaign Strategy & Planning",
      alt:"Campaign Strategy Icon",
      description:
        "Our team begins by deeply understanding your business goals, target audience, and unique selling propositions. Using this information, we craft a customized PPC strategy that aligns with your objectives, ensuring your campaigns are set up for success from day one.",
    },
    {
      img: adds2,
      title: "Ad Creation & Design",
      alt:"Ad Creation & Design Icon",
      description:
        "Our creative team designs visually appealing ads that grab attention and encourage clicks. From compelling copy to eye-catching visuals, we create ads that not only look great but also effectively communicate your brand message and value proposition.",
    },
    {
      img: adds3,
      title: "Bid Management",
      alt:"Bid Management Icon",
      description:
        "Experts at our eCommerce PPC Agency meticulously manage your bids to ensure you get the maximum return on your ad spend. By analyzing real-time data, we adjust bids dynamically, helping you achieve the best possible positioning without overspending.",
    },
    {
      img: adds4,
      title: "Keyword Research & Optimization",
      alt:"Keyword Research Icon",
      description:
        "We conduct extensive research to identify the most relevant and high-performing keywords for your industry. By targeting high-intent search terms, we ensure that your ads reach the right audience, driving quality traffic that’s more likely to convert.",
    },
    {
      img: adds5,
      title: "Performance Tracking & Reporting",
      alt:"Tracking & Reporting Icon",
      description:
        "Transparency is key to our process. We provide regular, detailed performance reports that break down key metrics, helping you understand how your campaigns are performing. With these insights, we make data-driven adjustments to improve results continually.",
    },
    {
      img: adds6,
      title: "Competitor Analysis",
      alt:"Competitor Analysis Icon",
      description:
        "Staying ahead in a competitive market requires a keen understanding of your rivals. We analyze your competitors’ PPC strategies to identify gaps and opportunities, giving you a strategic edge that ensures your ads outperform theirs.",
    },
  ];

  return (
    <div className="Ourdtc-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our eCommerce <span> PPC Management Services </span>
            </h2>
            <p>
              Find tailored eCommerce PPC solutions for the maximum impact. We
              offer comprehensive services to help your online store thrive.
              Here’s what’s included:
            </p>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="ourppc-card">
                <div className="img-ppc">
                  <Image src={service.img} alt={service.alt} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcomPpcManagement;
