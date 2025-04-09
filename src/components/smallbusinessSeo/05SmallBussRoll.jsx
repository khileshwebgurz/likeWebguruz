import React from "react";

const cardData = [
  {
    title: "Boosts Online Visibility",
    description:
      "SEO helps small businesses get noticed online, driving more traffic to your website and increasing brand awareness.",
  },
  {
    title: "Drives Targeted Traffic",
    description:
      "SEO helps attract relevant visitors who are actively searching for your products or services, increasing the likelihood of conversions.",
  },
  {
    title: "Builds Credibility and Trust",
    description:
      "A well-optimized website builds trust with customers. Appearing at the top of search results signals to users that your business is reputable and reliable.",
  },
  {
    title: "Cost-Effective Marketing",
    description:
      "Compared to traditional advertising, SEO provides a more affordable way for small businesses to reach a larger audience, especially in the long term.",
  },
];

const SmallBussRoll = () => {
  return (
    <div className="Smallbussinessgrowth-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              The Role of SEO for <span> Small Businesses</span>
            </h2>
          </div>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-12 mb-4 mb-lg-0"
            >
              <div className="growth-card">
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallBussRoll;
