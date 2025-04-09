import React from "react";

const ImplementEcoServices = () => {
  const services = [
    {
      number: "01",
      title: "Platform Selection",
      description:
        "Selecting the right eCommerce platform is a crucial step in building a successful online store. We guide you through the decision-making process to ensure the platform aligns perfectly with your operational and scalability needs.",
    },
    {
      number: "02",
      title: "Integration with 3rd Party Tools",
      description:
        "An efficient eCommerce platform thrives on its ability to integrate with third-party tools. We specialize in connecting your platform with essential tools such as ERPs, CRMs, payment gateways, marketing automation tools, and shipping solutions.",
    },
    {
      number: "03",
      title: "Custom Development",
      description:
        "Every business is unique, and your eCommerce platform should reflect that. We ensure your platform not only meets but exceeds your expectations, giving you a competitive edge in the marketplace.",
    },
    {
      number: "04",
      title: "Mobile Optimization",
      description:
        "Having a responsive and mobile-optimized eCommerce site is no longer optional- it’s essential. We ensure your online store is accessible and user-friendly across all devices, delivering a seamless shopping experience to your customers.",
    },
    {
      number: "05",
      title: "Data Migration",
      description:
        "Transitioning from outdated systems to modern eCommerce platforms can be daunting, but we make it seamless. We prioritize accuracy and data integrity to ensure your business operations continue without disruption.",
    },
    {
      number: "06",
      title: "Testing & QA",
      description:
        "Before your eCommerce platform goes live, it undergoes rigorous testing to ensure optimal performance. By identifying and resolving potential issues beforehand, we deliver a flawless website that meets your expectations and instills confidence in your customers.",
    },
  ];

  return (
    <div className="Ourecommerceservices py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span>eCommerce Implementation Services</span>
            </h2>
            <p>
              Our implementation services cover everything you need to succeed
              in the eCommerce space.
            </p>
          </div>
          {services.map((service, index) => (
            <div
              className={`col-lg-4 col-md-6 col-12 mb-4`}
              key={index}
            >
              <div className={`services-box box-${index + 1}`}>
                <h2 className="text-white text-blue">{service.number}</h2>
                <h3 className="text-white">{service.title}</h3>
                <div className="description">
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

export default ImplementEcoServices;
