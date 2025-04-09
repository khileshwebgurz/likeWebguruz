import React from "react";
import Image from "next/image";

// Array of services data
const servicesData = [
  {
    id: 1,
    image: "/images/shopifydevlpomentimg/shopify-service-1.webp",
    alt:"Custom Shopify Website Design Icon",
    title: "Custom Shopify Website Design",
    description:
      "Create a unique and visually compelling online store tailored to your brand identity. We ensure your Shopify store delivers an exceptional user experience and drives customer engagement.",
  },
  {
    id: 2,
    image: "/images/shopifydevlpomentimg/shopify-service-5.webp",
    alt:"Shopify Store Optimization icon",
    title: "Shopify Store Optimization",
    description:
      "Improve site speed, usability, and conversions through expert optimization. Achieve better rankings and enhance your customers' shopping experience.",
  },
  {
    id: 3,
    image: "/images/shopifydevlpomentimg/shopify-service-2.webp",
    alt:"Shopify App Development Icon",
    title: "Shopify App Development",
    description:
      "Extend the functionality of your store with bespoke applications. Our solutions are designed to meet your specific business needs and streamline operations.",
  },
  {
    id: 4,
    image: "/images/shopifydevlpomentimg/shopify-service-6.webp",
    alt:"Third-Party Integration Icon",
    title: "Third-Party Integration",
    description:
      "Connect your Shopify store to CRM, ERP, or other software for seamless operations. Unlock new possibilities with efficient and synchronized workflows.",
  },
  {
    id: 5,
    image: "/images/shopifydevlpomentimg/shopify-service-3.webp",
    alt:"Shopify Theme Customization Icon",
    title: "Shopify Theme Customization",
    description:
      "Modify themes to align perfectly with your business goals and aesthetics. Let your store stand out with a design that resonates with your target audience.",
  },
  {
    id: 6,
    image: "/images/shopifydevlpomentimg/shopify-service-7.webp",
    alt:"Shopify Maintenance Icon",
    title: "Shopify Maintenance and Support",
    description:
      "Ensure your store runs smoothly with round-the-clock support. Stay ahead of potential issues with our proactive monitoring and updates.",
  },
  {
    id: 7,
    image: "/images/shopifydevlpomentimg/shopify-service-4.webp",
    alt:"Shopify Migration Services Icon",
    title: "Shopify Migration Services",
    description:
      "Seamlessly transition from other platforms to Shopify with zero downtime. We safeguard your data integrity and ensure a hassle-free migration process.",
  },
  {
    id: 8,
    image: "/images/shopifydevlpomentimg/shopify-service-8.webp",
    alt:"Shopify SEO Services Icon",
    title: "Shopify SEO Services",
    description:
      "Boost visibility and drive traffic with our comprehensive SEO strategies. We help you rank higher on search engines and attract the right audience.",
  },
];

const DevShopifyServices = () => {
  return (
    <div className="Shopifyservices-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Our Shopify Website </span> Development Services
            </h2>
          </div>
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-12">
              <div className="services-one">
                <div className="services-main">
                  <div className="services-icon">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="services-content">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevShopifyServices;
