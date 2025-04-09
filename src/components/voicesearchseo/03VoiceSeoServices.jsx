import React from "react";

const VoiceSeoServices = () => {
  const voiceServices = [
    {
      title: "Conversational Keyword Optimization",
      description:
        "We research and implement natural, long-tail keywords that align with how people speak during voice searches. This approach increases your chances of being featured in voice search results.",
    },
    {
      title: "Structured Data Implementation",
      description:
        "By adding schema markup to your website, we help search engines better understand your content, improving the accuracy of voice search results.",
    },
    {
      title: "Local SEO Enhancements",
      description:
        "Voice searches often focus on local queries. We optimize your business listings, create location-specific content, and ensure your website is voice-search-friendly for nearby users.",
    },
  ];

  return (
    <div className="Voiceservices-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main">
            <h2>
              <span>Our Voice Search</span> <br /> Optimization Services
            </h2>
          </div>
          <div className="col-md-6 col-12">
            <p>
              Our Voice Search Optimization services are designed to enhance
              your website’s compatibility with voice search technology. We
              analyze how people speak and search to align your website’s
              content with their queries. Whether it’s optimizing keywords for
              conversational tones or improving your website’s local search
              results, we’ve got you covered.
            </p>
            <p>
              Voice search is different from traditional search, requiring a
              more natural and conversational tone in your content. We focus on
              implementing structured data, long-tail keywords, and local SEO
              strategies to help you stand out. With our expertise, your website
              can rank better and deliver faster, more relevant results to
              users.
            </p>
          </div>
          <div className="col-12">
            <div className="titel-voice mt-4">
              <h4>Tailored Solutions for Voice Search Success</h4>
            </div>
          </div>
          {voiceServices.map((service, index) => (
            <div className="col-md-4 col-12 mb-4 mb-md-0" key={index}>
              <div className="voice-card">
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

export default VoiceSeoServices;
