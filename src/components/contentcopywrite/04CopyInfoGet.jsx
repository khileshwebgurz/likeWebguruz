import React from "react";
import Image from "next/image";
import seo1 from "../../../public/images/seocopywriteimg/copy-keyword-1.png";
import seo2 from "../../../public/images/seocopywriteimg/copy-keyword-2.png";
import seo3 from "../../../public/images/seocopywriteimg/copy-keyword-3.png";
import seo4 from "../../../public/images/seocopywriteimg/copy-keyword-4.png";
import seo5 from "../../../public/images/seocopywriteimg/copy-keyword-5.png";
import seo6 from "../../../public/images/seocopywriteimg/copy-keyword-6.png";
const CopyInfoGet = () => {
  return (
    <div className="seocopywrite-service py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              What to Expect When <span> Working with WebGuruz? </span>
            </h2>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo1} alt="seo" />
                </div>
                <h4>Comprehensive Keyword Research</h4>
              </div>
              <p>
                We dive deep into understanding your industry, conducting
                extensive keyword research to identify high-potential, relevant
                search terms that align with your business objectives. Our
                meticulous approach involves analyzing search volume,
                competition, and user intent to uncover hidden keyword
                opportunities that your competitors might have missed.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo2} alt="seo" />
                </div>
                <h4>Data-Driven Optimization</h4>
              </div>
              <p>
                We use advanced analytics and SEO tools to continuously refine
                and improve your content&apos;s performance. Our data-driven approach
                means we&apos;re constantly monitoring key performance indicators,
                making real-time adjustments to maximize your content&apos;s search
                engine visibility and user engagement.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo3} alt="seo" />
                </div>
                <h4>Customized Content Strategy</h4>
              </div>
              <p>
                Every project receives a tailored content approach, ensuring
                your unique brand voice and business goals are perfectly
                represented. We develop a comprehensive content blueprint that
                aligns with your specific marketing objectives, creating a
                strategic roadmap that guides every piece of content we create.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo4} alt="seo" />
                </div>
                <h4>Transparent Reporting</h4>
              </div>
              <p>
                Regular, detailed reports that showcase the impact of our SEO
                copywriting on your digital metrics. We provide comprehensive
                insights that break down performance metrics, keyword rankings,
                and content effectiveness, giving you complete visibility into
                your digital marketing progress.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo5} alt="seo" />
                </div>
                <h4>Expert Writing Team</h4>
              </div>
              <p>
                Our writers are not just skilled copywriters but also SEO
                specialists with proven track records in creating
                high-performing content. Each team member undergoes continuous
                training to stay ahead of the latest SEO trends and content
                marketing strategies, ensuring your content is always
                cutting-edge and impactful.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo6} alt="seo" />
                </div>
                <h4>Continuous Support</h4>
              </div>
              <p>
                Ongoing consultation and content adjustment to keep your digital
                presence dynamic and competitive. Our commitment extends beyond
                initial content creation, with dedicated support that helps you
                navigate the ever-changing digital landscape and continuously
                improve your online strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyInfoGet;
