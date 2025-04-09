import React from "react";

const shopifyTrends = [
  {
    title: "AI-Powered Personalization",
    description:
      "Artificial intelligence allows your Shopify store to deliver tailored shopping experiences. We integrate AI tools that analyze customer behavior, preferences, and past purchases to recommend products and content that truly resonate. This not only boosts sales but also fosters customer loyalty.",
  },
  {
    title: "Augmented Reality (AR) Features",
    description:
      "AR technology enhances customer engagement by allowing shoppers to visualize products in their environment before purchasing. From virtual fitting rooms to 3D product previews, we bring AR capabilities to your Shopify store to elevate your sales strategy.",
  },
  {
    title: "Voice Search Optimization",
    description:
      "Voice search is transforming how customers interact with online stores. We enable your Shopify store to accommodate voice-activated commands, ensuring easy product discovery and a more inclusive shopping experience for tech-savvy users and those with accessibility needs.",
  },
  {
    title: "Sustainable eCommerce Practices",
    description:
      "More consumers are prioritizing eco-conscious brands. We help you integrate Shopify features like carbon-neutral shipping, eco-friendly packaging options, and sustainability reporting tools, enabling you to appeal to environmentally aware shoppers.",
  },
  {
    title: "Headless Commerce Integration",
    description:
      "Headless commerce separates the front-end customer experience from back-end operations, providing greater flexibility and faster load times. We implement headless Shopify solutions that allow you to scale effortlessly and integrate custom functionalities without disrupting user experience.",
  },
  {
    title: "Social Commerce Integration",
    description:
      "Social media platforms are becoming a vital part of the eCommerce ecosystem. We enable seamless integration of your Shopify store with platforms like Instagram, Facebook, and TikTok, allowing customers to shop directly from your social media pages.",
  },
];

const DevShopifyReasons = () => {
  return (
    <div className="shopifychoose-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-5">
            <h2>
              <span> Latest Shopify Development </span> Trends We Implement
            </h2>
            <p>
              Stay ahead of the curve by incorporating the latest Shopify
              innovations into your online store. We ensure your store is not
              just functional but also future-proof.
            </p>
          </div>
        </div>

        <div className="row row-why">
          {shopifyTrends.map((trend, index) => (
            <div className="col-md-6 col-12" key={index}>
              <div className="shopify-choose-card">
                <h5>{trend.title}</h5>
                <p>{trend.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevShopifyReasons;
