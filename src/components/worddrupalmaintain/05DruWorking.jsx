import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-2.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-5.webp";
const DruWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>Drupal Maintenance</span>
            </h2>
            <p>
              Neglecting Drupal maintenance can lead to security breaches, slow
              performance, and loss of traffic. Here’s why timely maintenance is
              crucial:
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="Drupal maintenance services" />
              </div>
              <h5>Enhanced Security</h5>
              <p>
                Regular security updates protect your website from cyber
                threats, hacking attempts, and malware infections.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="System Icon" />
              </div>
              <h5>Optimal Performance</h5>
              <p>
                A well-maintained Drupal site runs faster and smoother,
                improving user experience and search engine rankings.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="Customer Satisfaction Icon" />
              </div>
              <h5>Minimized Downtime</h5>
              <p>
                Proactive maintenance prevents unexpected crashes and ensures
                maximum uptime for your website.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step4} alt="Setting Icon" />
              </div>
              <h5>Cost-Effective Maintenance</h5>
              <p>
                Fixing small issues early prevents major website breakdowns,
                saving you from expensive emergency repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DruWorking;
