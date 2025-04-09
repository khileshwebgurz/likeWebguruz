import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const JooMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              <strong>Reliable Joomla Support  </strong> When You Need It Most
            </h2>
            <p className="text-white">
            Your website doesn&apos;t operate on a 9-to-5 schedule, and neither do we. At WebGuruz Technologies, we offer round-the-clock Joomla maintenance services to keep your website running smoothly at all times. 
            </p>
            <p className="text-white">
            Our expert team proactively monitors your website, identifying and fixing issues before they affect your users. We handle everything from security updates and bug fixes to performance optimization and feature enhancements.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="Best Joomla maintenance services" />
                </div>
                <div className="count">
                  <h3>3500+</h3>
                </div>
              </div>
              <p>support tickets successfully resolved</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={clock} alt="Joomla maintenance company" />
                </div>
                <div className="count">
                  <h3>4 Hr</h3>
                </div>
              </div>
              <p>average response time</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center ">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={speed} alt="Joomla maintenance services cost" />
                </div>
                <div className="count">
                  <h3>98.7%</h3>
                </div>
              </div>
              <p>uptime improvement for clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JooMaintainNumbers;
