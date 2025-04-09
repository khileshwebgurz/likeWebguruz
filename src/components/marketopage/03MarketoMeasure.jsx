import React from "react";
import Image from "next/image";
import marketo1 from "../../../public/images/marketoconsultimg/keto-online-1.png";
import marketo2 from "../../../public/images/marketoconsultimg/keto-online-2.png";
import marketo3 from "../../../public/images/marketoconsultimg/keto-online-3.png";
import marketo4 from "../../../public/images/marketoconsultimg/keto-online-4.png";
import marketo5 from "../../../public/images/marketoconsultimg/keto-online-5.png";
import marketo6 from "../../../public/images/marketoconsultimg/keto-online-6.png";
import Link from "next/link";
const MarketoMeasure = () => {
  return (
    <div className="marketo-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 heading-main text-center text-md-start mb-4 mb-lg-0">
             <div className="marketo-left">
            <h2 className="mb-3">
              Supercharge Your Marketing with Comprehensive{" "}
              <span>Marketo Consulting Services </span>
            </h2>
            <p className="mb-3">
              WebGuruz offers end-to-end Marketo consulting services tailored to
              your specific business needs. Our approach goes beyond traditional
              consulting, providing holistic solutions that transform your
              marketing infrastructure.
            </p>
            <Link href="/book-an-appointment" className="explore-btn">
              Let&apos;s work together
            </Link>
          </div>
          </div>
          <div className="col-lg-7 col-12 mt-0">
            <div className="row marketo-row">
              <div className="col-md-6 col-12">
                <div className="marketo-right">
                  <div className="marketo-icon-text ">
                    <div className="marketo-icon">
                      <Image src={marketo1} alt="dicover" />
                    </div>
                    <h4>Strategic Consulting</h4>
                    <p>
                      Develop data-driven marketing strategies aligned with your
                      business objectives. Our expert consultants dive deep into
                      your unique business challenges, crafting customized
                      strategies that transform raw data into actionable
                      marketing insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="marketo-right">
                  <div className="marketo-icon-text ">
                    <div className="marketo-icon">
                      <Image src={marketo2} alt="dicover" />
                    </div>
                    <h4>Platform Optimization</h4>
                    <p>
                      Maximize Marketo&apos;s features to streamline your marketing
                      processes. We unlock the platform&apos;s full potential by
                      configuring advanced settings, creating intelligent
                      workflows, and eliminating manual bottlenecks that slow
                      down your marketing efforts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="marketo-right">
                  <div className="marketo-icon-text ">
                    <div className="marketo-icon">
                      <Image src={marketo3} alt="dicover" />
                    </div>
                    <h4>Integration Expertise</h4>
                    <p>
                      Seamlessly connect Marketo with your existing tech
                      ecosystem. Our technical specialists ensure smooth data
                      flow between Marketo and your CRM, sales tools, and other
                      critical business systems, creating a unified and powerful
                      marketing technology stack.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="marketo-right">
                  <div className="marketo-icon-text ">
                    <div className="marketo-icon">
                      <Image src={marketo4} alt="dicover" />
                    </div>
                    <h4>Campaign Design</h4>
                    <p>
                      Create sophisticated, targeted marketing campaigns. Our
                      creative strategists develop highly personalized,
                      multi-channel campaigns that engage your audience at every
                      stage of the customer journey, maximizing conversion
                      potential.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="marketo-right">
                  <div className="marketo-icon-text ">
                    <div className="marketo-icon">
                      <Image src={marketo5} alt="dicover" />
                    </div>
                    <h4>Performance Analytics</h4>
                    <p>
                      Implement advanced tracking and reporting mechanisms. We
                      design comprehensive analytics frameworks that provide
                      real-time insights into your marketing performance,
                      enabling data-driven decision-making and continuous
                      improvement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="marketo-right">
                  <div className="marketo-icon-text ">
                    <div className="marketo-icon">
                      <Image src={marketo6} alt="dicover" />
                    </div>
                    <h4>Continuous Support</h4>
                    <p>
                      Provide ongoing optimization and strategic guidance. We
                      stand by your side beyond initial implementation, offering
                      proactive recommendations, performance reviews, and
                      strategic adjustments to keep your marketing automation
                      strategy ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketoMeasure;
