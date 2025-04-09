import React from "react";
import Image from "next/image";
import Link from "next/link";
import dashboard from "../../../public/images/newhubcrmautoimages/crmImages/dashboard.webp";
import customerExperience from "../../../public/images/newhubcrmautoimages/crmImages/customerExperience.webp";
import highPerformance from "../../../public/images/newhubcrmautoimages/crmImages/highPerformance.webp";
import increaed from "../../../public/images/newhubcrmautoimages/crmImages/increaed.webp";
import network from "../../../public/images/newhubcrmautoimages/crmImages/network.webp";
import preferences from "../../../public/images/newhubcrmautoimages/crmImages/preferences.webp";
import revenue from "../../../public/images/newhubcrmautoimages/crmImages/revenue.webp";
import scalability from "../../../public/images/newhubcrmautoimages/crmImages/scalability.webp";
import sales from "../../../public/images/newhubcrmautoimages/crmImages/sales.webp";
import arrow from "../../../public/images/newhubcrmautoimages/Arrow.svg";

const benefits = [
  {
    img: preferences,
    title: "Improved Lead Management",
    description:
      "With automated lead nurturing, you&apos;ll never miss an opportunity to engage and convert leads.",
    alt: "Lead Management Icon",
  },
  {
    img: dashboard,
    title: "Better Data Tracking and Analytics",
    description:
      "HubSpot’s powerful analytics help you understand customer behavior and improve decision-making.",
    alt: "Data Tracking and Analytics Icon",
  },
  {
    img: increaed,
    title: "Cost Savings",
    description:
      "Automation reduces the need for additional resources, leading to cost savings.",
    alt: "Cost Saving Icon",
  },
  {
    img: highPerformance,
    title: "Increased Efficiency",
    description:
      "Automation eliminates manual tasks, saving your team time and reducing human error.",
    alt: "Increased Efficiency Icon",
  },
  {
    img: scalability,
    title: "Scalable Solutions",
    description:
      "As your business grows, HubSpot automation grows with you, making scalability easy.",
    alt: "Scalable Solutions Icon",
  },
  {
    img: network,
    title: "Cross-Department Alignment",
    description:
      "Align your sales, marketing, and customer service teams for a more cohesive business approach.",
    alt: "Cross-Department Alignment Icon",
  },
  {
    img: customerExperience,
    title: "Enhanced Customer Experience",
    description:
      "Personalize interactions and automate communication to deliver consistent, timely responses.",
    alt: "Customer Experience Icon",
  },
  {
    img: sales,
    title: "Improved Sales Process",
    description:
      "Automating sales workflows results in faster response times and more closed deals.",
    alt: "Sales Process Icon",
  },
  {
    img: revenue,
    title: "Increased Revenue",
    description:
      "Automating follow-ups and nurturing leads leads to more opportunities and higher revenue.",
    alt: "Increased Revenue Icon",
  },
];

const CrmAutoWorking = () => {
  return (
    <div className="HubPopularwork py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Benefits of HubSpot </span> CRM Automation
            </h2>
            <p>
              HubSpot CRM automation can transform the way your business
              <br /> operates. Here are 9 key benefits:
            </p>
          </div>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="work-card">
                <div className="circle-icon-hub">
                  <Image
                    src={benefit.img}
                    className="small-img-icon"
                    alt={benefit.alt}
                  />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
                <div className="link-btn">
                  <Link href="#" className="try-it">
                    Try it <Image src={arrow} alt="right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrmAutoWorking;
