import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const DruMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              <strong>Drupal Maintenance Services </strong> That Keep Your
              Website at Its Best
            </h2>
            <p className="text-white">
              At WebGuruz Technologies, we go beyond basic fixes. Our
              comprehensive Drupal maintenance services ensure your website
              remains secure, optimized, and always up-to-date. From security
              patches to bug fixes and speed optimization, we provide proactive
              solutions that eliminate downtime and improve performance.
            </p>
            <p className="text-white">
              We understand that every second counts for your business, which is
              why our team offers fast response times and proactive monitoring.
              We track vulnerabilities, fix broken links, optimize site speed,
              and provide regular backups. Our goal is to deliver seamless
              website performance so that you never lose potential customers due
              to technical issues.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="Best Drupal maintenance services" />
                </div>
                <div className="count">
                  <h3>10000+</h3>
                </div>
              </div>
              <p>support tickets successfully resolved</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={clock} alt="Drupal maintenance company" />
                </div>
                <div className="count">
                  <h3>2 Hr</h3>
                </div>
              </div>
              <p>average turnaround time for urgent fixes</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center ">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={speed} alt="Drupal maintenance services cost" />
                </div>
                <div className="count">
                  <h3>99.9%</h3>
                </div>
              </div>
              <p>uptime improvement for websites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DruMaintainNumbers;
