import React from "react";
import Image from "next/image";
import pardot3 from "../../../public/images/contentmarketingimg/content-heart.jpg";
const ContMarketExpand = () => {
  return (
    <div className="content-marketing-presence py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-5 col-12">
            <div className="pardot-services-right">
              <Image src={pardot3} alt="Pardot Consulting" />
            </div>
          </div>
          <div className="col-md-7 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              The Heart of <span> Our Content Marketing </span>
            </h2>
            <p className="mb-2">
              Our Content Marketing service is not just about writing; it’s
              about telling your story in a way that connects with your audience
              and drives action. We start by understanding your brand, industry,
              and target market. This research-driven approach helps us craft
              content that is both relevant and engaging.
            </p>
            <p className="mb-2">
              Our process includes detailed keyword research, competitive
              analysis, and a thorough understanding of your business goals. We
              then create a content strategy that spans blog posts, social media
              updates, white papers, and more. Each piece is optimized for SEO,
              ensuring that your website ranks higher on search engines and
              reaches the right people.
            </p>
            <p className="mb-0">
              At WebGuruz, our writers blend creativity with strategy to produce
              content that not only informs but also inspires. Our team stays
              updated with the latest trends in digital marketing to ensure your
              content remains fresh and effective in an ever-changing online
              landscape. Trust our expertise to bring your brand story to life
              through compelling narratives that resonate with your audience and
              build lasting connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMarketExpand;
