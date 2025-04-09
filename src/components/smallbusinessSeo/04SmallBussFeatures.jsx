import React from "react";
import Image from "next/image";
import small1 from "../../../public/images/smallbussinesimg/buss-expand-1.webp";
import small2 from "../../../public/images/smallbussinesimg/buss-expand-2.webp";
import small3 from "../../../public/images/smallbussinesimg/buss-expand-3.webp";
import key1 from "../../../public/images/smallbussinesimg/small-buss-key-1.webp";
import key2 from "../../../public/images/smallbussinesimg/small-buss-key-2.webp";
import key3 from "../../../public/images/smallbussinesimg/small-buss-key-3.webp";
import key4 from "../../../public/images/smallbussinesimg/small-buss-key-4.webp";
import key5 from "../../../public/images/smallbussinesimg/small-buss-key-5.webp";
import key6 from "../../../public/images/smallbussinesimg/small-buss-key-6.webp";
import key7 from "../../../public/images/smallbussinesimg/small-buss-key-7.webp";
import key8 from "../../../public/images/smallbussinesimg/small-buss-key-8.webp";

const SmallBussFeatures = () => {
  // Data for features and services
  const features = [
    { image: small1, title: "Increased Organic Traffic", description: "Small Business SEO can significantly increase the organic traffic to your website by optimizing content and improving search engine rankings. This leads to more potential customers visiting your site without having to pay for ads." },
    { image: small2, title: "Improved Local Visibility", description: "Local SEO strategies are designed to boost your business in local search results, making it easier for customers in your area to find your products or services. With location-specific SEO tactics, we help you dominate local search rankings." },
    { image: small3, title: "Higher ROI", description: "With SEO being a cost-effective marketing strategy, small businesses can see a better return on investment compared to other paid advertising options. By targeting the right keywords and optimizing your site, you can attract high-quality leads." }
  ];

  const seoServices = [
    { image: key1, title: "Website Audit", description: "We conduct in-depth audits of your website to identify areas for improvement. This helps ensure your site is fully optimized for search engines and user experience." },
    { image: key2, title: "Content Creation & Marketing", description: "We help create high-quality, engaging content that resonates with your audience while improving search engine rankings, driving traffic, and increasing conversions." },
    { image: key3, title: "Keyword Research", description: "We perform detailed keyword research to identify the most relevant and profitable keywords for your business, ensuring that your content targets what customers are searching for." },
    { image: key4, title: "Local SEO Optimization", description: "By optimizing your business for local searches, we ensure your business appears in local search results and maps, helping you attract customers nearby." },
    { image: key5, title: "On-Page Optimization", description: "Our on-page SEO strategies include optimizing your website’s title tags, meta descriptions, headers, and content to improve your site’s visibility and ranking." },
    { image: key6, title: "Link Building", description: "Our link-building strategies help improve your website’s authority by acquiring high-quality backlinks from relevant and trusted websites." },
    { image: key7, title: "SEO Analytics & Reporting", description: "We provide detailed reports on your website’s performance, helping you track progress and make data-driven decisions for future SEO improvements." },
    { image: key8, title: "Mobile Optimization", description: "We optimize your website for mobile users, ensuring it functions seamlessly across all devices and boosting your SEO rankings." }
  ];

  return (
    <div className="Smallbussineskey-section py-5">
      <div className="container">
        {/* Key Benefits Section */}
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Key Benefits of
              <br /> <span> Small Business SEO Services </span>
            </h2>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 col-12 mb-4 mb-md-0">
              <div className="small-bussines-card">
                <div className="small-img">
                  <Image src={feature.image} alt={feature.title} />
                </div>
                <h4 className="mb-3">
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Small Business SEO Services Section */}
        <div className="row">
          <div className="col-12 heading-main text-center my-4 my-md-5">
            <h2>
              Our <span>Small Business SEO Services</span>
            </h2>
          </div>
          {seoServices.map((service, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className="small-bussines-card-two">
                <div className="img-text-card">
                  <div className="small-img-2">
                    <Image src={service.image} alt={service.title} />
                  </div>
                  <div className="text-side">
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

export default SmallBussFeatures;
