import React from "react";
import Image from "next/image";
import star from "../../../public/images/loadtestingimg/Star.svg";
import like from "../../../public/images/loadtestingimg/like.svg";
import newlaod1 from "../../../public/images/loadtestingimg/load-tech-1.webp";
import newlaod2 from "../../../public/images/loadtestingimg/load-tech-2.webp";
import newlaod3 from "../../../public/images/loadtestingimg/load-tech-3.webp";
import newlaod4 from "../../../public/images/loadtestingimg/load-tech-4.webp";
import newlaod5 from "../../../public/images/loadtestingimg/load-tech-5.webp";
import newlaod6 from "../../../public/images/loadtestingimg/load-tech-6.webp";
const LoadBenefitFeature = () => {
  return (
    <div className="loadbenifit-services-section ">
      <div className="container-fluid">
        <div className="row row-benfit row-one">
          <div className="col-md-6 col-12">
            <div className="services-benifit-left">
              <div className="services-img">
                <Image src={like} alt="benifit" />
              </div>
              <div className="benifit-content">
                <h2>Benefits of Load Testing Services</h2>
                <ul>
                  <li>
                    Identify and fix performance issues before they affect sales
                    and customer satisfaction
                  </li>
                  <li>
                    Right-size your infrastructure based on actual performance
                    data
                  </li>
                  <li>
                    Ensure consistent performance regardless of traffic volume
                  </li>
                  <li>
                    Faster websites convert better, directly impacting your
                    bottom line
                  </li>
                  <li>
                    Avoid the negative publicity of website crashes during
                    important events
                  </li>
                  <li>
                    Understand how your platform will handle increasing user
                    numbers as you grow
                  </li>
                  <li>
                    Document performance metrics for regulatory or contractual
                    obligations
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="services-benifit-left benifit-right">
              <div className="services-img">
                <Image src={star} alt="star" />
              </div>
              <div className="benifit-content left-content">
                <h2>Load Testing at WebGuruz- USPs</h2>
                <ul>
                  <li>
                    Testing experience across e-commerce, healthcare, finance,
                    and more
                  </li>
                  <li>
                    Tests that accurately reflect actual user behaviors and
                    journeys
                  </li>
                  <li>
                    Comprehensive testing across web, mobile, and API interfaces
                  </li>
                  <li>
                    Seamlessly integrate performance testing into your
                    development pipeline
                  </li>
                  <li>
                    Scale tests to millions of virtual users from multiple
                    geographic locations
                  </li>
                  <li>
                    Go beyond identifying issues to understanding and fixing the
                    underlying causes
                  </li>
                  <li>
                    Reports and recommendations in business language, not just
                    technical jargon
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-benfit row-one">
          <div className="col-md-6 col-12">
            <div className="services-benifit-left benifit-right">
              <div className="benifit-content left-content">
                <h2>Load Testing vs Stress Testing</h2>
                <p>
                  While often confused, load testing and stress testing serve
                  different purposes. Load testing measures performance under
                  expected conditions, simulating typical user loads to ensure
                  the system meets performance requirements. Stress testing, on
                  the other hand, deliberately pushes systems beyond normal
                  capacity to identify breaking points. At WebGuruz, we
                  incorporate both approaches to provide a complete picture of
                  your application&apos;s performance capabilities and limitations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="services-benifit-left benifit-right tools">
              <div className="benifit-content left-content">
                <h2>Tools We Use for Load Testing</h2>
                <p>
                  We use industry-leading tools combined with our proprietary
                  methodologies to deliver comprehensive load-testing results.
                </p>
              </div>
              <div className="neolaod-img">
                <Image src={newlaod1} alt="neoload" />
                <Image src={newlaod2} alt="neoload" />
                <Image src={newlaod3} alt="neoload" />
                <Image src={newlaod4} alt="neoload" />
                <Image src={newlaod5} alt="neoload" />
                <Image src={newlaod6} alt="neoload" />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-benfit row-one">
          <div className="col-md-6 col-12 image-bg"></div>
          <div className="col-md-6 col-12">
            <div className="services-benifit-left">
              <div className="benifit-content">
                <h2>Why WebGuruz?</h2>
                <p>
                  At WebGuruz Technologies, we bring a combination of technical
                  expertise and business understanding to every performance
                  testing project.
                </p>
                <ul>
                  <li>
                    Extensive experience across industries and technology stacks
                  </li>
                  <li>
                    Our team holds certifications in all major testing tools and
                    methodologies
                  </li>
                  <li>
                    From initial assessment to implementation of recommendations
                  </li>
                  <li>
                    Clear communication and regular updates throughout the
                    testing process
                  </li>
                  <li>
                    Options that adapt to your specific needs and budget
                    constraints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadBenefitFeature;
