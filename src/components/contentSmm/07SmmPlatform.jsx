import React from "react";
import Image from "next/image";
import media1 from "../../../public/images/Socialmediaimg/smm-social-1.svg";
import media3 from "../../../public/images/Socialmediaimg/smm-social-2.svg";
import media2 from "../../../public/images/Socialmediaimg/smm-social-3.svg";
const SmmPlatform = () => {
  return (
    <div className="socialmedia-platform py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>Platform-Specific Domination </span> Strategies Curated for
              Your Success
            </h2>
            <p>
              Each social media platform offers unique opportunities for brand
              growth. At WebGuruz Technologies, we develop tailored strategies
              that leverage the specific characteristics of each digital
              channel, ensuring your brand message resonates powerfully across
              different platforms.
            </p>
          </div>

          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="soocial-media-card">
              <div className="social-img">
                <Image src={media1} alt="instagram" />
              </div>
              <h5>Instagram</h5>
              <p className="mt-0">
                Instagram demands visual storytelling that captures attention
                and builds brand identity. We create aesthetically curated
                content that goes beyond simple posting, implementing strategic
                influencer collaborations and optimizing every feature from
                Stories to Reels. Our approach transforms your Instagram
                presence into a compelling, engaging brand narrative.
              </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="soocial-media-card">
              <div className="social-img">
                <Image src={media2} alt="instagram" />
              </div>
              <h5>YouTube</h5>
              <p className="mt-0">
                Our YouTube strategy focuses on creating SEO-optimized,
                storytelling-driven video content that grows your channel and
                engages audiences. We develop techniques to improve visibility,
                increase audience retention, and explore monetization potential,
                turning your YouTube presence into a valuable brand asset.
              </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div className="soocial-media-card">
              <div className="social-img">
                <Image src={media3} alt="facebook" />
              </div>
              <h5>Facebook</h5>
              <p className="mt-0">
                Facebook remains a powerful platform for community building and
                targeted marketing. We develop strategies that turn your
                business page into an interactive hub, creating targeted
                advertising campaigns, diverse multimedia content, and
                engagement techniques that convert followers into brand
                advocates.
              </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmmPlatform;
