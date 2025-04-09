import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const WixbMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              <strong>Keeping Your Wix Website </strong> Perfect So You Don&apos;t
              Have To
            </h2>
            <p className="text-white">
              At WebGuruz Technologies, we understand that you&apos;re busy running
              your business. That&apos;s why our Wix Maintenance Services take the
              technical burden off your shoulders. Our team of certified Wix
              experts handles everything from regular updates and security
              patches to content updates and performance optimization.
            </p>
            <p className="text-white">
              Your Wix website requires consistent attention to stay secure,
              functional, and appealing to visitors. Without proper maintenance,
              even small issues can quickly spiral into major problems that
              affect your business reputation and bottom line.
            </p>
            <p className="text-white">
              Our comprehensive maintenance services ensure that your website
              remains a powerful business tool rather than a source of
              frustration. We handle all the technical complexities so you can
              focus on serving your customers and growing your business.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="Best Wix maintenance services" />
                </div>
                <div className="count">
                  <h3>1500+</h3>
                </div>
              </div>
              <p>support tickets successfully resolved</p>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={clock} alt="Wix maintenance company" />
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
                  <Image src={speed} alt="Wix maintenance services cost" />
                </div>
                <div className="count">
                  <h3>98.7%</h3>
                </div>
              </div>
              <p>improvement in website loading speeds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WixbMaintainNumbers;
