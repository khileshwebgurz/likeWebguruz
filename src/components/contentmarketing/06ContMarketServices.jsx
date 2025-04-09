import React from "react";
import Rightarrow from "../../../public/images/revoppsimage/points-1.svg";
import seowork from "../../../public/images/contentmarketingimg/content-marketing-stand.svg";
import Image from "next/image";

const ContMarketServices = () => {
  const benefits = [
    "Our strategy is built on forward-thinking ideas and years of proven expertise. We continuously innovate to deliver results that set your brand apart.",
    "We blend quality copywriting with creative storytelling to ensure that every word resonates with your audience and strengthens your brand message.",
    "Using intelligent distribution methods and consistent monitoring, we make sure your content reaches the right people at the right time, maximizing its impact.",
    "Our clear keyword insights and committed support empower your marketing efforts, ensuring that your content remains a powerful tool for growth and engagement.",
  ];

  return (
    <div className="content-market-services py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 heading-main text-left mb-4 mb-md-5">
            <h2>
              Why Our <span>Content Marketing Stands Out</span>
            </h2>
            <p className="mt-3">
              Our strategy is built on innovation, expertise, and results. We
              offer clear keyword insights, quality copywriting, smart
              distribution methods, consistent monitoring, creative
              storytelling, and dedicated support that ensure your content
              remains a powerful marketing tool.
            </p>
            <div className="icon-text-main-work">
              <ul className="icon-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span>
                      <Image src={Rightarrow} alt="right" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="work-seo-img">
              <Image src={seowork} alt="White-Label SEO Strategies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMarketServices;
