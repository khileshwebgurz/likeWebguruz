import React from "react";
import Image from "next/image";
import pardot3 from "../../../public/images/graphmotionimg/motion-services.svg";
const ContInfoStory = () => {
  return (
    <div className="infographic-words py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-5 col-12">
            <div className="pardot-services-right">
              <Image src={pardot3} alt="Pardot Consulting" />
            </div>
          </div>
          <div className="col-md-7 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              Take Your Story Beyond <span>Words with Infographics </span>
            </h2>
            <p className="mb-2">
              Infographics are a powerful way to simplify information and make
              it more engaging, shareable, and memorable. At WebGuruz, we design
              data-driven, visually appealing infographics that turn complex
              topics into easy-to-digest content. Our creative team crafts
              custom infographics tailored to your brand’s style, ensuring a
              professional and cohesive look.
            </p>
            <p className="mb-2">
              With WebGuruz’s Infographic Design Services, your message becomes
              more than just words- it becomes an experience your audience will
              remember.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContInfoStory;
