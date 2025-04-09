import React from "react";
import keyword1 from "../../../public/images/contentmarketingimg/content-design-1.png";
import keyword2 from "../../../public/images/contentmarketingimg/content-design-2.png";
import keyword3 from "../../../public/images/contentmarketingimg/content-design-3.png";
import keyword4 from "../../../public/images/contentmarketingimg/content-design-4.png";
import keyword5 from "../../../public/images/contentmarketingimg/content-design-5.png";
import keyword6 from "../../../public/images/contentmarketingimg/content-design-6.png";
import Image from "next/image";

const ContMarketRevenue = () => {
  const services = [
    {
      image: keyword1,
      alt: "Online Visibility Icon",
      title: "Increased Online Visibility",
      description:
        "We help you rank higher in search results by crafting SEO-optimized content that draws more organic traffic. With detailed research and keyword strategies, your website gains visibility, making it easier for potential clients to find your business online.",
    },
    {
      image: keyword2,
      alt: "Brand Authority Icon",
      title: "Stronger Brand Authority",
      description:
        "Our content builds trust and positions you as an expert in your industry. By providing valuable and accurate information, your audience sees you as a reliable resource, enhancing your brand’s reputation.",
    },
    {
      image: keyword3,
      alt: "Engagement Rates Icon",
      title: "Higher Engagement Rates",
      description:
        "Engaging content encourages visitors to interact with your website. Our content is designed to speak directly to your audience’s interests and needs, resulting in longer visit times and higher engagement metrics.",
    },
    {
      image: keyword4,
      alt: "Conversion Rates Icon",
      title: "Better Conversion Rates",
      description:
        "With persuasive call-to-actions and well-crafted narratives, our content guides visitors through the customer journey, turning readers into loyal customers.",
    },
    {
      image: keyword5,
      alt: "Customer Retention Icon",
      title: "Improved Customer Retention",
      description:
        "Regularly updated content keeps your audience informed and engaged. This continual interaction builds a long-term relationship with your customers, ensuring they return for more valuable insights.",
    },
    {
      image: keyword6,
      alt: "Measurable Results Icon",
      title: "Measurable Results",
      description:
        "We use advanced analytics to track the performance of your content. By analyzing user behavior and engagement metrics, we can fine-tune your strategy for even better results over time.",
    },
  ];
  return (
    <div className="marketing-revenue py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              How Does Our <span>Content Marketing Help?</span>
            </h2>
            <p>
              Our content marketing transforms your online presence by building
              engaging narratives that not only captivate your audience but also
              foster meaningful relationships and brand loyalty.
            </p>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="market-revenue-card">
                <Image
                  src={service.image}
                  className="market-revenue-icon"
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

export default ContMarketRevenue;
