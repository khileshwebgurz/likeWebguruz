import React from "react";
import icon from "../../../public/images/EcommerceImplementimg/implement-icon.webp";
import Image from "next/image";

const benefitsData = [
  {
    title: "Expertise",
    description:
      "Our expertise allows us to understand the nuances of your business, identify growth opportunities, and implement strategies that are not only efficient but also aligned with current market trends. By working with experts, you gain a competitive edge that drives better results for your business.",
    className: "",
  },
  {
    title: "Efficiency",
    description:
      "Our streamlined processes, advanced tools, and proven methodologies ensure your project is completed on time and within budget. With experts handling the complexities, your team can focus on core business activities without worrying about the technical intricacies of the implementation.",
    className: "box-two round-blue",
  },
  {
    title: "Scalability",
    description:
      "We create systems that are scalable, allowing you to seamlessly expand into new markets, handle increased traffic, and introduce new features without disruption. Our scalable solutions future-proof your business against unforeseen challenges.",
    className: "box-three round-green",
  },
  {
    title: "Customization",
    description:
      "From personalized user interfaces to unique workflows and integrations, we ensure the platform aligns perfectly with your operational goals. Customization helps create a unique brand identity and enhances user experience, setting your business apart from the competition.",
    className: "box-four round-orange",
  },
  {
    title: "Risk Mitigation",
    description:
      "Our experts identify potential challenges early in the process and implement strategies to mitigate them. By addressing risks proactively, we ensure your eCommerce implementation is completed successfully, minimizing delays, disruptions, and financial setbacks.",
    className: "box-five round-navi",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We are committed to your success beyond the initial implementation, offering continuous support, maintenance, and upgrades. By fostering a partnership based on trust and collaboration, we become an integral part of your journey, helping your business thrive in an ever-changing digital landscape.",
    className: "box-six round-yellow",
  },
];

const ImplementEcoBenefit = () => {
  return (
    <div className="Ecombenifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2>
              Benefits of Working with <span>a Service Provider</span>
            </h2>
            <p>
              By working with a professional service provider, you gain numerous
              advantages that ensure your business stays ahead of the curve.
            </p>
          </div>
          {benefitsData.map((benefit, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className={`benifit-box ${benefit.className}`}>
                <div className="icon-block">
                  <div className={`round-one ${benefit.className.split(" ")[1]}`}></div>
                  <div className={`round-two ${benefit.className.split(" ")[1]}`}></div>
                  <div className={`icon-img ${benefit.className.split(" ")[1]}`}>
                    <Image src={icon} alt="benefit" />
                  </div>
                </div>
                <div className="box-description">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementEcoBenefit;
