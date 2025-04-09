import React from "react";
import Image from "next/image";
import seo1 from "../../../public/images/Socialmediaimg/smm-data-1.png";
import seo2 from "../../../public/images/Socialmediaimg/smm-data-2.png";
import seo3 from "../../../public/images/Socialmediaimg/smm-data-3.png";
import seo4 from "../../../public/images/Socialmediaimg/smm-data-4.png";
import seo5 from "../../../public/images/Socialmediaimg/smm-data-5.png";
const SmmWhyChoose = () => {
  return (
    <div className="Soicalsolution social-management-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Choose <span> WebGuruz? </span>
            </h2>
            <p>
              WebGuruz Technologies isn&apos;t just another social media management
              agency- we&apos;re your strategic digital partner committed to
              transforming your online presence:
            </p>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo1} alt="seo" />
                </div>
                <h4>Proven Expertise</h4>
              </div>
              <p>
                Our team brings years of experience and a proven track record of
                successful social media campaigns across diverse industries,
                ensuring strategic, result-driven approaches. We stay ahead of
                industry trends, continuously refining our methods to maximize
                engagement and conversions.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo2} alt="seo" />
                </div>
                <h4>Data-Driven Approach</h4>
              </div>
              <p>
                Leveraging advanced analytics and cutting-edge technologies, we
                provide insights-backed strategies that deliver measurable,
                transparent results. By constantly tracking key performance
                metrics, we optimize campaigns in real time to ensure maximum
                return on investment.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo3} alt="seo" />
                </div>
                <h4>Customized Strategic Solutions</h4>
              </div>
              <p>
                We don&apos;t believe in one-size-fits-all. Our strategies are
                meticulously tailored to your unique business goals, target
                audience, and market positioning. Every campaign is designed to
                resonate with your audience, strengthen your brand identity, and
                drive long-term success.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo4} alt="seo" />
                </div>
                <h4>Creative Excellence</h4>
              </div>
              <p>
                Our multidisciplinary team of content creators, designers, and
                strategists crafts engaging, innovative content that captures
                attention and drives action. From compelling visuals to
                persuasive copy, we ensure that every post aligns with your
                brand’s voice and objectives.
              </p>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="seocopy-box">
              <div className="img-text">
                <div className="img">
                  <Image src={seo5} alt="seo" />
                </div>
                <h4>Comprehensive Reporting</h4>
              </div>
              <p>
                Receive transparent, detailed monthly reports that provide deep
                insights into your social media performance, complete with
                actionable recommendations. Our reports help you understand
                what’s working, what needs improvement, and how to refine your
                strategy for continuous growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmmWhyChoose;
