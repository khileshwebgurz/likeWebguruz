import React from "react";
import Image from "next/image";
import pardot6 from "../../../public/images/pardotimg/prod-steps.svg";
const PardotReason = () => {
  return (
    <div className="pardotwhy py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Choose <span> WebGuruz?</span>
            </h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="pardot-why-left">
              <div className="pardot-why-one">
                <h4>Proven Expertise</h4>
                <p>
                  Our team comprises certified Pardot and Salesforce
                  professionals with extensive real-world experience in
                  marketing automation. We bring deep technical knowledge and
                  strategic insights gained from successful implementations
                  across multiple industries.
                </p>
              </div>
              <div className="pardot-why-one pardot-two">
                <h4>Customized Solutions</h4>
                <p>
                  We reject one-size-fits-all approaches, instead developing
                  meticulously tailored strategies that align precisely with
                  your unique business objectives and challenges. Our solutions
                  are crafted to address your specific marketing needs, ensuring
                  maximum relevance and impact.
                </p>
              </div>
              <div className="pardot-why-one  pardot-three">
                <h4>Comprehensive Support</h4>
                <p>
                  We provide end-to-end consulting and implementation services
                  that cover every aspect of your marketing automation journey.
                  From initial strategy to final implementation and ongoing
                  optimization, we&apos;re your dedicated partner in marketing
                  technology transformation.
                </p>
              </div>
              <div className="pardot-why-one  pardot-four">
                <h4>Data-Driven Approach</h4>
                <p>
                  Our marketing strategies are powered by advanced analytics,
                  transforming raw data into actionable insights that drive real
                  business growth. We use sophisticated measurement and
                  optimization techniques to ensure every marketing dollar
                  delivers measurable results.
                </p>
              </div>
              <div className="pardot-why-one  pardot-five">
                <h4>Competitive Pricing</h4>
                <p>
                  We offer high-value, cost-effective services that deliver
                  exceptional return on investment for businesses of all sizes.
                  Our pricing model is transparent, flexible, and designed to
                  provide maximum marketing automation capabilities without
                  breaking your budget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pardot-right-img">
              <Image src={pardot6} alt="pardot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PardotReason;
