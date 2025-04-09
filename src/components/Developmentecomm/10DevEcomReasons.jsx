import React from "react";

const DevEcomReasons = () => {
  const voiceServices = [
    {
      title: "Proven Success",
      description:
        "We have successfully delivered eCommerce solutions to clients globally. Our portfolio spans various industries, showcasing our ability to tackle diverse challenges and create high-performing eCommerce platforms that exceed expectations.",
    },
    {
      title: "Ongoing Support",
      description:
        "Enjoy continuous support and updates after your website goes live. Our dedicated support team ensures that your site remains up-to-date, secure, and optimized for performance, helping you address any issues or implement new features seamlessly.",
    },
    {
      title: "Results-Driven",
      description:
        "Our focus is on delivering measurable business results, increasing your online sales and visibility. We use data-driven strategies to track key performance metrics and refine our approach, ensuring continuous growth and success for your online business.",
    },
  ];

  return (
    <div className="Voiceservices-section dev-ecom-reasons py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 heading-main mb-4 mb-md-0">
            <h2>
              Why Choose <br/><span> WebGuruz?</span>
            </h2>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="voice-card">
                  <h5>Certified Experts</h5>
                  <p>
                    Our team includes certified eCommerce developers and
                    consultants with years of experience. We continuously update
                    our skills and knowledge to stay ahead of industry trends
                    and provide the best solutions tailored to your specific
                    business requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="voice-card">
                  <h5>Custom Solutions</h5>
                  <p>
                    We build eCommerce websites tailored to your business’s
                    unique needs. From design to functionality, every aspect of
                    the website is crafted to align with your brand, target
                    audience, and growth goals, ensuring maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
          {voiceServices.map((service, index) => (
            <div className="col-md-4 col-12 mb-4 mb-md-0" key={index}>
              <div className="voice-card">
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

export default DevEcomReasons;
