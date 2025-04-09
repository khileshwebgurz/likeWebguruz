import React from "react";
import Image from "next/image";
import pardot3 from "../../../public/images/pardotimg/camp-pardot.jpg";
const PardotCampaign = () => {
  return (
    <div className="pardot-campaign py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-7 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              <span>Pardot Campaign </span> Services
            </h2>
            <p className="mb-2">
              Our Pardot Campaign Services represent the pinnacle of
              data-driven, strategically crafted marketing solutions. We don&apos;t
              just create campaigns; we engineer precision marketing experiences
              that speak directly to your target audience&apos;s needs, pain points,
              and aspirations.
            </p>
            <p className="mb-2">
              Our expert team combines deep technical expertise with creative
              marketing strategy to develop campaigns that do more than just
              communicate- they convert. We leverage Pardot&apos;s advanced
              segmentation, personalization, and automation capabilities to
              create multi-touch, intelligent campaign ecosystems.
            </p>
            <p className="mb-0">
              From initial concept to final execution and continuous
              optimization, our Pardot campaign services ensure that every
              marketing initiative is a targeted, measurable, and
              high-performing asset for your business.
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

export default PardotCampaign;
