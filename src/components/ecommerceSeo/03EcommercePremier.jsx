import React from "react";

const seoServices = [
  {
    title: "Keyword Research",
    description:
      "We conduct in-depth keyword research to identify high-performing keywords that match your customers’ intent. Our approach ensures your products are easily discoverable by potential buyers, driving relevant traffic to your site.",
  },
  {
    title: "On-Page Optimization",
    description:
      "Our on-page SEO services focus on enhancing every aspect of your website. We optimize product titles, descriptions, URLs, and metadata to align with search engine requirements and improve your visibility.",
  },
  {
    title: "Technical SEO",
    description:
      "We address issues like site speed, mobile responsiveness, and crawlability to enhance both user experience and SEO performance. By ensuring search engines can easily index your site, we pave the way for better rankings and a seamless browsing experience.",
  },
  {
    title: "Content Creation",
    description:
      "We create engaging, SEO-friendly content to attract and retain customers. From blogs and buying guides to product descriptions, our content strategies are designed to provide value, answer user queries, and establish your brand as an authority in your industry.",
  },
  {
    title: "Link Building",
    description:
      "We focus on acquiring links from credible and relevant websites that enhance your brand’s reputation. Our link-building strategies are ethical and effective, ensuring sustainable growth for your eCommerce business.",
  },
  {
    title: "Local SEO",
    description:
      "We optimize your store for local search by creating localized content, managing your Google My Business profile, and building citations. This ensures that your store appears prominently in local search results, helping you attract nearby customers and drive foot traffic if applicable.",
  },
];

const EcommercePremier = () => {
  return (
    <div className="Ecommerceseo-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> eCommerce SEO Services</span>
            </h2>
            <p>
              Our team delivers comprehensive eCommerce SEO solutions to make
              your online store a success. We focus on strategies that drive
              real results and ensure long-term growth for your business.
            </p>
          </div>

          {seoServices.map((service, index) => (
            <div className="col-12 mb-4" key={index}>
              <div className="ecommerc-box">
                <div className="eccomerce-title">
                  <h3>{service.title}</h3>
                </div>
                <div className="ecommerc-p">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommercePremier;
