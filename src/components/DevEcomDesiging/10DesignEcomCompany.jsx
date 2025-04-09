import React from "react";
import Image from "next/image";
import woo1 from "../../../public/images/devecomerceimg/ecom-company-1.webp";
import woo2 from "../../../public/images/devecomerceimg/ecom-company-2.webp";
import woo3 from "../../../public/images/devecomerceimg/ecom-company-3.webp";
import woo4 from "../../../public/images/ecommercewebdesignimg/design-compny.svg";
import woo5 from "../../../public/images/devecomerceimg/ecom-company-4.webp";
import woo6 from "../../../public/images/devecomerceimg/ecom-company-6.webp";

const platforms = [
  {
    image: woo1,
    title: "Shopify",
    alt: "Shopify Icon",
    description:
      "Shopify offers a user-friendly interface and an extensive library of themes and apps, making it one of the easiest platforms to build and manage an online store. Whether you’re starting from scratch or migrating from another platform, we customize Shopify to suit your business goals. From setting up product catalogs to configuring payment gateways and integrating third-party apps, we ensure your Shopify store delivers a seamless and engaging shopping experience for your customers.",
  },
  {
    image: woo2,
    title: "WooCommerce",
    alt: "WooCommerce Icon",
    description:
      "As a WordPress plugin, WooCommerce combines flexibility with the power of the world’s most popular CMS. We design and develop highly scalable WooCommerce stores tailored to meet your specific needs. With countless plugins, themes, and customization options, WooCommerce is ideal for businesses looking for complete control over their website’s design and functionality.",
  },
  {
    image: woo3,
    title: "Magento",
    alt: "Magento Icon",
    description:
      "Magento is a powerhouse platform, offering advanced features like multi-store management, robust product catalogs, and seamless integrations. Perfect for businesses with complex needs, we leverage Magento to create scalable, high-performance websites that grow with your company. Our expertise includes custom extension development, performance optimization, and creating B2B and B2C solutions.",
  },
  {
    image: woo4,
    title: "PrestaShop",
    alt: "PrestaShop Icon",
    description:
      "For businesses seeking a cost-effective eCommerce solution, PrestaShop offers flexibility, simplicity, and a wide range of features. We use PrestaShop to design efficient and functional online stores with multilingual and multi-currency support, making it an excellent choice for businesses targeting global audiences.",
  },
  {
    image: woo5,
    title: "BigCommerce",
    alt: "BigCommerce Icon",
    description:
      "BigCommerce provides an all-in-one solution with built-in tools for SEO, marketing, and analytics. Known for its scalability and headless commerce capabilities, we utilize BigCommerce to create visually stunning, high-performing stores. Whether you’re targeting local or global markets, we ensure your BigCommerce site meets the needs of your business and your customers.",
  },
  {
    image: woo6,
    title: "OpenCart",
    alt: "OpenCart Icon",
    description:
      "OpenCart is an intuitive platform that offers simplicity without sacrificing functionality. Ideal for startups and small businesses, we customize OpenCart to create user-friendly stores with essential features like payment integrations, product management, and reporting tools. Its lightweight framework ensures fast-loading websites for enhanced user experience.",
  },
];

const DesignEcomCompany = () => {
  return (
    <div className="Wework-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Platforms We </span> Specialize In
            </h2>
          </div>
          {platforms.map((platform, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="work-card">
                <Image src={platform.image} alt={platform.alt} />
                <h4>{platform.title}</h4>
                <p>{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignEcomCompany;
