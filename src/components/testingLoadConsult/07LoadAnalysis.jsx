import React from "react";

const LoadAnalysis = () => {
  const googleAdsServices = [
    {
      title: "Increased Revenue",
      description:
        "Faster websites have higher conversion rates. Our testing helps ensure your site performs optimally even during peak traffic times.",
    },
    {
      title: "Reduced Infrastructure Costs",
      description:
        "Identifying exact capacity requirements helps you optimize your hosting and infrastructure investments.",
    },
    {
      title: "Enhanced User Satisfaction",
      description:
        "Consistent performance under all conditions means happier users who are more likely to return and recommend your business.",
    },
    {
      title: "Improved Search Rankings",
      description:
        "Website speed is a key factor in search engine rankings. Better performance can lead to better visibility online.",
    },
   
  ];

  return (
    <div className="load-testing-analysis py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
            Boost Your Business with <span>  Professional Load Testing</span>
            </h2>
          </div>
          {googleAdsServices.map((service, index) => (
            <div className=" col-md-6 col-12 mb-4" key={index}>
              <div className="google-card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadAnalysis;
