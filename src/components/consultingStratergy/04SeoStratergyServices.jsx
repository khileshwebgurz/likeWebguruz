import React from "react";
import Image from "next/image";
import seoaudit1 from "../../../public/images/seoconsultingimg/stratergy-seo-1.webp";
import seoaudit2 from "../../../public/images/seoconsultingimg/stratergy-seo-2.webp";
import seoaudit3 from "../../../public/images/seoconsultingimg/stratergy-seo-3.webp";
import seoaudit4 from "../../../public/images/seoconsultingimg/stratergy-seo-4.webp";
import seoaudit5 from "../../../public/images/seoconsultingimg/stratergy-seo-5.webp";
import seoaudit6 from "../../../public/images/seoconsultingimg/stratergy-seo-6.webp";

const cardData = [
  {
    image: seoaudit1,
    alt: "SEO Audits Icon",
    title: "SEO Audits",
    description:
      "Identify and fix critical issues affecting your site’s performance. Our in-depth audits cover everything from broken links to meta tags, ensuring your website is optimized for search engines and user experience. This foundational step helps us uncover opportunities to improve your site’s visibility.",
  },
  {
    image: seoaudit2,
    alt: "Content Optimization Icon",
    title: "Content Optimization",
    description:
      "Enhance on-page content for better engagement and ranking. We refine your headlines, meta descriptions, and body text to make your content more appealing to both search engines and users. This ensures your website delivers value while climbing the SERPs.",
  },
  {
    image: seoaudit3,
    alt: "Link Building Icon",
    title: "Link Building",
    description:
      "Earn high-quality backlinks for improved domain authority. Our team focuses on building relationships with reputable websites to secure links that enhance your site’s credibility. Quality links are a vital part of any successful SEO strategy.",
  },
  {
    image: seoaudit4,
    alt: "Keyword Research Icon",
    title: "Keyword Research & Analysis",
    description:
      "Discover high-performing keywords to drive traffic. We analyze search trends and your competitors to identify keywords that align with your audience’s intent. By targeting the right terms, we help you attract quality traffic that converts.",
  },
  {
    image: seoaudit5,
    alt: "Technical SEO Icon",
    title: "Technical SEO",
    description:
      "Improve site speed, mobile compatibility, and crawlability. We address backend issues that might hinder your site’s performance, such as slow load times and broken scripts. A technically sound website is crucial for search engine indexing and user satisfaction.",
  },
  {
    image: seoaudit6,
    alt: "Performance Tracking Icon",
    title: "Performance Tracking & Reporting",
    description:
      "Get clear insights with regular updates and reports. We provide detailed analytics on traffic, rankings, and conversions, allowing you to see the impact of our efforts. Transparent reporting helps us refine strategies for even better results.",
  },
];

const SeoStratergyServices = () => {
  return (
    <div className="Consultingseo-section py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our SEO Strategy & <span> Consulting Services </span>
            </h2>
          </div>
          {cardData.map((card, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="seo-consulting-card">
                <div className="consulting-img">
                  <Image src={card.image} alt={card.alt} />
                </div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoStratergyServices;
