import React from "react";
import keyword1 from "../../../public/images/contentseoimgages/content-key-1.webp";
import keyword2 from "../../../public/images/contentseoimgages/content-key-2.webp";
import keyword3 from "../../../public/images/contentseoimgages/content-key-3.webp";
import keyword4 from "../../../public/images/contentseoimgages/content-key-4.webp";
import keyword5 from "../../../public/images/contentseoimgages/content-key-5.webp";
import keyword6 from "../../../public/images/contentseoimgages/content-key-6.webp";
import Image from "next/image";

const ContentWritingServices = () => {
  const services = [
    {
      image: keyword1,
      alt: "Keyword Research Icon",
      title: "Keyword Research",
      description:
        "We identify high-impact keywords to ensure your content targets the right audience and ranks effectively. By understanding search intent and trends, we make sure your content stays relevant and competitive.",
    },
    {
      image: keyword2,
      alt: "Content Idea Icon",
      title: "Content Ideation",
      description:
        "Our creative experts brainstorm unique content ideas that resonate with your brand and audience. We develop concepts that align with your goals and spark engagement, keeping your readers hooked.",
    },
    {
      image: keyword3,
      alt: "Content Creation Icon",
      title: "Content Creation",
      description:
        "From blogs to web pages, we craft engaging, high-quality content tailored to your goals. Our team ensures your content is informative, persuasive, and aligned with your brand’s voice.",
    },
    {
      image: keyword4,
      alt: "Link Building Icon",
      title: "Link Building",
      description:
        "We create strategic content that attracts backlinks, enhancing your site’s authority and visibility. Our approach focuses on building quality links that boost credibility and organic traffic.",
    },
    {
      image: keyword5,
      alt: "Content Optimisation Icon",
      title: "Content Optimisation",
      description:
        "We refine your content with on-page SEO techniques to improve readability, relevance, and search engine rankings. This ensures your content appeals to both users and search engines alike.",
    },
    {
      image: keyword6,
      alt: "Meta Tags Optimisation Icon",
      title: "Title & Meta Tags Optimisation",
      description:
        "We craft compelling titles and meta descriptions that drive clicks and improve rankings. By using targeted keywords, we help your content stand out in crowded search results.",
    },
  ];

  return (
    <div className="content-writing-services-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Our SEO Content </span> Writing Services
            </h2>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="contert-writing-card">
                <Image
                  src={service.image}
                  className="content-seo-icon"
                  alt={service.alt}
                />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentWritingServices;
