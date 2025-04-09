import React from "react";
import Image from "next/image";
import drupal1 from "../../../public/images/contentmarketingimg/content-key-1.png";
import drupal2 from "../../../public/images/contentmarketingimg/content-key-2.png";
import drupal3 from "../../../public/images/contentmarketingimg/content-key-3.png";
import drupal4 from "../../../public/images/contentmarketingimg/content-key-4.png";
import drupal5 from "../../../public/images/contentmarketingimg/content-key-5.png";
import drupal6 from "../../../public/images/contentmarketingimg/content-key-6.png";
const ContMarketSolution = () => {
  return (
    <div className="content-market-solution py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Our <span>Content Marketing Services</span>
            </h2>
            <p>
              We provide a holistic suite of services that integrate advanced
              analytics with creative storytelling, ensuring every piece of
              content contributes to a powerful and cohesive digital strategy.
            </p>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="content-market-card">
              <div className="content-market-icon">
                <Image src={drupal1} alt="Drupal Development" />
              </div>
              <div className="content-card-para">
                <h4>Keyword Research & Strategy</h4>
                <p>
                  We start by researching the right keywords and competitors to
                  build a strong foundation for your content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="content-market-card">
              <div className="content-market-icon">
                <Image src={drupal2} alt="Drupal Development Company" />
              </div>
              <div className="content-card-para">
                <h4>Content Distribution</h4>
                <p>
                  We ensure your content reaches the right audience through
                  strategic distribution channels.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="content-market-card">
              <div className="content-market-icon">
                <Image
                  src={drupal3}
                  alt="Drupal Development Company in India"
                />
              </div>
              <div className="content-card-para">
                <h4>Content Creation & Copywriting</h4>
                <p>
                  Our writers craft engaging and optimized content that speaks
                  directly to your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="content-market-card">
              <div className="content-market-icon">
                <Image src={drupal4} alt="Drupal Developers" />
              </div>
              <div className="content-card-para">
                <h4>Performance Analytics</h4>
                <p>
                  We track and measure performance to continuously improve your
                  content strategy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="content-market-card">
              <div className="content-market-icon">
                <Image src={drupal5} alt="Business Continuity Icon" />
              </div>
              <div className="content-card-para">
                <h4>SEO Optimization</h4>
                <p>
                  Every piece of content is optimized to improve your rankings
                  and drive organic traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-12 mb-4">
            <div className="content-market-card">
              <div className="content-market-icon">
                <Image src={drupal6} alt="Setting Icon" />
              </div>
              <div className="content-card-para">
                <h4>Content Refresh & Updates</h4>
                <p>
                  Regular updates keep your content relevant and ahead of
                  industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContMarketSolution;
