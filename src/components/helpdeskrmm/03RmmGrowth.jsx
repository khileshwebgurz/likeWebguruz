import React from "react";
import Image from "next/image";
import pc1 from "../../../public/images/rmmimages/msp-system-1.webp";
import pc2 from "../../../public/images/rmmimages/msp-system-2.webp";
import pc3 from "../../../public/images/rmmimages/msp-system-3.webp";
import pc4 from "../../../public/images/rmmimages/msp-system-4.webp";
import pc5 from "../../../public/images/rmmimages/msp-system-5.webp";
import pc6 from "../../../public/images/rmmimages/msp-system-6.webp";
const RmmGrowth = () => {
  return (
    <>
      <div className="rmm-solution-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-5">
              <h2>
                Benefits of <span> Our RMM Services </span>
              </h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="rmm-solutions-box">
                <Image src={pc1} alt="Proactive IT Monitoring Icon" />
                <h4>Proactive IT Monitoring</h4>
                <p>
                  Eliminate IT disruptions with real-time tracking and problem
                  resolution.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="rmm-solutions-box">
                <Image src={pc2} alt="Cost Savings and ROI Icon" />
                <h4>Cost Savings & Increased ROI</h4>
                <p>
                  Reduce IT costs and downtime, ensuring higher productivity and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="rmm-solutions-box">
                <Image src={pc3} alt="Automated Updates Icon" />
                <h4>Automated Updates & Patch Management</h4>
                <p>
                  Never worry about outdated software- we ensure everything
                  stays up-to-date.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="rmm-solutions-box">
                <Image src={pc4} alt="Enhanced Security Icon" />
                <h4>Enhanced Security & Compliance</h4>
                <p>
                  Stay ahead of cyber threats with automated security patches
                  and compliance checks.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="rmm-solutions-box">
                <Image src={pc5} alt="24/7 IT Support Icon" />
                <h4>24/7 IT Support & Maintenance</h4>
                <p>
                  Our dedicated experts are always available to resolve issues
                  instantly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="rmm-solutions-box">
                <Image src={pc6} alt="Business Continuity Icon" />
                <h4>Seamless Business Continuity</h4>
                <p>
                  With proactive backup solutions, your business remains
                  operational even in crises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RmmGrowth;
