import React from "react";
import hello from "../../../public/images/crmmigrationimages/heelo.svg";
import Image from "next/image";

const processSteps = [
  {
    title: "Assessment & Planning",
    description:
      "Our experts analyze your existing CRM setup, identifying data structures, key fields, workflows, and any unique configurations your business relies on. We work closely with your team to understand your goals and specific requirements, ensuring that nothing is overlooked. From there, we develop a detailed migration roadmap, outlining each step of the process, potential risks, and mitigation strategies.",
  },
  {
    title: "Data Mapping & Cleanup",
    description:
      "We identify essential data points that need to be migrated and align them with HubSpot’s framework. We meticulously review your database to eliminate duplicate entries, correct inaccuracies, and standardize formats, ensuring a clean and consistent dataset. This process not only enhances data integrity but also improves the quality of insights and reports you can generate within HubSpot.",
  },
  {
    title: "Custom Configuration",
    description:
      "We handle custom configuration by setting up HubSpot to align perfectly with your workflows and operational needs. This includes creating custom fields, designing tailored automation sequences, and configuring reports that provide actionable insights. Whether it’s lead scoring, deal tracking, or automated follow-ups, our configurations streamline your processes and maximize efficiency.",
  },
  {
    title: "Data Migration",
    description:
      "Our team uses advanced tools and methodologies to transfer your data from the legacy system to HubSpot while maintaining its integrity. This involves validating data throughout the process to prevent loss or corruption. We prioritize security and confidentiality, ensuring that sensitive information is protected at every stage.",
  },
  {
    title: "User Training",
    description:
      "We offer comprehensive user training tailored to different roles within your organization. Our training sessions cover everything from HubSpot basics to advanced features like automation, reporting, and pipeline management. We provide hands-on guidance and create customized learning resources to ensure your team feels confident using the platform.",
  },
  {
    title: "Post-Migration Support",
    description:
      "The journey doesn’t end after migration. We offer ongoing post-migration support to help you continuously optimize and enhance your HubSpot experience. Our team is available to assist with troubleshooting, fine-tuning workflows, and implementing new features as your business evolves. We also monitor system performance and provide proactive recommendations to ensure your CRM remains aligned with your objectives.",
  },
];

const HubCrmProcess = () => {
  return (
    <div className="hubProcess hubprocess_crm pt-2 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Our <span>CRM Migration Process</span>
            </h2>
            <p>A six-step process designed for accuracy and efficiency:</p>
          </div>
        </div>
        <div className="row process">
          {processSteps.map((step, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="process-card">
                <div className="check-icon">
                  <Image src={hello} alt="check-svg" />
                </div>
                <div className="process text">
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

export default HubCrmProcess;
