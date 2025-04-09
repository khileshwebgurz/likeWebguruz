import React from "react";
import key from "../../../public/images/wocommercesimg/woo-sol.svg";
import Image from "next/image";

const DevWoCommerceWebguru = () => {
  const benefits = [
    "Professional developers bring in-depth knowledge of WooCommerce's features, integrations, and customization options, delivering a high-quality, feature-rich store tailored to your business needs.",
    "A WooCommerce development company can create a fully customized eCommerce store that aligns perfectly with your brand identity, business model, and target audience, ensuring a unique user experience.",
    "From handling increased traffic to integrating new features as your business evolves, professional developers build stores that can scale effortlessly.",
    "A development company ensures faster project delivery with fewer errors, saving both time and money.",
    "WooCommerce development companies offer continuous post-launch support and maintenance, helping you address any issues, update features, and ensure your store remains secure and up to date.",
  ];

  return (
    <div className="Remarketingmatric woocomerce-why-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="remarketing-matric-img">
              <Image src={key} alt="WooCommerce Development Company" />
            </div>
          </div>
          <div className="col-lg-6 col-12 heading-main">
            <div className="remarketing-matric-content mb-4 mb-lg-0">
              <h2>
                Benefits of Hiring a{" "}
                <span>WooCommerce Development Company</span>
              </h2>
              <p>
                Hiring a professional WooCommerce development company brings
                specialized expertise to your project, ensuring your online
                store is not only well-designed but also optimized for
                performance, scalability, and security. By partnering with
                experts, you gain access to advanced tools, customized
                solutions, and a streamlined process, saving time and reducing
                risks in the development journey.
              </p>

              <ul className="pt-4">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevWoCommerceWebguru;
