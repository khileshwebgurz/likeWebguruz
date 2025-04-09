import React from "react";

const services = [
  {
    title: "Website Internationalization",
    description:
      "Ensure your website is ready for international audiences with proper geo-targeting, language optimization, and region-specific content, making your site more accessible and engaging for visitors from different countries.",
  },
  {
    title: "Global Market Analysis",
    description:
      "We analyze global markets to identify potential opportunities, enabling targeted strategies for each region, and ensuring your business stands out in competitive international markets.",
  },
  {
    title: "Competitor Analysis",
    description:
      "We monitor and analyze your international competitors to ensure you're always one step ahead, enabling you to fine-tune your strategy and outperform competitors in key markets.",
  },
  {
    title: "Multilingual SEO",
    description:
      "We optimize your website for different languages, improving search visibility in non-native languages, which helps to attract a broader international audience and enhances user experience across regions.",
  },
  {
    title: "International Keyword Research",
    description:
      "We conduct comprehensive keyword research tailored to global search trends to help your site rank higher, driving more relevant traffic from various regions and languages.",
  },
  {
    title: "Local SEO for International Markets",
    description:
      "We focus on optimizing your site for local search engines, enhancing its reach in specific countries, and driving region-specific traffic that converts into loyal customers.",
  },
];

const InternetServices = () => {
  return (
    <div className="Internalseo-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Our <span>International SEO Services</span>
            </h2>
            <p>
              Our international SEO services are designed to boost your
              visibility and online presence, helping
              <br /> you tap into global markets and achieve lasting success.
            </p>
          </div>
          {services.map((service, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="internal-card">
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

export default InternetServices;
