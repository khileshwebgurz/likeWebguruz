import React from "react";
import Image from "next/image";
import afordableseoone from "../../../public/images/marketingautomationimg/auto-grow-1.png";
import afordableseotwo from "../../../public/images/marketingautomationimg/auto-grow-2.png";
import afordableseothree from "../../../public/images/marketingautomationimg/auto-grow-3.png";
import afordableseofour from "../../../public/images/marketingautomationimg/auto-grow-4.png";
import afordableseofive from "../../../public/images/marketingautomationimg/auto-grow-5.png";

const MarketScaleBusiness = () => {
  return (
    <>
      <section className="local-service py-5 services-card marketing-growth-scale">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Automate, Engage, Convert: The{" "}
                <span> WebGuruz Marketing Advantage</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseoone} alt="Local SEO Audit Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Assess</h3>
                  <p>
                    Understand your current marketing processes, identify
                    bottlenecks, and determine automation opportunities specific
                    to your business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image
                    src={afordableseotwo}
                    alt="Local SEO Competitor Analysis Icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">Plan</h3>
                  <p>
                    Develop a comprehensive automation strategy that maps
                    customer journeys and creates targeted content for each
                    stage of the buying process.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image
                    src={afordableseothree}
                    alt="Local Optimization Icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">Implement</h3>
                  <p>
                    Set up the right marketing automation platforms tailored to
                    your needs and integrate them with your existing systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image
                    src={afordableseofour}
                    alt="Google My Business Profile Icon"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-3">Optimize</h3>
                  <p>
                    Continuously refine your automation workflows based on real
                    data and performance metrics to improve results over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseofive} alt="Local Citations Icon" />
                </div>
                <div className="content">
                  <h3 className="mb-3">Scale</h3>
                  <p>
                    Expand your marketing automation efforts across channels and
                    campaigns as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketScaleBusiness;
