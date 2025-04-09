import React from "react";
import Image from "next/image";
import ticket from "../../../public/images/wordpressmaintenanceimg/solved.png";
import clock from "../../../public/images/wordpressmaintenanceimg/clock.png";
import speed from "../../../public/images/wordpressmaintenanceimg/speed.png";
const WebMaintainNumbers = () => {
  return (
    <div className="wordpressexpert-maintenance py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2 text-white">
              Never Worry About Your <strong>Webflow Website Again </strong>
            </h2>
            <p className="text-white">
              When you partner with WebGuruz Technologies for Webflow
              maintenance, you&apos;re choosing reliability and expertise. Our team
              stays updated with the latest Webflow features and best practices
              to keep your website running smoothly.
            </p>
            <p className="text-white">
              We understand that your website is a critical business asset.
              That&apos;s why we offer comprehensive maintenance services that
              include regular updates, security checks, performance
              optimization, and quick troubleshooting. Our goal is to prevent
              issues before they affect your business and resolve any problems
              promptly when they arise.
            </p>
          </div>
        </div>
        <div className="row row-expert">
          <div className="col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="expert-box">
              <div className="expert-img-text">
                <div className="expert-img">
                  <Image src={ticket} alt="Best Webflow maintenance services" />
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
                  <Image src={clock} alt="Webflow maintenance company" />
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
                  <Image src={speed} alt="Webflow maintenance services cost" />
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

export default WebMaintainNumbers;
