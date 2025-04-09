import React from "react";
import Image from "next/image";
import pardot3 from "../../../public/images/graphmotionimg/graphic-futtue.jpg";
const ContInfoService = () => {
  return (
    <div className="infographic-motion-services py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-5 col-12">
            <div className="pardot-services-right">
              <Image src={pardot3} alt="Pardot Consulting" />
            </div>
          </div>
          <div className="col-md-7 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              The Future of <span>Digital Content? </span>
            </h2>
            <p className="mb-2">
              Today, visual storytelling is the key to effective communication.
              With WebGuruz’s expert Infographics & Motion Graphics services,
              you can transform your content strategy and keep your audience
              engaged. Let’s craft compelling visual stories that drive results.
            </p>
            <p className="mb-0">
              As digital consumption grows, static content alone is no longer
              enough to captivate audiences. Businesses must embrace dynamic,
              visually appealing formats that simplify information and create a
              lasting impact. Infographics and motion graphics help brands cut
              through the noise, improve retention, and encourage user
              interaction. Stay ahead of the competition with stunning visuals
              that tell your story powerfully and persuasively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContInfoService;
