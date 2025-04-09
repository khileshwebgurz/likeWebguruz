import React from "react";
import Image from "next/image";
import Link from "next/link";
import serv1 from "../../../public/images/whitelabelppcimage/white-strtergy-1.webp";
import serv2 from "../../../public/images/whitelabelppcimage/white-strtergy-2.webp";
import serv3 from "../../../public/images/whitelabelppcimage/white-strtergy-3.webp";
import serv4 from "../../../public/images/whitelabelppcimage/white-strtergy-4.webp";
import serv5 from "../../../public/images/whitelabelppcimage/white-strtergy-5.webp";
import serv6 from "../../../public/images/whitelabelppcimage/white-strtergy-6.webp";

const servicesData = [
  {
    id: 1,
    image: serv1,
    title: "Campaign Strategy Development",
    alt:"Campaign Strategy Development",
    description:
      "By leveraging detailed market research and consumer behavior insights, we craft a tailored strategy that ensures maximum impact. Our team employs a data-driven approach, continuously refining strategies to target the right audience with precision.",
    
  },
  {
    id: 2,
    image: serv2,
    title: "Keyword Research & Optimization",
    alt:"Keyword Research & Optimization",
    description:
      "We conduct thorough research to identify the most valuable, high-converting keywords. We analyze competitor activity, search volume, and user intent to uncover the ideal keywords that will drive qualified traffic to your client's site. Our team doesn't stop at just identifying the right keywords—we continually optimize them throughout the campaign to adapt to market changes and emerging trends.",
    
  },
  {
    id: 3,
    image: serv3,
    title: "Ad Copywriting & Design",
    alt:"Ad Copywriting & Design",
    description:
      "Our skilled copywriters create persuasive and engaging ad copy that speaks directly to your target audience's pain points and desires. Whether it’s a catchy headline, a compelling call-to-action, or an informative description, we ensure every word has a purpose. In addition, our design team works alongside copywriters to develop visually appealing and cohesive ad creatives that reflect your client's brand and message.",
    
  },
  {
    id: 4,
    image: serv4,
    title: "Campaign Management & Monitoring",
    alt:"Campaign Management & Monitoring",
    description:
      "We monitor each campaign closely, analyzing real-time data to make informed decisions on budget allocation, bid adjustments, and targeting refinements. By continuously evaluating the performance of keywords, ads, and landing pages, we can quickly identify underperforming elements and implement necessary changes.",
    
  },
  {
    id: 5,
    image: serv5,
    title: "Analytics & Reporting",
    alt:"Analytics & Reporting",
    description:
      "We provide detailed, white-labeled reports that offer clear insights into every aspect of your client’s PPC campaign. From cost-per-click (CPC) to conversion rates and ROI, we break down complex data into easily digestible information. Our reports not only highlight performance metrics but also provide actionable recommendations for improvement.",
    
  },
  {
    id: 6,
    image: serv6,
    title: "Landing Page Optimization",
    alt:"Landing Page Optimization",
    description:
      "We don’t just focus on getting people to click your ads—we ensure that the landing pages they arrive on are designed to convert. Our team analyzes the layout, design, content, and call-to-action (CTA) to ensure the page aligns with the intent of the ad. By simplifying navigation, improving page load speed, and optimizing user experience (UX), we create a seamless journey from click to conversion.",
    
  },
];

const WhitePpcServices = () => {
  return (
    <div className="Whiteppcservices-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> White Label PPC Services</span>
            </h2>
          </div>
        </div>
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`row row-whitelabel-one ${
              index % 2 !== 0 ? "two-row" : ""
            } mb-4 mb-md-5`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-md-4 col-12 mb-4 mb-md-0">
                  <div className="services-img">
                    <Image src={service.image} alt={service.alt} />
                  </div>
                </div>
                <div className="col-md-8 col-12">
                  <div className="services-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-8 col-12">
                  <div className="services-content mt-4 mt-md-0">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                  </div>
                </div>
                <div className="col-md-4 col-12 ">
                  <div className="services-img">
                    <Image src={service.image} alt={service.title} />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhitePpcServices;
