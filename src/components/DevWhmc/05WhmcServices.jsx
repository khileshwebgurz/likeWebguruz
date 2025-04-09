import React from "react";

const WhmcServices = () => {
  const services = [
    {
      id: 1,
      title: "Custom WHMCS Development",
      description:
        "Our expert developers offer tailored WHMCS solutions to suit your business needs, from custom modules to integrations with third-party software. This ensures that your WHMCS platform is perfectly aligned with your operational requirements, giving you a competitive edge.",
    },
    {
      id: 2,
      title: "WHMCS API Integration",
      description:
        "We integrate WHMCS with other platforms and systems, enhancing functionality and automating critical workflows for your business. This seamless integration will allow you to connect all your tools and systems, creating a unified, efficient ecosystem for your business operations.",
    },
    {
      id: 3,
      title: "WHMCS Theme Customization",
      description:
        "Our design team customizes your WHMCS theme to create a unique and professional look that aligns with your branding. We ensure that the theme is not only visually appealing but also provides an intuitive user experience that engages your customers.",
    },
    {
      id: 4,
      title: "WHMCS Hosting Solutions",
      description:
        "We provide top-tier hosting solutions to support your WHMCS installation, ensuring smooth and uninterrupted service. Our robust hosting environments are designed for optimal performance, ensuring your WHMCS platform runs without any disruptions.",
    },
    {
      id: 5,
      title: "WHMCS Support & Maintenance",
      description:
        "We offer ongoing support and maintenance for your WHMCS system, ensuring it remains up-to-date and runs optimally. Our proactive approach includes regular updates, bug fixes, and improvements to keep your system performing at its best.",
    },
    {
      id: 6,
      title: "WHMCS Module Development",
      description:
        "From billing to customer support, our custom-built WHMCS modules provide enhanced functionality for all aspects of your business. These modules are designed to meet your specific needs, improving efficiency and user satisfaction.",
    },
  ];

  return (
    <div className="Whmcs-development-sec py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span>WHMCS Development Services </span>
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

export default WhmcServices;
