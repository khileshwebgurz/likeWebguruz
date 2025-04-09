import Image from "next/image";
import React from "react";
import helping from "../../../public/images/helpdeskimg/helpdesk-img-3.webp";
const HelpDeskTechnical = () => {
  return (
    <div className="helpdesk-tech">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="helpbg-title">
              <h3>
                Fix IT Before It Fails- Smart, Proactive Support for Seamless
                Operations!
              </h3>
            </div>
          </div>
        </div>
        <div className="row technical-support">
          <div className="col-lg-4 col-md-5 col-12">
            <div className="help-img">
              <Image src={helping} alt="Helpdesk Services" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12 mb-4 mb-md-0">
            <div className="support-content">
              <h2>
                Helpdesk Services <br />- Your IT Backbone
              </h2>
              <h4>Effortless IT Support for Businesses of All Sizes</h4>
              <p className="mb-3 mb-md-4">
                Any IT-related disruptions, no matter how small, can lead to
                significant downtime, lost revenue, and frustrated employees or
                customers. This is where our Helpdesk Services come into play-
                designed to provide swift, scalable, and reliable IT support
                tailored to meet your unique business requirements.
              </p>
              <p>
                With a multi-tiered helpdesk system, our certified IT
                professionals ensure that every query- whether it’s basic
                troubleshooting or a complex technical challenge- is handled
                with speed and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="row support-perfomus">
          <div className="col-lg-3 col-md-4  mt-0">
            <div className="support-box">
              <h4>
                Average Call <br />
                Answer Time
              </h4>
              <p>30 Sec.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-md-0 mt-4">
            <div className="support-box">
              <h4>
              Response Rate  <br />
              within SLA
              </h4>
              <p>99%</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-md-0 mt-4">
            <div className="support-box">
              <h4>
              Customer Satisfaction  <br />
              (CSAT) Score
              </h4>
              <p>92%</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-lg-0 mt-4">
            <div className="support-box">
              <h4>
              First Call Resolution<br />
                 (FCR) Rate
              </h4>
              <p>85%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskTechnical;
