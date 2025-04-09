import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-2.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-5.webp";
const JooWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>Joomla Maintenance</span>
            </h2>
            <p>
              Keeping your Joomla website well-maintained isn&apos;t just about
              fixing problems- it&apos;s about preventing them before they impact
              your business.
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="Joomla maintenance services" />
              </div>
              <h5>Enhanced Security Protection</h5>
              <p>
                Regular maintenance ensures your Joomla core, extensions, and
                templates are up-to-date with the latest security patches,
                protecting your website from hackers and malware.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="Clock Icon" />
              </div>
              <h5>Reduced Downtime Risk</h5>
              <p>
                Proactive maintenance dramatically reduces the risk of
                unexpected downtime, ensuring your website is always available
                to serve your customers and generate business.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="Customer Satisfaction Icon" />
              </div>
              <h5>Improved Website Performance</h5>
              <p>
                Well-maintained Joomla websites load faster and perform better,
                leading to improved user experience, higher conversion rates,
                and better search engine rankings.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step4} alt="Setting Icon" />
              </div>
              <h5>Cost-Effective Operations</h5>
              <p>
                Regular maintenance is far less expensive than emergency repairs
                or rebuilding a compromised website, saving you money in the
                long run while providing peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JooWorking;
