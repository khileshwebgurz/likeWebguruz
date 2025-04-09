import React from "react";

const benefits = [
  {
    title: "Scalability & Flexibility",
    content:
      "BigCommerce’s cloud-based infrastructure ensures that your store remains fast, secure, and reliable, even during peak sales seasons, helping you scale without compromising performance.",
    className: "benifit-one",
  },
  {
    title: "Mobile-Optimized & Secure",
    content:
      "With BigCommerce’s robust security features and mobile optimization, your customers will enjoy a safe, smooth, and convenient shopping experience, which translates into higher trust and improved sales.",
    className: "benifit-two",
  },
  {
    title: "Built-in SEO Features",
    content:
      "With BigCommerce’s SEO-friendly structure, your online store has a higher chance of ranking well in search engine results, helping you attract more potential customers and increase conversions.",
    className: "benifit-three",
  },
  {
    title: "Robust Integration Capabilities",
    content:
      "BigCommerce’s open API architecture allows for deep customization and ensures that your store stays connected with all the essential business tools, making management and automation easier than ever.",
    className: "benifit-four",
  },
];

const BigComBenifits = () => {
  return (
    <div className="Magentobenifit-section bigcommerce-benefits py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 heading-main">
            <h2>
              <span>Why Choose BigCommerce</span> for Your Website?
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

export default BigComBenifits;
