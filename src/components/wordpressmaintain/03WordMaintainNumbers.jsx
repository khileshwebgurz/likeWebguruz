import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const WordMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              <strong>WordPress Maintenance Services </strong> That Keep Your
              Business Ahead
            </h2>
            <p className="text-white">
              Running a successful website requires ongoing maintenance, but it
              shouldn’t be a burden on you. Our WordPress Maintenance Services
              take care of everything, so you can focus on what you do
              best-growing your business.
            </p>
            <p className="text-white">
              We provide security updates to protect against hackers, optimize
              your website’s speed to improve user engagement, and perform
              regular backups to ensure your data is safe. Our experts
              constantly monitor your website, fixing any issues before they can
              cause downtime.
            </p>
            <p className="text-white">
              Whether you run a small blog, an eCommerce store, or a corporate
              website, our team ensures smooth performance and seamless
              functionality.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="Best wordpress maintenance services" />
                </div>
                <div className="count">
                  <h3>10000+</h3>
                </div>
              </div>
              <p>Tickets Resolved</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={clock} alt="WordPress maintenance company" />
                </div>
                <div className="count">
                  <h3>2 Hr</h3>
                </div>
              </div>
              <p>Avg. Turnaround Time</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center ">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={speed} alt="Wordpress maintenance services cost" />
                </div>
                <div className="count">
                  <h3>99.9%</h3>
                </div>
              </div>
              <p>Uptime Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordMaintainNumbers;
