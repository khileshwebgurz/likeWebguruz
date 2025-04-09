import React from "react";
import Image from "next/image";
import design1 from "../../../public/images/ecommercewebdesignimg/ecom-design-1.webp";
import design2 from "../../../public/images/ecommercewebdesignimg/ecom-design-2.webp";
import design3 from "../../../public/images/ecommercewebdesignimg/ecom-design-3.webp";
import design4 from "../../../public/images/ecommercewebdesignimg/ecom-design-4.webp";
import design5 from "../../../public/images/ecommercewebdesignimg/ecom-design-5.webp";
import design6 from "../../../public/images/ecommercewebdesignimg/ecom-design-6.webp";
import design7 from "../../../public/images/ecommercewebdesignimg/ecom-design-7.webp";
import design8 from "../../../public/images/ecommercewebdesignimg/ecom-design-8.webp";

const DesignEcomFeatures = () => {
  const features = [
    {
      image: design1,
      title: "User-Centric Interface",
      alt: "User-Centric Interface Icon",
      description:
        "A well-designed interface focuses on the user, ensuring they can navigate effortlessly through the website. Intuitive layouts, easy-to-access menus, and visually appealing elements enhance the user journey, making it simple for visitors to find what they need. By prioritizing user experience, your website becomes a place where customers feel valued and confident in their interactions.",
    },
    {
      image: design2,
      title: "Mobile Optimization",
      alt: "Mobile Optimization Icon",
      description:
        "With the majority of users browsing on mobile devices, having a mobile-optimized website is no longer optional. Mobile-friendly designs ensure your website looks and performs seamlessly on screens of all sizes, from smartphones to tablets. This not only enhances user satisfaction but also improves your search engine rankings, as search engines prioritize mobile-friendly sites.",
    },
    {
      image: design3,
      title: "Fast Loading Speed",
      alt: "Website Loading Speed Icon",
      description:
        "In today’s fast-paced digital world, users expect websites to load instantly. A delay of even a few seconds can lead to lost customers and higher bounce rates. Optimized images, efficient coding, and robust hosting solutions ensure your website delivers lightning-fast loading speeds, keeping users engaged and reducing frustration.",
    },
    {
      image: design4,
      title: "SEO-Friendly Architecture",
      alt: "SEO-Friendly Architecture Icon",
      description:
        "An effective eCommerce website isn’t just for users; it’s also built to attract search engines. SEO-friendly architecture, including proper meta tags, structured data, and clean URLs, ensures your website ranks higher in search results. By integrating SEO best practices into your design, you boost visibility and drive organic traffic to your online store.",
    },
    {
      image: design5,
      title: "Secure Payment Gateways",
      alt: "Secure Payment Gateways Icon",
      description:
        "Trust is a cornerstone of online transactions, and secure payment gateways are essential for building that trust. By offering encrypted and reliable payment solutions, you reassure customers that their sensitive information is safe. This not only enhances user confidence but also reduces cart abandonment rates, driving higher conversions.",
    },
    {
      image: design6,
      title: "Scalability",
      alt: "Scalability Icon",
      description:
        "As your business grows, your website should grow with it. A scalable design ensures your eCommerce platform can handle increased traffic, add new features, and support additional products or services without compromising performance. This adaptability ensures your website remains future-ready and aligned with your evolving business goals.",
    },
    {
      image: design7,
      title: "Clear Call-to-Actions (CTAs)",
      alt: "Call-to-Actions Icon",
      description:
        "CTAs are the driving force behind user engagement and conversions. Strategically placed and visually distinct CTAs guide users to take specific actions, whether it’s making a purchase, signing up for a newsletter, or contacting your team. By making these prompts clear and compelling, you encourage users to interact with your business effectively.",
    },
    {
      image: design8,
      title: "Analytics Integration",
      alt: "Analytics Integration Icon",
      description:
        "Data-driven decision-making is key to success in eCommerce. Analytics integration allows you to track user behavior, identify trends, and measure the performance of your website. By understanding what works and what doesn’t, you can continuously optimize your platform for better engagement, higher conversions, and sustained growth.",
    },
  ];

  return (
    <div className="Designservices-section py-5">
      <div className="container">
        <div className="row">
          <div className=" col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              What Makes a <span>Website Design Successful?</span>
            </h2>
            <p>
              A successful website isn’t just about aesthetics; it’s about
              creating an intuitive, engaging, and conversion-focused platform.
              Here&apos;s what sets apart a winning eCommerce design:
            </p>
          </div>
          {features.map((feature, index) => (
            <div className="col-md-6 col-12 mb-4" key={index}>
              <div className="design-services-one">
                <Image src={feature.image} alt={feature.alt} />
                <div className="design-text">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignEcomFeatures;
