import React from "react";
import Image from "next/image";
import marketo1 from "../../../public/images/marketoconsultimg/keto-bulb-1.png";
import marketo2 from "../../../public/images/marketoconsultimg/keto-bulb-2.png";
import marketo3 from "../../../public/images/marketoconsultimg/keto-bulb-3.png";
import marketo4 from "../../../public/images/marketoconsultimg/keto-bulb-4.png";
import marketo5 from "../../../public/images/marketoconsultimg/keto-bulb-5.png";
import marketo6 from "../../../public/images/marketoconsultimg/keto-bulb-6.png";
const MarketoCapability = () => {
  return (
    <div className="marketo-automation py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto col-12 mb-4 mb-md-5 heading-main text-center">
            <h2>
              Why <span>Choose WebGuruz? </span>
            </h2>
          </div>
          <div className="col-md-4 col-12 mb-4 text-center">
            <div className="marketo-box">
              <div className="marketo-box-img">
                <Image src={marketo1} alt="automation" />
              </div>
              <h5>Certified Marketo Experts</h5>
              <p>
                Our team comprises highly skilled professionals with deep,
                comprehensive platform knowledge and advanced certifications. We
                stay at the forefront of Marketo&apos;s evolving capabilities,
                ensuring our clients benefit from cutting-edge marketing
                automation strategies that leverage the platform&apos;s most advanced
                features and innovations.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-center">
            <div className="marketo-box">
              <div className="marketo-box-img">
                <Image src={marketo2} alt="automation" />
              </div>
              <h5>Customized Solutions</h5>
              <p>
                We craft meticulously tailored strategies precisely aligned with
                your unique business goals, going far beyond one-size-fits-all
                approaches. Our solutions are developed through an intensive
                discovery process that considers your industry dynamics, target
                audience, sales cycles, and specific market challenges.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-center">
            <div className="marketo-box">
              <div className="marketo-box-img">
                <Image src={marketo3} alt="automation" />
              </div>
              <h5>Proven Track Record</h5>
              <p>
                With a portfolio of successful implementations across multiple
                industries, we&apos;ve consistently demonstrated our ability to
                deliver transformative marketing automation solutions. Our case
                studies showcase tangible results, including significant
                improvements in lead quality, conversion rates, and overall
                marketing efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-center">
            <div className="marketo-box">
              <div className="marketo-box-img">
                <Image src={marketo4} alt="automation" />
              </div>
              <h5>Comprehensive Support</h5>
              <p>
                Our commitment extends far beyond initial implementation,
                providing truly end-to-end consulting and continuous
                optimization services. We offer ongoing strategic guidance,
                performance monitoring, and adaptive recommendations that ensure
                your marketing automation remains cutting-edge and aligned with
                emerging market trends.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-center">
            <div className="marketo-box">
              <div className="marketo-box-img">
                <Image src={marketo5} alt="automation" />
              </div>
              <h5>Technology Agnostic</h5>
              <p>
                We pride ourselves on our ability to create seamless
                integrations with existing systems, regardless of your current
                technological infrastructure. Our technical expertise allows us
                to bridge complex software ecosystems, ensuring smooth data flow
                and unified marketing intelligence across platforms.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-center">
            <div className="marketo-box">
              <div className="marketo-box-img">
                <Image src={marketo6} alt="automation" />
              </div>
              <h5>ROI-Focused Approach</h5>
              <p>
                Every strategy we develop is designed with a laser focus on
                delivering measurable marketing performance improvements. We
                implement advanced tracking mechanisms and provide transparent
                analytics that directly correlate marketing efforts with
                business outcomes, giving you clear visibility into your return
                on investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketoCapability;
