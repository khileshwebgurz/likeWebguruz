import React from "react";
import partnercheck from "../../../public/images/manualsoftimages/choose-check.svg";
import partner from "../../../public/images/manualsoftimages/partner.webp";
import Image from "next/image";
const ManualPartner = () => {
  return (
    <div className="manualpartner py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-3">
              Why Work <br />
              <span> With WebGuruz?</span>
            </h2>
            <div className="partner-list">
              <ul>
                <li>
                  Our testers average 5+ years of experience across various
                  industries and technologies.
                </li>
                <li>
                  We tailor our testing approach to your specific needs,
                  focusing on what matters most to your business.
                </li>
                <li>
                  We provide regular updates, detailed reports, and direct
                  access to our testing team throughout the process.
                </li>
                <li>
                  Whether you need short-term testing support or a long-term
                  quality assurance partner, we have options to suit your needs.
                </li>
                <li>
                  We understand the pressures of software development cycles and
                  work efficiently to meet your deadlines.
                </li>
                <li>
                  We offer excellent value for high-quality manual testing
                  services, with pricing models that work for businesses of all
                  sizes.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="partner-img">
              <Image src={partner} alt="partner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualPartner;
