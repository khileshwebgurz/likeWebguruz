import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const KeapMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              Your Business Deserves <strong>Expert Keap Support </strong>
            </h2>
            <p className="text-white">
              At WebGuruz Technologies, we don&apos;t just fix problems- we prevent
              them from happening in the first place. Our proactive maintenance
              approach ensures fewer disruptions to your business operations and
              more consistent results from your Keap implementation. Whether
              you&apos;re experiencing specific issues or simply want to optimize
              your system&apos;s performance, our team of Keap specialists has the
              expertise to deliver results.
            </p>
            <p className="text-white">
              We take a hands-on approach to system monitoring, regularly
              updating and fine-tuning your Keap platform to prevent performance
              bottlenecks, security vulnerabilities, and integration conflicts.
            </p>
            <p className="text-white">
              By staying ahead of potential issues, we help you maintain
              seamless automation, improve lead management, and enhance customer
              engagement. Our dedicated support team is always available to
              troubleshoot concerns, implement best practices, and ensure your
              Keap CRM aligns perfectly with your business goals.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="Best Keap maintenance services" />
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
                  <Image src={clock} alt="Keap maintenance company" />
                </div>
                <div className="count">
                  <h3>4 Hr</h3>
                </div>
              </div>
              <p>average response time for urgent issues</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center ">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={speed} alt="Keap maintenance services cost" />
                </div>
                <div className="count">
                  <h3>97%</h3>
                </div>
              </div>
              <p>client satisfaction rate with our maintenance services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapMaintainNumbers;
