import React from "react";
import Image from "next/image";
import logo5 from "../../../public/images/hubspotlogo.webp";
import hire from "../../../public/images/hire-us.webp";
import Link from "next/link";
const AutomateCertificate = () => {
  return (
    <section id="hubspotacademy" className="automatation-certificate py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4 ">
            <h2>
              <span>Certified HubSpot Partners </span> You Can Rely On
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
                <Image alt="HubSpot Partner" src={logo5} />
                <div className="hub-certificate">
                  <h3>Hubspot Academy</h3>
                  <p>
                    <strong>Solutions Partner Certified</strong>
                  </p>
                  <p>
                    <strong>JASWINDER SINGH</strong>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 content-right hub-cnt">
            <div className="sbsptcntp">
              <Image src={hire} alt="HubSpot Hire Us" />
              <h3>HubSpot Development Services</h3>
              <p>
                <strong>
                  Unify Your Marketing, Sales , and Service Efforts
                </strong>
              </p>
              <p>Turn HubSpot into Your Growth Engine</p>
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

export default AutomateCertificate;
