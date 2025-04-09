import React from "react";
import Image from "next/image";
import key from "../../../public/images/youtubeimg/youcheck.svg";

const platformData = [
  {
    content:
      "Enjoy complete control over your online store with Magento's open-source nature.",
  },
  {
    content:
      "Deliver seamless shopping experiences across all devices, ensuring accessibility and convenience for customers.",
  },
  {
    content:
      "Optimize metadata, URLs, and site structure to improve search engine rankings and attract more organic traffic.",
  },
  {
    content:
      "Provide a secure and hassle-free checkout experience with multiple payment gateway integrations.",
  },
  {
    content:
      "Offer localized shopping experiences that resonate with diverse audiences and boost conversions.",
  },
  {
    content:
      "Track customer behavior, monitor sales performance, and measure the effectiveness of your marketing campaigns in real time.",
  },
  {
    content:
      "Add new features, extensions, or functionalities without disrupting your existing operations.",
  },
  {
    content:
      "Manage multiple stores, currencies, and tax regulations to cater to international customers with ease.",
  },
  {
    content:
      "Engage customers effectively with advanced marketing tools such as promotional pricing, personalized recommendations, email campaigns, and loyalty programs.",
  },
  {
    content:
      "Magento handles high traffic, large product catalogs, and peak sales periods without compromising performance.",
  },
  {
    content:
      "Seamlessly integrate third-party applications, tools, and services to create a comprehensive ecosystem tailored to your needs.",
  },
  {
    content:
      "Add, update, and organize products efficiently while offering options like configurable products, virtual products, and bundled items to suit diverse customer preferences.",
  },
];

const DevMagentoPlatform = () => {
  return (
    <div className="magenteoplatform-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 heading-main">
            <h2>
              <span> Why Magento? </span> What You Get with This Platform
            </h2>
          </div>
          {platformData.map((item, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="Platform-card">
                <Image src={key} alt="platform-key" />
                <div className="plateform-content">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevMagentoPlatform;
