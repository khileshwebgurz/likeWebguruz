import React from "react";
import dev1 from "../../../public/images/ecommercewebdesignimg/ecom-monitor-1.webp";
import dev2 from "../../../public/images/ecommercewebdesignimg/ecom-monitor-2.webp";
import dev3 from "../../../public/images/ecommercewebdesignimg/ecom-monitor-3.webp";
import dev4 from "../../../public/images/ecommercewebdesignimg/ecom-monitor-4.webp";
import Image from "next/image";

const designServices = [
  {
    imgSrc: dev1,
    title: "Custom eCommerce Design",
    alt: "Custom eCommerce Design Icon",
    description:
      "Your brand is unique, and your website should be too. We specialize in creating bespoke eCommerce designs that embody your brand's personality, values, and vision. From tailored layouts to custom graphics, every element is designed to create a strong and lasting impression on your audience, setting you apart from competitors.",
  },
  {
    imgSrc: dev2,
    title: "Conversion Optimization",
    alt: "Conversion Optimization Icon",
    description:
      "A great design isn’t just about aesthetics- it’s about driving results. Our designs are strategically crafted with user behavior and conversion principles in mind. From intuitive navigation to persuasive call-to-actions, we focus on guiding your visitors toward completing desired actions, whether it’s making a purchase or signing up for a newsletter.",
  },
  {
    imgSrc: dev3,
    title: "Responsive Design",
    alt: "Responsive Design Icon",
    description:
      "It’s essential for your website to perform seamlessly across all screen sizes. Our responsive designs ensure that your eCommerce site looks and functions flawlessly on desktops, tablets, and smartphones. This adaptability enhances user satisfaction, reduces bounce rates, and boosts conversions, no matter where your audience engages with your site.",
  },
  {
    imgSrc: dev4,
    title: "Maintenance and Updates",
    alt: "Maintenance and Updates Icon",
    description:
      "An eCommerce website requires regular maintenance and updates to stay competitive. We provide ongoing support to keep your site running smoothly, implementing updates, fixing bugs, and adding new features as needed. This ensures your platform remains relevant and functional, meeting the evolving demands of your business and customers.",
  },
];

const DesignEcomSolutions = () => {
  return (
    <div className="Designservices-section Develpomentservices py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              Our eCommerce <span>Website Design Services</span>
            </h2>
            <p>
              We offer a comprehensive range of services to cater to all your
              eCommerce design needs, ensuring your platform is both visually
              appealing and highly functional.
            </p>
          </div>
          {designServices.map((service, index) => (
            <div className="col-md-6 col-12 mb-4" key={index}>
              <div className="design-services-one">
                <div className="dev-img">
                  <Image src={service.imgSrc} alt={service.alt} />
                </div>
                <div className="design-text">
                  <h5>{service.title}</h5>
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

export default DesignEcomSolutions;
