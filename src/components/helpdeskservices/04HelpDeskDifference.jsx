import React from "react";
import comprehensive1 from "../../../public/images/helpdeskimg/it-support-1.webp";
import comprehensive2 from "../../../public/images/helpdeskimg/it-support-2.webp";
import comprehensive3 from "../../../public/images/helpdeskimg/it-support-3.webp";
import comprehensive4 from "../../../public/images/helpdeskimg/it-support-4.webp";
import Image from "next/image";
const HelpDeskDifference = () => {
  return (
    <>
      <section className="help-desk-differencies py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading-main mb-3 mb-md-5">
              <h2>
                What Sets <span>Us Apart?</span>
              </h2>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="helpdesk-box">
                <div className="helpdesk-box-icon">
                  <Image src={comprehensive1} alt="Proactive IT Management Icon" />
                </div>
                <p>Proactive IT Management</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="helpdesk-box">
                <div className="helpdesk-box-icon">
                  <Image src={comprehensive2} alt="Secure and Compliant Icon" />
                </div>
                <p>Secure & Compliant</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="helpdesk-box">
                <div className="helpdesk-box-icon">
                  <Image src={comprehensive3} alt="Response Time Icon" />
                </div>
                <p>Rapid Response Time</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="helpdesk-box">
                <div className="helpdesk-box-icon">
                  <Image src={comprehensive4} alt="Insight-Driven IT Support Icon" />
                </div>
                <p>Insight-Driven IT Support</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 difference-reason text-center mt-5">
              <h2 className="seocnd-heading">Why WebGuruz?</h2>
              <p>
                At WebGuruz, we combine technical expertise with a
                customer-centric approach to deliver unparalleled helpdesk
                solutions. Our support team is not just reactive- believe in
                preventative IT maintenance that helps businesses avoid common
                pitfalls.
              </p>
              <p>
                With a focus on customization, scalability, and
                cost-effectiveness, we tailor our helpdesk services to fit the
                exact needs of our clients. Whether you need full-fledged IT
                support or backup assistance for your in-house IT team, WebGuruz
                is your trusted technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskDifference;
