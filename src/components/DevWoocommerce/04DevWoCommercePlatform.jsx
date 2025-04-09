import React from "react";
import Image from "next/image";

import woo1 from "../../../public/images/wocommercesimg/woocom-list-1.webp";
import woo2 from "../../../public/images/wocommercesimg/woocom-list-2.webp";
import woo3 from "../../../public/images/wocommercesimg/woocom-list-3.webp";
import woo4 from "../../../public/images/wocommercesimg/woocom-list-4.webp";
import woo5 from "../../../public/images/wocommercesimg/woocom-list-5.webp";
import woo6 from "../../../public/images/wocommercesimg/woocom-list-6.webp";
import woo7 from "../../../public/images/wocommercesimg/woocom-list-7.webp";
import woo8 from "../../../public/images/wocommercesimg/woocom-list-8.webp";
import woo9 from "../../../public/images/wocommercesimg/woocom-list-9.webp";

const services = [
  {
    title: "Custom WooCommerce Development",
    image: woo1,
    alt:"Custom WooCommerce Development Icon",
    description:
      "Build tailor-made online stores that resonate with your brand’s identity and cater to your customers’ unique needs. Our developers craft custom solutions that blend design and functionality. Whether you need a simple online store or a complex, feature-rich platform, we deliver flexible, scalable solutions that evolve with your business.",
  },
  {
    title: "WooCommerce Store Design",
    image: woo2,
    alt:"WooCommerce Store Design Icon",
    description:
      "Our design team focuses on creating intuitive layouts optimized for user experience. We ensure that every design element is aligned with your brand’s vision while making the shopping journey seamless for your customers. From responsive designs to customized themes, we deliver a visually appealing and functional store that encourages engagement and enhances sales.",
  },
  {
    title: "WooCommerce Plugin Development",
    image: woo3,
    alt:"WooCommerce Plugin Development Icon",
    description:
      "Enhance your store’s capabilities with bespoke plugins. From custom payment gateways to advanced analytics tools, we develop plugins tailored to your requirements. Our developers can create unique features that integrate perfectly with your store, giving you full control over your eCommerce platform.",
  },
  {
    title: "WooCommerce Migration Services",
    image: woo4,
    alt:"WooCommerce Migration Services Icon",
    description:
      "Seamlessly migrate your existing eCommerce store to WooCommerce without data loss or downtime. We ensure all your products, customer data, and order history are accurately transferred to the new platform. With our expert migration services, you can enjoy all the benefits of WooCommerce without the stress of dealing with technical challenges.",
  },
  {
    title: "WooCommerce Maintenance & Support",
    image: woo5,
    alt:"WooCommerce Maintenance Icon",
    description:
      "Keep your online store running at its best with our proactive maintenance and support services. We handle updates, bug fixes, and performance optimization to ensure your store operates smoothly. Our team monitors the platform continuously, addressing any issues before they impact your business.",
  },
  {
    title: "WooCommerce SEO Optimization",
    image: woo6,
    alt:"WooCommerce SEO Optimization Icon",
    description:
      "We optimize your site for search engines to attract organic traffic and increase sales. Our SEO strategies include optimizing product descriptions, meta tags, images, and URLs to ensure better ranking on search engines. By improving your store's SEO, we help you attract more visitors, convert them into customers, and grow your online presence.",
  },
  {
    title: "Third-Party Integration Services",
    image: woo7,
    alt:"Third-Party Integration Services Icon",
    description:
      "From CRMs to payment gateways, we handle it all. Our team ensures that external systems work seamlessly with WooCommerce, streamlining processes and improving efficiency. Whether it’s an inventory management tool, an accounting system, or marketing software, we ensure smooth and reliable integrations to enhance your store’s performance.",
  },
  {
    title: "WooCommerce Speed Optimization",
    image: woo8,
    alt:"WooCommerce Speed Optimization Icon",
    description:
      "Faster stores mean higher conversions. We analyze your store’s performance and apply various optimization techniques, including caching, image compression, and database optimization, to reduce loading times. A faster website not only improves user experience but also boosts your SEO rankings, leading to more traffic and sales.",
  },
  {
    title: "WooCommerce Security Solutions",
    image: woo9,
    alt:"WooCommerce Security Solutions Icon",
    description:
      "Protect your store and customer data with robust security measures. Our team implements SSL, firewalls, and other advanced security protocols to safeguard your website from threats. We perform regular security audits and vulnerability assessments, ensuring your store is always secure.",
  },
];

const DevWoCommercePlatform = () => {
  return (
    <div className="Wocommerceservices-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Our <span> WooCommerce Development Services</span>
            </h2>
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

export default DevWoCommercePlatform;
