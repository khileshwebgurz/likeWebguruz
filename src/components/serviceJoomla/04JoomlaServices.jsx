import Image from "next/image";

import woo1 from "../../../public/images/joomlaimages/joomla-api-1.webp";
import woo2 from "../../../public/images/joomlaimages/joomla-api-2.webp";
import woo3 from "../../../public/images/joomlaimages/joomla-api-3.webp";
import woo4 from "../../../public/images/joomlaimages/joomla-api-4.webp";
import woo5 from "../../../public/images/joomlaimages/joomla-api-5.webp";
import woo6 from "../../../public/images/joomlaimages/joomla-api-6.webp";
import woo7 from "../../../public/images/joomlaimages/joomla-api-7.webp";
import woo8 from "../../../public/images/joomlaimages/joomla-api-8.webp";
import woo9 from "../../../public/images/joomlaimages/joomla-api-9.webp";
import Link from "next/link";

const services = [
  {
    title: "Custom Joomla Website Development",
    image: woo1,
    alt: "Joomla Web Development",
    description:
      "Get a fully customized Joomla website tailored to your business needs. We develop high-performance, mobile-friendly, and SEO-optimized sites that enhance your online presence.",
  },
  {
    title: "Joomla Migration & Upgrade Services",
    image: woo2,
    alt: "Joomla Development",
    description:
      "Seamlessly migrate from older Joomla versions or other CMS platforms without losing data, functionality, or SEO rankings.",
  },
  {
    title: "Joomla Theme & Template Development",
    image: woo3,
    alt: "Joomla Web Development Company",
    description:
      "Our designers create unique, responsive, and engaging Joomla templates that reflect your brand identity and provide an intuitive user experience.",
  },
  {
    title: "Joomla API & Third-Party Integrations",
    image: woo4,
    alt: "Joomla developers",
    description:
      "Integrate third-party services like CRM, ERP, payment gateways, and marketing tools to enhance your website’s efficiency.",
  },
  {
    title: "Joomla Extension & Module Development",
    image: woo5,
    alt: "Setting Icon",
    description:
      "Extend your Joomla website’s functionality with custom modules and plugins designed specifically for your business requirements.",
  },
  {
    title: "Joomla SEO & Performance Optimization",
    image: woo6,
    alt: "Setting Icon",
    description:
      "Improve your website’s speed, performance, and search rankings with our Joomla SEO and optimization services.",
  },
  {
    title: "Joomla Support & Maintenance",
    image: woo7,
    alt: "Manage Icon",
    description:
      "Ensure smooth website performance with regular updates, security patches, and ongoing support from our Joomla experts.",
  },
  {
    title: "Joomla eCommerce Development",
    image: woo8,
    alt: "Warning Report",
    description:
      "Build a powerful Joomla eCommerce store with secure payment gateways, inventory management, and seamless shopping experiences.",
  },
  {
    title: "Joomla Security & Bug Fixing",
    image: woo9,
    alt: "Warning Report",
    description:
      "Protect your Joomla website from threats with advanced security protocols, firewall setups, and malware removal services.",
  },
];

const JoomlaServices = () => {
  return (
    <div className="Wocommerceservices-section joomla-services-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2 className="mb-2">
              <span> Our Joomla </span> Development Services
            </h2>
            <p>
              The team at WebGuruz offers excellent Joomla web development
              services to help you minimize operational costs and boost sales
              for greater ROI.
            </p>
          </div>
        </div>
        <div className="row woocommerces-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`col-md-4 col-12 ${index >= 6 ? "woo-bottom" : ""} ${
                index % 3 === 2 ? "three-wo" : ""
              }`}
            >
              <div className="woocard-one">
                <div className="img-text">
                  <div className="text">
                    <h5>{service.title}</h5>
                  </div>
                  <div className="img">
                    <Image src={service.image} alt={service.alt} />
                  </div>
                </div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoomlaServices;
