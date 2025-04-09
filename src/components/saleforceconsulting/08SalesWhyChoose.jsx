import React from "react";

const SalesWhyChoose = () => {
  const services = [
    {
      id: 1,
      title: "Certified Salesforce Expertise",
      description:
        "Our team consists of certified Salesforce consultants with extensive experience across multiple Salesforce clouds and products. This expertise allows us to implement best practices and create solutions that maximize the value of your Salesforce investment.",
    },
    {
      id: 2,
      title: "Cost-Effective Solutions",
      description:
        "As an India-based Salesforce consulting firm, we offer highly competitive rates without compromising on quality. Our efficient project management and delivery processes ensure maximum value for your investment.",
    },
    {
      id: 3,
      title: "Industry-Specific Experience",
      description:
        "Having worked with clients across various industries, we understand the unique challenges and requirements of different business sectors. This industry knowledge helps us deliver solutions that address your specific needs rather than generic implementations.",
    },
    {
      id: 4,
      title: "Transparent Communication",
      description:
        "We believe in clear, open communication throughout the project lifecycle. You'll always know the status of your project, upcoming milestones, and any challenges that need to be addressed. No surprises, just results.",
    },
    {
      id: 5,
      title: "Flexible Engagement Models",
      description:
        "Whether you need a complete Salesforce implementation or just specific components, we offer flexible engagement models to suit your requirements and budget. From time and material to fixed price projects, we can adapt to your preferred working style.",
    },
    {
      id: 6,
      title: "Ongoing Support & Partnership",
      description:
        "We don't just implement and leave. We're committed to your long-term success and offer ongoing support, optimization, and enhancement services to ensure your Salesforce environment continues to deliver value as your business evolves.",
    },
  ];

  return (
    <div className="choose-salesforce pt-5 pb-2 pb-lg-3 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Work <span>With WebGuruz? </span>
            </h2>
          </div>
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-12 mb-4">
              <div className="devbox">
                <div className="box-count">
                  <span>{`0${service.id}`}</span>
                </div>
                <div className="box-description">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesWhyChoose;
