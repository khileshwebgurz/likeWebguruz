import React from "react";
import checknew from "../../../public/images/contentseoimgages/check-new.svg";
import Image from "next/image";

const ContentSeoMatter = () => {
  const items = [
    {
      title: "Rank Higher, Get Found Faster",
      description:
        "Our SEO content ensures your business ranks at the top of search results, putting you ahead of competitors.",
    },
    {
      title: "Drive More Traffic Without Paying for Ads",
      description:
        "Organic traffic is free, and with optimized content, you can consistently attract potential customers without breaking your budget.",
    },
    {
      title: "Build Trust and Authority",
      description:
        "High-quality, relevant content positions you as an expert in your industry, making customers more likely to choose you.",
    },
    {
      title: "Turn Visitors Into Buyers",
      description:
        "Our content doesn’t just bring traffic- it’s designed to engage, persuade, and convert, helping you grow your bottom line.",
    },
  ];

  return (
    <div className="Writingmater-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why SEO Content <span> Writing Matters?</span>
            </h2>
            <p>
              SEO content writing is more than just words on a page- it&apos;s a
              powerful tool to grow your business.
            </p>
          </div>
          {items.map((item, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className="wiriting-mater-box">
                <div className="check-text">
                  <div className="checkicon">
                    <Image
                      src={checknew}
                      className="checkicon"
                      alt="check-icon"
                    />
                  </div>
                  <div className="check-text">
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="col-md-12 col-12 text-center">
            <p>
              By combining strategic keywords with compelling storytelling, we
              help you stand out, attract your target audience, and convert
              clicks into customers. As a leading SEO Content Writing Agency, we
              craft expertly optimized content that boosts visibility,
              strengthens credibility, and drives sales, helping your business
              stay ahead in a competitive digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSeoMatter;
