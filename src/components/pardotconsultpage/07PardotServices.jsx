import React from "react";
import Image from "next/image";
import pardot1 from "../../../public/images/pardotimg/pardot-train-1.png";
import pardot2 from "../../../public/images/pardotimg/pardot-train-2.png";
import pardot3 from "../../../public/images/pardotimg/pardot-train-3.png";
import pardot4 from "../../../public/images/pardotimg/pardot-train-4.png";
import pardot5 from "../../../public/images/pardotimg/pardot-train-5.png";
import pardot6 from "../../../public/images/pardotimg/pardot-train-6.png";
const PardotServices = () => {
  return (
    <div className="pardot-sales-section Pardotarea py-5">
      <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4 mb-md-5">
              <h2>
                Salesforce Pardot <span> Consulting Services</span>
              </h2>
            </div>
            </div>
            <div className="row">
            <div className=" col-md-4 col-12 mb-4 ">
              <div className="pardot-card">
                <div className="pardot-img ">
                  <Image src={pardot1} alt="pardot-area" />
                </div>
                <h5>Strategic Consultation</h5>
                <p>
                  Our strategic consultation goes far beyond surface-level
                  advice. We dive deep into your business ecosystem, conducting
                  comprehensive analysis to understand your unique marketing
                  challenges, growth objectives, and competitive landscape.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-12 mb-4 ">
              <div className="pardot-card">
                <div className="pardot-img ">
                  <Image src={pardot2} alt="pardot-area" />
                </div>
                <h5>Campaign Design</h5>
                <p>
                  Our team of marketing automation specialists craft
                  high-converting marketing campaigns that do more than just
                  communicate- they engage, nurture, and convert. We develop
                  sophisticated, multi-touch campaign strategies that leverage
                  Pardot&apos;s advanced segmentation, personalization, and
                  automation capabilities.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-12 mb-4 ">
              <div className="pardot-card">
                <div className="pardot-img ">
                  <Image src={pardot3} alt="pardot-area" />
                </div>
                <h5>Technical Configuration</h5>
                <p>
                  We create a custom configuration that seamlessly integrates
                  with your existing tech stack. This ensures that every aspect
                  of the platform- from lead scoring and automation rules to
                  custom fields and tracking mechanisms- is precisely aligned
                  with your business processes.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-12 mb-4 ">
              <div className="pardot-card">
                <div className="pardot-img ">
                  <Image src={pardot4} alt="pardot-area" />
                </div>
                <h5>Integration Services</h5>
                <p>
                  Our integration services ensure that Pardot becomes a seamless
                  extension of your existing business ecosystem. We specialize
                  in creating robust, intelligent connections between Pardot and
                  your critical business systems- including CRM platforms, ERP
                  solutions, customer support tools, and other marketing
                  technologies.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-12 mb-4 ">
              <div className="pardot-card">
                <div className="pardot-img ">
                  <Image src={pardot5} alt="pardot-area" />
                </div>
                <h5>Performance Optimization</h5>
                <p>
                  Our team doesn&apos;t just set up your Pardot instance and walk
                  away- we provide continuous monitoring, analysis, and
                  strategic refinement of your marketing automation strategies.
                  Using advanced analytics, machine learning insights, and
                  industry benchmarks, we constantly identify opportunities to
                  enhance your marketing performance.
                </p>
              </div>
            </div>
            <div className=" col-md-4 col-12 mb-0 mb-md-4 ">
              <div className="pardot-card">
                <div className="pardot-img ">
                  <Image src={pardot6} alt="pardot-area" />
                </div>
                <h5>Training and Support</h5>
                <p>
                  Our training and support services are designed to empower your
                  team and ensure long-term success with Pardot. Our training
                  goes beyond basic platform navigation, offering deep insights
                  into strategy, best practices, and advanced techniques. Our
                  support doesn&apos;t end with initial training—we offer continuous
                  assistance, helping you navigate challenges, implement new
                  features, and stay ahead of marketing technology trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default PardotServices;
