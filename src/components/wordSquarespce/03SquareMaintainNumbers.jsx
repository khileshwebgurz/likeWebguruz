import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const SquareMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              <strong>Stop Struggling with Your Website </strong> and Start
              Growing Your Business
            </h2>
            <p className="text-white">
              At WebGuruz Technologies, we understand that your time is
              valuable. Managing a Squarespace website requires technical
              knowledge and consistent attention that most business owners
              simply don&apos;t have. Our dedicated Squarespace maintenance services
              provide the expert care your website needs, allowing you to focus
              on serving your customers and expanding your business.
            </p>
            <p className="text-white">
              Our team works behind the scenes to ensure your website loads
              quickly, functions properly, and presents your brand in the best
              possible light. We handle everything from routine updates and
              security checks to content updates and design tweaks, providing
              you with a hassle-free experience and peace of mind.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="ticket-resolved" />
                </div>
                <div className="count">
                  <h3>5000+</h3>
                </div>
              </div>
              <p>support tickets successfully resolved</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={clock} alt="ticket-resolved" />
                </div>
                <div className="count">
                  <h3>4 Hr</h3>
                </div>
              </div>
              <p>Average response time</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center ">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={speed} alt="ticket-resolved" />
                </div>
                <div className="count">
                  <h3>98%</h3>
                </div>
              </div>
              <p>improvement in website performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareMaintainNumbers;
