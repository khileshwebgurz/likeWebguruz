import Image from "next/image";
import React from "react";
import help1 from "../../../public/images/helpdeskimg/vision-1.svg";
import help2 from "../../../public/images/helpdeskimg/vision-2.svg";
const HelpDeskSupport = () => {
  return (
    <>
      <section className="helpdesk-support py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading-main">
              <h2>
                What We Offer in <span>Terms of Support</span>
                <br />
                Empowering Your Workforce with Rapid IT Resolutions
              </h2>
            </div>
          </div>
          <div className="row mt-3 mt-md-5 row-help-desk">
            <div className="col-md-6 col-12">
              <div className="desk-support-left-div">
                <span className="collab-design">
                  Technical Support & Issue Resolution
                </span>
                <div className="left-div-listing">
                  <h3>Core IT Support Services</h3>
                  <div className="left-listing-items">
                    <ul>
                      <li>L1, L2, & L3 Support</li>
                      <li>Remote & On-Site Assistance</li>
                      <li>Software & Hardware Issue Resolution</li>
                      <li>Incident & Change Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Image src={help1} alt="Core IT Support Services" />
            </div>
          </div>
          <div className="row  row-help-desk row-help-desk-two">
            <div className="col-md-6 col-12">
              <Image src={help2} alt="Additional Support Offerings" />
            </div>
            <div className="col-md-6 col-12">
              <div className="desk-support-left-div">
                <span className="collab-design">
                  Smart Solutions & Continuity
                </span>
                <div className="left-div-listing">
                  <h3>Additional Support Offerings</h3>
                  <div className="left-listing-items">
                    <ul>
                      <li>Custom SLA-Based Services</li>
                      <li>Third-Party Software Integration Support</li>
                      <li>User Training & Self-Help Knowledge Base</li>
                      <li>Disaster Recovery & Business Continuity Support</li>
                    </ul>
                    {/* 
                    <div className="left-div-cta">
                      <Link href="#">Sign up for free</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskSupport;
