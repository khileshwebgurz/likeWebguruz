import Link from "next/link";
import React from "react";

const crmOptions = [
  {
    title: "Proven Expertise",
    description:
      "With over a decade of experience in CRM solutions and migrations, WebGuruz has honed a process that minimizes risk and maximizes efficiency. We’ve successfully migrated complex data structures and intricate workflows for clients across industries.",
  },
  {
    title: "Custom Solutions",
    description:
      "We believe in providing customized solutions that align with your business processes, data requirements, and operational needs. Our team works closely with you to develop a migration strategy that fits your unique business environment.",
  },
  {
    title: "Dedicated Support",
    description:
      "We understand that a CRM migration can feel overwhelming, which is why we provide end-to-end guidance. Our dedicated team is available to address any concerns, troubleshoot issues, and offer proactive solutions throughout the process.",
  },
  {
    title: "Certified Professionals",
    description:
      "At WebGuruz, we pride ourselves on having a team of HubSpot-certified experts who bring both technical proficiency and strategic insight to every project. Our professionals undergo rigorous training to stay updated on the latest HubSpot features and best practices.",
  },
];

const CrmCmsOption = () => {
  return (
    <div className="crm-cms pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2 className="mb-2">
              <span>Why Trust WebGuruz with </span> Your CRM Migration?
            </h2>
            <p className="mb-4">
              Choosing WebGuruz means peace of mind. Our clients trust us
              because:
            </p>
          </div>
        </div>
        <div className="row crm-cms">
          {crmOptions.map((option, index) => (
            <div key={index} className="col-xl-3 col-md-6 col-12">
              <div className="crm-cms-card">
                <div className="crm-cms-text">
                  <h5>{option.title}</h5>
                  <p>{option.description}</p>
                  <div className="crm-btn">
                    <Link href="" className="explore-btn">
                      Migrate Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrmCmsOption;
