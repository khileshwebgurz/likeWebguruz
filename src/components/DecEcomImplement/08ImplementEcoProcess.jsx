import React from "react";
import check from "../../../public/images/EcommerceImplementimg/c1.svg";
import cart from "../../../public/images/EcommerceImplementimg/implement-flow.svg";
import Image from "next/image";

const ImplementEcoProcess = () => {
  const processSteps = [
    {
      title: "Discovery & Planning",
      description:
        "We take the time to understand your business goals, target audience, and industry challenges to tailor a comprehensive strategy for success. This stage sets the foundation for a scalable, high-performing eCommerce platform aligned with your long-term objectives.",
    },
    {
      title: "Design & Development",
      description:
        "Our experts craft a visually appealing and user-friendly eCommerce platform tailored to your unique needs. From custom features to responsive designs, we ensure your site stands out and delivers an exceptional shopping experience across all devices.",
    },
    {
      title: "Integration & Testing",
      description:
        "We seamlessly integrate your platform with existing tools like ERP, CRM, and payment gateways to create a unified system. Rigorous testing is conducted to ensure all functionalities work flawlessly, providing your customers with a reliable and smooth experience.",
    },
    {
      title: "Launch & Support",
      description:
        "When your site is ready, we handle the launch with meticulous care to ensure a seamless transition to live operations. Post-launch, we provide full support and ongoing maintenance to address any issues and keep your platform running optimally.",
    },
  ];

  return (
    <div className="Ourprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Ecommerce <span>Implementation Process</span>
            </h2>
          </div>
        </div>
        <div className="row row-our-process align-items-center">
          <div className="col-lg-6 col-12 mt-4 mt-md-0">
            <div className="process-img">
              <Image src={cart} alt="eCommerce Implementation Services" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            {processSteps.map((step, index) => (
              <div className="process-box" key={index}>
                <Image src={check} alt="process" />
                <div className="process-decription">
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementEcoProcess;
