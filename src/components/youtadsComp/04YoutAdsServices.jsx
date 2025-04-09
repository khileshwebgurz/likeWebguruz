import React from "react";

const YoutAdsServices = () => {
  const services = [
    {
      title: "YouTube Channel Creation",
      description:
        "We assist you in laying the foundation for success by designing a professional banner, crafting an engaging description, and setting up your account for maximum impact.",
    },
    {
      title: "Effective YouTube Audience Targeting",
      description:
        "We employ cutting-edge targeting strategies to connect your YouTube content with the perfect audience, ensuring it engages the right viewers for optimal results.",
    },
    {
      title: "YouTube Analytics",
      description:
        "Our YouTube Advertising company offers detailed insights into your channel's performance, helping you understand your audience and optimize your content strategy for better results.",
    },
    {
      title: "Keyword & Title Optimization",
      description:
        "Our YouTube marketing experts craft tailored thumbnails and compelling video titles that capture attention and drive clicks effectively.",
    },
    {
      title: "Video Syndication",
      description:
        "Our YouTube video marketing services distribute your videos across various platforms, boosting views and expanding your reach to a broader audience.",
    },
    {
      title: "Strategy for Audience Engagement",
      description:
        "We create tailored strategies to boost viewer interaction, such as comments, likes, and shares, helping build a dedicated community.",
    },
    {
      title: "YouTube SEO Optimization",
      description:
        "Our digital marketing specialists enhance your video’s SEO, ensuring your content is easily discoverable and ranks higher on YouTube.",
    },
    {
      title: "Optimized YouTube Ads",
      description:
        "Boost your reach and engagement with targeted YouTube ads. Whether it's pre-roll or display, our YouTube marketing specialists ensure your message effectively reaches your target audience.",
    },
    {
      title: "YouTube Monetization",
      description:
        "Boost your revenue with our tailored monetization strategies, featuring optimized ad placements, strategic sponsorships, and merchandise sales integration.",
    },
  ];

  return (
    <div className="Youtubeservices-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              <span>YouTube Advertising Services</span> We Provide
            </h2>
            <p>
              Boost your digital presence with our all-inclusive{" "}
              <b>YouTube Ads Services.</b> From setting up your channel to
              precision audience targeting, we help businesses amplify their
              reach, drive engagement, and achieve higher conversions on the
              world’s leading video platform.
            </p>
          </div>
        </div>
        <div className="row row-youtube">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="youtube-card">
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

export default YoutAdsServices;
