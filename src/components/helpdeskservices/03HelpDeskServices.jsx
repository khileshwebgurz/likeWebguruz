import React from "react";
import comprehensive1 from "../../../public/images/helpdeskimg/person-it-1.webp";
import comprehensive2 from "../../../public/images/helpdeskimg/person-it-2.webp";
import Image from "next/image";
const HelpDeskServices = () => {
  return (
    <>
      <section className="helpdesk-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center helpdesk-paragraph">
              <p>
                Your employees are the driving force behind your business, and
                to perform at their best, they need uninterrupted access to IT
                systems. Our Technical End User Support Services are designed to
                ensure that your team gets the assistance they need- quickly,
                efficiently, and professionally.
              </p>
            </div>
            <div className="col-12 text-center heading-main helpdesk-services-heading">
              <h2>Comprehensive IT Assistance for Your Business</h2>
            </div>
            <div className="col-lg-5 col-md-9  col-12 mx-md-auto">
              <div className="row key-row">
                <div className="col-md-6 col-12">
                  <ul className="helpdesk-key-list">
                    <li>24/7 Availability</li>
                    <li>Multi-Channel Support</li>
                    <li>Faster Issue Resolution</li>
                    <li>Scalability</li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <ul className="helpdesk-key-list">
                    <li>Security & Compliance</li>
                    <li>Cost Efficiency</li>
                    <li>Expert Technicians</li>
                    <li>Data-Driven Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row support-row">
            <div className="col-md-6">
              <div className="support-card ">
                <div className="support-card-img">
                  <Image src={comprehensive1} alt="Dedicated Support Icon" />
                </div>
                <div className="support-card-content">
                  <h5>Dedicated Support</h5>
                  <h3>Personalized IT Assistance</h3>
                  <p>
                    Unlike generic support services, our Dedicated Helpdesk Team
                    offers a personalized approach to IT support. Each client
                    gets a dedicated team of specialists who understand their
                    unique IT environment, workflows, and challenges. Our
                    dedicated support ensures that your business receives
                    consistent, high-quality assistance whenever required.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="support-card ">
                <div className="support-card-img">
                  <Image src={comprehensive2} alt="IT Support Icon" />
                </div>
                <div className="support-card-content">
                  <h5>Weekend Support</h5>
                  <h3>Because IT Issues Don’t Take a Break</h3>
                  <p>
                    Technical challenges don’t wait for weekdays, and neither do
                    we. Our Weekend Support Services ensure that businesses
                    remain operational during non-standard working hours.
                    Whether it’s an emergency fix, scheduled maintenance, or
                    urgent troubleshooting, our team is available to resolve
                    issues before they escalate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskServices;
