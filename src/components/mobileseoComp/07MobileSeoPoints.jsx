import React from "react";
import checkimg from "../../../public/images/mobileseoimg/Checked.svg";
import Image from "next/image";

const MobileSeoPoints = () => {
  const seoServices = [
    {
      title: "Technical SEO Audits",
      description:
        "Our technical SEO audits identify and fix underlying issues that could be affecting your website's performance. We evaluate everything from site speed and mobile-friendliness to crawlability and security, ensuring your site is fully optimized for search engines.",
    },
    {
      title: "Off-Page SEO and Link Building",
      description:
        "Off-page SEO and link building help boost your website's authority by acquiring high-quality backlinks from reputable sites. This strategy improves your site’s credibility and search rankings, driving more organic traffic.",
    },
    {
      title: "Voice Search Optimization",
      description:
        "Voice search optimization is tailored to help your website rank for voice queries. We optimize content with conversational keywords and natural language, making it easier for voice assistants to find and recommend your business.",
    },
    {
      title: "On-Page SEO Optimization",
      description:
        "On-page SEO optimization focuses on enhancing individual web pages to improve their ranking in search results. We optimize content, meta tags, headers, and images, making sure your site is both user-friendly and search engine-friendly.",
    },
    {
      title: "E-commerce SEO",
      description:
        "E-commerce SEO ensures that your online store ranks higher in search results, helping you reach more customers. We optimize product pages, improve site structure, and implement strategies that enhance visibility and sales for your online business.",
    },
    {
      title: "Video SEO",
      description:
        "Video SEO optimizes your video content for search engines, helping your videos rank higher on platforms like YouTube and Google. We focus on video titles, descriptions, tags, and thumbnails to enhance visibility and engagement.",
    },
  ];

  return (
    <div className="Mobilesearch-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Additional <span>SEO Services</span>
            </h2>
          </div>

          {seoServices.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="whymobile-seo-card mobile-search-card">
                <div className="mobile-img-text">
                  <div className="why-img">
                    <Image src={checkimg} alt="check-img" />
                  </div>
                  <div className="why-content">
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

export default MobileSeoPoints;
