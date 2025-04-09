import React from "react";
import Image from "next/image";
import system1 from "../../../public/images/hubSpot-marketing-autoimg/market-auto1.webp";
import system2 from "../../../public/images/hubSpot-marketing-autoimg/market-auto2.webp";
import system3 from "../../../public/images/hubSpot-marketing-autoimg/market-auto3.webp";
import system4 from "../../../public/images/hubSpot-marketing-autoimg/market-auto4.webp";
import system5 from "../../../public/images/hubSpot-marketing-autoimg/market-auto5.webp";
import system6 from "../../../public/images/hubSpot-marketing-autoimg/market-auto6.webp";

const processSteps = [
  {
    img: system1,
    alt: "Discovery and Consultation Icon",
    title: "Discovery and Consultation",
    description:
      "We take the time to understand your goals, challenges, and target audience to ensure we align our strategy with your vision.",
  },
  {
    img: system2,
    alt: "Strategy Development Icon",
    title: "Strategy Development",
    description:
      "With a clear understanding of your business, we design a customized automation strategy that aligns with your objectives.",
  },
  {
    img: system3,
    alt: "Platform Setup Icon",
    title: "Platform Setup",
    description:
      "We configure your HubSpot platform to suit your existing systems and marketing workflows. This includes setting up your CRM, email templates, analytics tools, and any third-party integrations to create a cohesive ecosystem.",
  },
  {
    img: system4,
    alt: "Workflow Design Icon",
    title: "Workflow Design",
    description:
      "We create detailed campaigns, workflows, and triggers that automate repetitive tasks while delivering a personalized customer experience.",
  },
  {
    img: system5,
    alt: "Testing and Optimization Icon",
    title: "Testing and Optimization",
    description:
      "We analyze every aspect of your workflows and campaigns to ensure they are error-free and delivering the desired results.",
  },
  {
    img: system6,
    alt: "Training and Support Icon",
    title: "Training and Support",
    description:
      "We provide comprehensive training sessions and ongoing support to ensure your staff is confident in using HubSpot tools effectively.",
  },
];

const NewAutomateProcess = () => {
  return (
    <div className="automation-section newhubprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto heading-main text-center mb-3 mb-md-5">
            <h2>
              <span>Our Hubspot Marketing </span> Automation Process
            </h2>
          </div>
        </div>
        <div className="row automation-row">
          {processSteps.map((step, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="newprocess-card text-center">
                <div className="autoimg">
                  <Image src={step.img} alt={step.alt} />
                </div>
                <div className="auto-text">
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewAutomateProcess;
