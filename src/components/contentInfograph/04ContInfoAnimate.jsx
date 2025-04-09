import React from "react";
import Image from "next/image";
import pardot3 from "../../../public/images/graphmotionimg/motion-animate.svg";
const ContInfoAnimate = () => {
  return (
    <div className="infographic-motion-animate py-5">
      <div className="container">
        <div className="row text-md-start text-center">
          <div className="col-md-7 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              Bring Life to Your Ideas <span>with Motion Graphics </span>
            </h2>
            <p className="mb-2">
              Motion graphics take static content to the next level by
              incorporating movement, animations, and storytelling. Whether you
              need animated explainer videos, product showcases, social media
              content, or marketing campaigns, WebGuruz provides cutting-edge
              motion graphics services that capture attention and drive
              engagement.
            </p>
            <p className="mb-2">We specialize in:</p>
            <ul className="mb-2">
              <li>
                <strong>Explainer Videos:</strong> Simplify complex ideas
                through engaging animations.
              </li>
              <li>
                <strong>Product Demos:</strong> Showcase your product’s features
                with stunning visuals.
              </li>
              <li>
                <strong>Animated Presentations:</strong> Transform slides into
                dynamic and captivating stories.
              </li>
              <li>
                <strong>Social Media Videos:</strong> Boost engagement with
                scroll-stopping animations.
              </li>
              <li>
                <strong>Corporate Videos:</strong> Elevate your brand’s identity
                with professional animations.
              </li>
            </ul>
            <p className="mb-0">
              With motion graphics, your brand becomes more engaging, shareable,
              and effective at communicating messages. Let WebGuruz animate your
              ideas and give your content a competitive edge.
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

export default ContInfoAnimate;
