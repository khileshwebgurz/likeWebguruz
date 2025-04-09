import React from "react";
import Image from "next/image";
import Store1 from "../../../public/images/shopifydevlpomentimg/shop-insight-1.webp";
import Store2 from "../../../public/images/shopifydevlpomentimg/shop-insight-2.webp";
import Store3 from "../../../public/images/shopifydevlpomentimg/shop-insight-3.webp";
import Store4 from "../../../public/images/shopifydevlpomentimg/shop-insight-4.webp";
import Store5 from "../../../public/images/shopifydevlpomentimg/shop-insight-5.webp";
import Store6 from "../../../public/images/shopifydevlpomentimg/shop-insight-6.webp";

const benefitsData = [
  {
    image: Store1,
    title: "Ease of Use",
    alt:"Ease of Use Icon",
    description:
      "Shopify offers an intuitive and user-friendly platform that simplifies store management for business owners while providing a seamless and enjoyable shopping experience for customers. With its straightforward interface, even beginners can efficiently manage products, orders, and other essential operations.",
  },
  {
    image: Store2,
    title: "Customizable",
    alt:"Customizable Icon",
    description:
      "Shopify is highly customizable, enabling you to create a store that reflects your unique brand identity and meets your specific business goals. From themes and layouts to custom features and functionalities, everything can be tailored to align perfectly with your vision.",
  },
  {
    image: Store3,
    title: "Scalability",
    alt:"Scalability Icon",
    description:
      "Designed to grow alongside your business, Shopify provides the flexibility to expand your store as your needs evolve. Whether you’re adding new products, increasing traffic, or exploring new markets, the platform can scale effortlessly to accommodate your growth.",
  },
  {
    image: Store4,
    title: "Secure and Reliable",
    alt:"Secure and Reliable Icon",
    description:
      "With industry-leading security measures and robust uptime performance, Shopify ensures your store remains protected and operational at all times. Built-in SSL certificates, automatic backups, and reliable hosting give you peace of mind and a trustworthy platform for your customers.",
  },
  {
    image: Store5,
    title: "SEO-Friendly",
    alt:"SEO-Friendly Icon",
    description:
      "Shopify is equipped with powerful tools and features to help you optimize your store for search engines, driving organic traffic to your website. From customizable meta tags to mobile-responsive designs, the platform helps improve your visibility and rank higher in search results.",
  },
  {
    image: Store6,
    title: "Cost-Effective",
    alt:"Cost-Effective Icon",
    description:
      "Shopify offers competitive pricing plans that deliver exceptional value, making it a cost-effective solution for businesses of all sizes. With its extensive range of built-in features and tools, you can achieve a high return on investment without breaking the bank.",
  },
];

const DevShopifyLeads = () => {
  return (
    <div className="Shopifystore-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-5">
            <h2>
              Benefits of <span>Shopify Website Development</span>
            </h2>
            <p>
              Discover new opportunities with the world&apos;s most loved
              ecommerce website development platform.
            </p>
          </div>

          {benefitsData.map((benefit, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="store-one">
                <Image src={benefit.image} alt={benefit.title} />
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevShopifyLeads;
