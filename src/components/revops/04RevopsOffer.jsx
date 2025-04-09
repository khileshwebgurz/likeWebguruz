import React from "react";
import Image from "next/image";
import offer1 from "../../../public/images/revoppsimage/rev-data-1.webp";
import offer2 from "../../../public/images/revoppsimage/rev-data-2.webp";
import offer3 from "../../../public/images/revoppsimage/rev-data-3.webp";
const RevOffer = () => {
  return (
    <div className="revoffer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              What Else Do <span> We Offer?</span>
            </h2>
            <p>
              We offer a range of related services to complement your RevOps
              strategy, ensuring seamless integration, automation, and
              optimization across your entire revenue ecosystem.
            </p>
          </div>
        </div>
        <div className="row revoffer-row">
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="offer-card">
              <div className="offer-img">
                <Image src={offer1} alt="offer" />
              </div>
              <h3>Zoho Services</h3>
              <p>
                Streamline your business operations with our expert Zoho CRM and
                automation solutions. From lead management to sales pipeline
                tracking, we help you maximize efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="offer-card">
              <div className="offer-img">
                <Image src={offer2} alt="offer" />
              </div>
              <h3>Monday Consulting Services</h3>
              <p>
                Optimize project management and team collaboration with our
                Monday.com consulting services. We customize workflows to
                improve productivity and tracking.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 mb-md-0">
            <div className="offer-card">
              <div className="offer-img">
                <Image src={offer3} alt="offer" />
              </div>
              <h3>Tech Stack Automation</h3>
              <p>
                Enhance efficiency by automating your business processes. We
                integrate and optimize tools for seamless operation across
                departments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevOffer;
