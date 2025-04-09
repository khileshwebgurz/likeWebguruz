import React from "react";
import Image from "next/image";
import real from "../../../public/images/keapimages/keap-stratergy.svg";
const KeapReality = () => {
  return (
    <div className="keaprealtiy-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="reality-img">
              <Image src={real} alt="reality" />
            </div>
          </div>
          <div className="col-md-8 col-12 heading-main ">
            <div className="realtiy-content">
              <h2 className="mb-2 mb-md-3">
                <span>Keap Strategy </span> Consulting
              </h2>
              <p>
                Beyond technical implementation, we offer strategic consulting
                to help you maximize the value of your Keap investment. Our
                consultants work with you to develop effective automation
                strategies, optimize your sales and marketing processes, and
                align your Keap implementation with your overall business
                objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapReality;
