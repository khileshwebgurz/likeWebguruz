import React from "react";

const GoogleAdsServices = () => {
  const googleAdsServices = [
    {
      title: "Campaign Strategy Development",
      description: "We create targeted strategies to help you reach your business goals efficiently.",
    },
    {
      title: "Landing Page Optimization",
      description: "We ensure your landing pages are optimized for conversions.",
    },
    {
      title: "Display Ads",
      description: "Get noticed with creative display ads across the Google Display Network.",
    },
    {
      title: "Keyword Research & Targeting",
      description: "Our team finds the best keywords to get your ads in front of your ideal customers.",
    },
    {
      title: "Bid Management & Strategy",
      description: "Our experts manage your bids to maximize your ad spend while maintaining results.",
    },
    {
      title: "Video Ads",
      description: "Engage users with impactful video ads on YouTube and other platforms.",
    },
    {
      title: "Ad Creation & Design",
      description: "We design compelling ads that capture attention and encourage action.",
    },
    {
      title: "Remarketing Campaigns",
      description: "Bring back potential customers who’ve previously interacted with your website.",
    },
    {
      title: "Google Shopping Ads",
      description: "For e-commerce businesses, we help you get your products in front of the right shoppers.",
    },
  ];

  return (
    <div className="Ourgooglead-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> Google Ads Services</span>
            </h2>
            <p>
              We offer a wide range of Google Ads services designed to suit the
              specific needs of your business. From campaign creation to ongoing
              management, our services ensure that your ads are always optimized
              for maximum performance.
            </p>
          </div>
          {googleAdsServices.map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
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

export default GoogleAdsServices;
