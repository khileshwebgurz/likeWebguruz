import React from "react";
import Image from "next/image";
import seo1 from "../../../public/images/seocopywriteimg/copy-content-1.png";
import seo2 from "../../../public/images/seocopywriteimg/copy-content-2.png";
import seo3 from "../../../public/images/seocopywriteimg/copy-content-3.png";
import seo4 from "../../../public/images/seocopywriteimg/copy-content-4.png";
const CopyExperience = () => {
  return (
    <div className="seocopy-experince py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-5">
            <h2>
              How Our <span>SEO Copywriting Works? </span>
            </h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 ">
            <div className="seo-card">
              <div className="seo-card-img">
                <Image src={seo1} alt="copwrite" />
              </div>
              <h5>In-Depth Consultation</h5>
              <p>
                We begin by understanding your business, target audience, and
                specific goals. Our team conducts comprehensive discussions to
                grasp your unique value proposition.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 ">
            <div className="seo-card">
              <div className="seo-card-img">
                <Image src={seo2} alt="copwrite" />
              </div>
              <h5>Content Creation</h5>
              <p>
                Our expert writers craft engaging, optimized content that speaks
                directly to your audience while meeting technical SEO
                requirements.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 ">
            <div className="seo-card">
              <div className="seo-card-img">
                <Image src={seo3} alt="copwrite" />
              </div>
              <h5>Strategic Research</h5>
              <p>
                Extensive keyword research, competitor analysis, and audience
                insight gathering to inform our content strategy.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 ">
            <div className="seo-card">
              <div className="seo-card-img">
                <Image src={seo4} alt="copwrite" />
              </div>
              <h5>Performance Optimization</h5>
              <p>
                Continuous monitoring and refinement of content to ensure
                maximum search engine visibility and audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyExperience;
