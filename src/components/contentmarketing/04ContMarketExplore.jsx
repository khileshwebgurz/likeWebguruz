import React from "react";
import Image from "next/image";
import pardot3 from "../../../public/images/contentmarketingimg/content-approach.jpg";
const ContMarketExplore = () => {
  return (
    <div className="content-marketing-explore py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-7 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              More Than Just Words- Our <span>Content Marketing Approach </span>
            </h2>
            <p className="mb-2">
              We take a full-service approach to content marketing that covers
              every aspect of your digital presence. First, we dive deep into
              your brand identity and market trends to set clear, achievable
              goals. Next, we design a customized strategy that includes content
              calendars, topic ideation, and competitive analysis. Our team then
              crafts high-quality, SEO-friendly content that aligns with your
              voice and objectives. Throughout the process, we monitor
              performance using advanced analytics, making adjustments to
              maximize engagement and conversion. We believe in transparent
              communication and work closely with you every step of the way,
              ensuring that your vision is fully realized and your brand message
              remains consistent across all channels.
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="pardot-services-right">
              <Image src={pardot3} alt="Pardot Consulting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMarketExplore;
