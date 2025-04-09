import React from "react";

const SupportEcomExplore = () => {
  const services = [
    {
      title: "24/7 Website Monitoring",
      description:
        "Continuous tracking to identify and resolve issues before they impact your business. Our team ensures real-time detection and swift action to maintain your website’s uptime and reliability.",
    },
    {
      title: "Bug Fixes",
      description:
        "Immediate resolution of technical glitches to ensure smooth operations. Our team conducts thorough testing to identify and eliminate recurring issues, providing a seamless shopping experience.",
    },
    {
      title: "Backup and Recovery",
      description:
        "Automated backups and quick recovery plans for data safety. With reliable restoration processes, we minimize data loss and ensure business continuity in case of emergencies.",
    },
    {
      title: "Performance Optimization",
      description:
        "Fine-tuning your site for faster load times and enhanced user experience. We analyze performance metrics and implement strategic improvements to keep your site running at peak efficiency.",
    },
    {
      title: "Content Updates",
      description:
        "Keeping your product listings and promotions fresh and relevant. From seasonal campaigns to new product launches, we ensure your content aligns with your business goals.",
    },
    {
      title: "Plugin and Extension Updates",
      description:
        "Ensuring compatibility and functionality of add-ons. We also test updated plugins for performance to prevent disruptions in your store’s operations.",
    },
    {
      title: "Security Updates",
      description:
        "Regularly updating your platform to protect against vulnerabilities. This includes patching security loopholes, updating firewalls, and safeguarding sensitive customer data.",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Providing actionable insights to optimize performance and conversions. Detailed reports help you make informed decisions to enhance user experience and drive growth.",
    },
  ];

  return (
    <div className="maintenaceservices py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              Our eCommerce <span> Website Support & Maintenance Services</span>
            </h2>
            <p>
              Our extensive range of services is designed to address every
              aspect of eCommerce website maintenance:
            </p>
          </div>
        </div>
        <div className="row maintenace">
          {services.map((service, index) => (
            <div
              className="col-lg-3 col-md-4 col-12 mb-4"
              key={`service-${index}`}
            >
              <div className="services-box">
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

export default SupportEcomExplore;
