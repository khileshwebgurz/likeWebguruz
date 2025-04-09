import React from "react";

const benefits = [
  {
    title: "Seamless Scalability for Business Growth",
    content:
      "Magento empowers your business to expand without limitations. With its modular architecture and flexible capabilities, your online store can easily accommodate increased traffic, product catalogs, and new features as your business grows. Whether you&apos;re entering new markets or launching additional product lines, Magento ensures your platform evolves effortlessly to support your growth ambitions.",
    className: "benifit-one",
  },
  {
    title: "Comprehensive Security to Protect Data",
    content:
      "Security is a top priority in today’s digital landscape, and Magento provides robust tools to safeguard your business and customer data. With features like data encryption, secure payment gateways, and regular security patches, your platform is protected against cyber threats. This ensures peace of mind for you and trust from your customers.",
    className: "benifit-two",
  },
  {
    title: "Enhanced Performance for Better User Experience",
    content:
      "A fast, responsive website is critical for customer satisfaction and retention. Magento’s advanced caching, database optimization, and performance tools enable your store to deliver lightning-fast loading times, smooth navigation, and seamless transactions. By minimizing delays and downtime, your users enjoy an exceptional shopping experience that keeps them coming back.",
    className: "benifit-three",
  },
  {
    title: "Unmatched Customization for Unique Branding",
    content:
      "Every brand has its own story, and Magento lets you tell yours with unmatched customization options. From tailored themes and layouts to personalized customer experiences and unique features, Magento provides the tools to make your store a true reflection of your brand. This level of flexibility helps you stand out in the crowded eCommerce marketplace.",
    className: "benifit-four",
  },
];

const DevMagentoBenifit = () => {
  return (
    <div className="Magentobenifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 heading-main">
            <h2>
              Benefits of Custom <span>Magento Website Development</span>
            </h2>
          </div>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className={`benifit-card ${benefit.className}`}>
                <h5>{benefit.title}</h5>
                <p>{benefit.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevMagentoBenifit;
