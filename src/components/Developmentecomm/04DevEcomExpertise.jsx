import React from "react";
import Image from "next/image";
import brand1 from "../../../public/images/devecomerceimg/ecom-invest-1.webp";
import brand2 from "../../../public/images/devecomerceimg/ecom-invest-2.webp";
import brand3 from "../../../public/images/devecomerceimg/ecom-invest-3.webp";
import brand4 from "../../../public/images/devecomerceimg/ecom-invest-4.webp";
import brand5 from "../../../public/images/devecomerceimg/ecom-invest-5.webp";
import brand6 from "../../../public/images/devecomerceimg/ecom-invest-6.webp";

const services = [
  {
    id: 1,
    image: brand1,
    title: "Custom eCommerce Website Design",
    para: "We understand that every business is different, which is why we offer personalized design solutions to ensure your website not only looks great but also functions seamlessly. From choosing the right color scheme to optimizing the layout for maximum conversions, we take care of every detail to create a powerful online presence for your business.",
    alt: "Custom eCommerce Website Design Icon",
    features: [
      "Custom themes designed specifically for your brand’s identity and goals.",
      "User-friendly interfaces that enhance customer engagement and interaction.",
      "Conversion-optimized layouts to encourage higher sales and leads.",
      "Mobile-first design strategies to ensure a smooth experience across all devices.",
    ],
  },
  {
    id: 2,
    image: brand2,
    title: "Mobile Responsive Development",
    para: "Our mobile-responsive designs are crafted to adjust automatically to any screen size, ensuring a consistent and hassle-free experience for your customers. From simplified navigation to optimized images, we ensure that your mobile site is fast, functional, and ready to convert visitors into buyers.",
    alt: "Mobile Responsive Development Icon",
    features: [
      "Seamless design adjustments across various screen sizes for all devices.",
      "Fast page load times for mobile users, enhancing user experience and reducing bounce rates.",
      "Touch-friendly interfaces that make browsing and purchasing easy on smartphones and tablets.",
      "Integration of mobile-specific features such as click-to-call buttons and geolocation services.",
    ],
  },
  {
    id: 3,
    image: brand3,
    title: "Payment Gateway Integration",
    para: "We work with top-tier payment gateway providers to ensure your customers can make payments confidently using their preferred methods, whether it’s credit cards, PayPal, or other online wallets. Our team ensures smooth integration with robust security protocols, such as SSL encryption, to protect sensitive information.",
    alt: "Payment Gateway Icon",
    features: [
      "Integration with a wide range of payment gateways such as Stripe, PayPal, and Authorize.Net.",
      "Secure payment processing with SSL encryption for customer data protection.",
      "Multi-currency and multi-payment option support for global customers.",
      "Real-time transaction processing with fraud protection mechanisms in place.",
    ],
  },
  {
    id: 4,
    image: brand4,
    title: "SEO & Performance Optimization",
    para: "Getting your site noticed is critical, and we help you achieve that through on-page and off-page SEO techniques, ensuring that your eCommerce site ranks well in search engine results. Alongside SEO, we focus on optimizing your website’s performance to ensure quick loading times, minimal downtime, and smooth navigation.",
    alt: "SEO & Performance Optimization Icon",
    features: [
      "Comprehensive keyword research and SEO strategy to target your audience effectively.",
      "On-page SEO optimization, including meta tags, header tags, and alt text for images.",
      "Page speed optimization to ensure fast load times and a better user experience.",
      "Regular monitoring and analytics to track performance and refine strategies.",
    ],
  },
  {
    id: 5,
    image: brand5,
    title: "Inventory & Order Management Solutions",
    para: "We provide solutions that enable you to easily track, manage, and optimize your inventory while ensuring timely order fulfillment. With real-time updates and automated alerts, your business can stay on top of stock levels, reduce the risk of overstocking or running out of stock, and improve the efficiency of your supply chain.",
    alt: "Inventory & Order Management Icon",
    features: [
      "Real-time inventory tracking and automated alerts for low stock levels.",
      "Seamless integration with third-party logistics and fulfillment centers.",
      "Easy management of customer orders, returns, and exchanges.",
      "Detailed reporting and analytics to optimize stock management and sales strategies.",
    ],
  },
  {
    id: 6,
    image: brand6,
    title: "eCommerce Support & Maintenance",
    para: "Our team provides continuous support and maintenance services to ensure your eCommerce website stays up to date with the latest features, security patches, and performance improvements. From bug fixes to software updates and scalability enhancements, we handle all aspects of site maintenance.",
    alt: "eCommerce Support & Maintenance Icon",
    features: [
      "Regular software updates to ensure security and compatibility with the latest technologies.",
      "Proactive monitoring and troubleshooting to identify and resolve issues before they affect your site.",
      "Site performance and speed optimization to maintain a smooth user experience.",
      "Ongoing improvements to ensure the website remains competitive and responsive to market changes.",
    ],
  },
];

const DevEcomExpertise = () => {
  return (
    <div className="Amazonoffer-section ecom-development-expertise py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> eCommerce Development Services</span>
            </h2>
            <p>
              Comprehensive solutions that meet your every business need, from
              design to maintenance.
            </p>
          </div>
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="amazon-card">
                <Image src={service.image} alt={service.alt} />
                <h4>{service.title}</h4>
                <p>{service.para}</p>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevEcomExpertise;
