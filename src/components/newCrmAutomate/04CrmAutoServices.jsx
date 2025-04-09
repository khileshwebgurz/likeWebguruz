import React from "react";
import Image from "next/image";
import crmimg1 from "../../../public/images/newhubcrmautoimages/new-crm-1.webp";
import crmimg2 from "../../../public/images/newhubcrmautoimages/new-crm-2.webp";
import crmimg3 from "../../../public/images/newhubcrmautoimages/new-crm-3.webp";
import crmimg4 from "../../../public/images/newhubcrmautoimages/new-crm-4.webp";
import crmimg5 from "../../../public/images/newhubcrmautoimages/new-crm-5.webp";
import crmimg6 from "../../../public/images/newhubcrmautoimages/new-crm-6.webp";
import crmimg7 from "../../../public/images/newhubcrmautoimages/new-crm-7.webp";
import crmimg8 from "../../../public/images/newhubcrmautoimages/new-crm-8.webp";
import crmimg9 from "../../../public/images/newhubcrmautoimages/new-crm-9.webp";
import crmimg10 from "../../../public/images/newhubcrmautoimages/new-crm-10.webp";
import crmimg11 from "../../../public/images/newhubcrmautoimages/new-crm-11.webp";
import crmimg12 from "../../../public/images/newhubcrmautoimages/new-crm-12.webp";

const services = [
  {
    img: crmimg1,
    alt: "CRM Setup Icon",
    title: "CRM Setup & Customization",
    description: "Tailor HubSpot CRM to your unique business needs.",
  },
  {
    img: crmimg2,
    alt: "Reporting & Analytics Icon",
    title: "Reporting and Analytics",
    description: "Unlock valuable insights on customer data.",
  },
  {
    img: crmimg3,
    alt: "Lead Scoring Automation Icon",
    title: "Lead Scoring Automation",
    description: "Increase conversion rates.",
  },
  {
    img: crmimg4,
    alt: "Lead Nurturing Automation Icon",
    title: "Lead Nurturing Automation",
    description: "Automate your lead nurturing process.",
  },
  {
    img: crmimg5,
    alt: "Workflow Automation Icon",
    title: "Task and Workflow Automation",
    description: "Automate manual HubSpot CRM Workflows for ease.",
  },
  {
    img: crmimg6,
    alt: "Social Media Integration Icon",
    title: "Social Media Integration",
    description: "Automate social media campaigns.",
  },
  {
    img: crmimg7,
    alt: "Sales Pipeline Automation Icon",
    title: "Sales Pipeline Automation",
    description: "Streamline your sales processes.",
  },
  {
    img: crmimg8,
    alt: "CRM Integration Services Icon",
    title: "CRM Integration Services",
    description: "Integrate HubSpot with other tools and platforms.",
  },
  {
    img: crmimg9,
    alt: "Customer Segmentation Icon",
    title: "Customer Segmentation",
    description: "Deliver more relevant, targeted marketing.",
  },
  {
    img: crmimg10,
    alt: "Email Marketing Automation Icon",
    title: "Email Marketing Automation",
    description: "Enhance customer engagement.",
  },
  {
    img: crmimg11,
    alt: "Customer Support Automation Icon",
    title: "Customer Support Automation",
    description: "Provide timely, automated support responses.",
  },
  {
    img: crmimg12,
    alt: "Sales & Marketing Alignment Icon",
    title: "Sales and Marketing Alignment",
    description: "Automated workflows for smoother collaboration.",
  },
];

const CrmAutoServices = () => {
  return (
    <div className="Technical-SEO-Services py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Our HubSpot CRM <span> Automation Services</span>
            </h2>
          </div>
        </div>
        <div className="row seo-work mt-4 mt-md-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 mb-4 col-12"
            >
              <div className="seo-work-content">
                <Image src={service.img} alt={service.alt} />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrmAutoServices;
