import React from "react";
import Image from "next/image";

import woo1 from "../../../public/images/wordpressdevimages/word-globe-1.webp";
import woo2 from "../../../public/images/wordpressdevimages/word-globe-2.webp";
import woo3 from "../../../public/images/wordpressdevimages/word-globe-3.webp";
import woo4 from "../../../public/images/wordpressdevimages/word-globe-4.webp";
import woo5 from "../../../public/images/wordpressdevimages/word-globe-5.webp";
import woo6 from "../../../public/images/wordpressdevimages/word-globe-6.webp";
import woo7 from "../../../public/images/wordpressdevimages/word-globe-7.webp";
import woo8 from "../../../public/images/wordpressdevimages/word-globe-8.webp";
import woo9 from "../../../public/images/wordpressdevimages/word-globe-9.webp";

const services = [
  {
    title: "Custom WordPress Website Development",
    image: woo1,
    alt: "WordPress Developers",
    description:
      "Get a fully customized WordPress website designed to align perfectly with your business objectives. Whether you need a corporate site, portfolio, blog, or a complex enterprise solution, we build SEO-friendly, responsive, and scalable websites tailored to your unique requirements. Our expert developers focus on intuitive navigation, modern aesthetics, and robust functionality to ensure a seamless user experience.",
  },
  {
    title: "WordPress Theme Development & Customization",
    image: woo2,
    alt: "WordPress CMS Development",
    description:
      "Enhance your brand’s online presence with a visually stunning and high-performing WordPress theme. We create fully custom WordPress themes from scratch or modify existing ones to match your brand identity while ensuring a smooth and engaging user experience. Our themes are optimized for speed, SEO, and mobile responsiveness, making your website stand out while maintaining top-notch functionality.",
  },
  {
    title: "WordPress Plugin Development",
    image: woo3,
    alt: "WordPress Development Company",
    description:
      "Need specialized features for your WordPress website? Our developers craft custom WordPress plugins tailored to enhance your site's functionality. Whether it's integrating third-party tools, automating workflows, adding custom forms, or creating advanced interactive elements, we develop secure and efficient plugins that seamlessly integrate with your website’s architecture.",
  },
  {
    title: "WordPress eCommerce Development (WooCommerce)",
    image: woo4,
    alt: "WordPress Development",
    description:
      "Turn your WordPress website into a powerful online store with our WooCommerce development services. We build secure, scalable, and feature-rich eCommerce platforms tailored to your business needs. From custom product pages and seamless checkout experiences to advanced payment gateway integration and inventory management solutions, we ensure your WooCommerce store is optimized for sales and conversions.",
  },
  {
    title: "WordPress Website Migration & Upgrade",
    image: woo5,
    alt: "WordPress Development Company in India",
    description:
      "Migrating to WordPress from another CMS? We ensure a seamless and secure migration process with zero data loss, preserving your SEO rankings and website structure. Whether you're upgrading an outdated WordPress version or moving from platforms like Shopify, Joomla, or Drupal, we handle everything from database transfers to plugin compatibility, ensuring a smooth transition.",
  },
  {
    title: "WordPress SEO Optimization",
    image: woo6,
    alt: "Setting Icon",
    description:
      "Maximize your website’s search engine visibility with our specialized WordPress SEO services. We optimize on-page elements, improve site speed, structure content for better readability, and implement technical SEO strategies like schema markup, XML sitemaps, and mobile-first indexing. Our goal is to help your website rank higher, attract more organic traffic, and convert visitors into customers.",
  },
  {
    title: "WordPress Website Maintenance & Support",
    image: woo7,
    alt: "Setting Icon",
    description:
      "Keep your WordPress website running smoothly with our comprehensive maintenance and support services. From regular updates, performance monitoring, and security patches to bug fixes, backups, and content updates, we ensure your site remains secure, up-to-date, and fully functional. Our ongoing support helps you focus on your business while we take care of the technical aspects.",
  },
  {
    title: "WordPress Speed Optimization",
    image: woo8,
    alt: "Time Icon",
    description:
      "A slow-loading website can drive users away and harm your search rankings. Our WordPress speed optimization services improve loading times by optimizing images, leveraging caching techniques, minimizing CSS & JavaScript, and implementing content delivery networks (CDNs). We ensure your website runs at peak performance for better user engagement and higher conversions.",
  },
  {
    title: "WordPress Security & Backup Solutions",
    image: woo9,
    alt: "Globe Icon",
    description:
      "Protect your website from cyber threats, malware, and data loss with our advanced security solutions. We implement firewalls, SSL encryption, two-factor authentication, and real-time security monitoring to safeguard your WordPress website. Additionally, our automated backup solutions ensure your data is always recoverable in case of an emergency, keeping your business operations uninterrupted.",
  },
];

const WordpressServices = () => {
  return (
    <div className="Wocommerceservices-section wordpress-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
          <h2 className="mb-2">
            <span>   Our WordPress CMS </span> Development Services
            </h2>
            <p>
              We provide a complete range of WordPress development services to
              help businesses build, optimize, and maintain their websites
              efficiently.
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

export default WordpressServices;
