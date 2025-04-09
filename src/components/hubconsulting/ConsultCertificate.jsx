import React from "react";
import Image from "next/image";
import logo5 from "../../../public/images/hubspotlogo.webp";
import hire from "../../../public/images/hire-us.webp";
import Link from "next/link";
const ConsultCertificate = () => {
  return (
    <section id="hubspotacademy" className="consult-certificate py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4 ">
            <h2>
              Our <span>HubSpot Qualifications</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xs-12 content-left">
            <div className="sbstpimg">
              <a
                href="https://app.hubspot.com/academy/achievements/kdcxj2ml/en/1/jaswinder-singh/hubspot-solutions-partner"
                rel=""
                target="_blank"
                aria-label="Redirect link"
              >
                <Image alt="HubSpot Certified Solutions Partner" src={logo5} />
                <div className="hub-certificate">
                  <h3>HubSpot Certified Solutions Partner</h3>
                  <p>
                    <strong>
                      We are certified to provide comprehensive HubSpot
                      solutions for diverse business needs.
                    </strong>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 content-right hub-cnt">
            <div className="sbsptcntp">
              <Image src={hire} alt="HubSpot Consulting Services" />
              <h3>HubSpot Consulting Services</h3>
              <p>
                <strong>
                  Our technical expertise enables seamless integrations,
                  customizations, and development services on HubSpot.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="explrbtnsct">
              <Link
                href="/book-an-appointment"
                className="explore-btn"
                aria-label="Hire"
              >
                Hire Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultCertificate;
