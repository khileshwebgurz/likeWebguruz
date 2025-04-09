import React from "react";
import Image from "next/image";
import work from "../../../public/images/mspimages/how-work-svg.svg";
const MspWorking = () => {
  return (
    <div className="mspwork-section py-5">
      <div className="container">
        <div className="row ">
          <div className="col-xl-10 mx-auto col-12 heading-main text-center mb-4">
            <h2 className="mb-3">How We <span>Work?</span></h2>
            <p>
              We follow a structured approach to MSP services, ensuring seamless
              IT operations. Our process includes assessing your IT
              infrastructure, implementing tailored solutions, continuously
              monitoring systems, and providing 24/7 support to address any
              issues that arise.
            </p>
          </div>
          <div className="col-12 work-images">
            <Image src={work} alt="MSP services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MspWorking;
