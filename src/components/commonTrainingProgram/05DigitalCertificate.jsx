import Image from "next/image";
import React from "react";
import sas from "../../../public/images/internproimg/train-cert-1.webp";

const DigitalCertificate = () => {
  return (
    <>
      <section className="training certifications py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 heading-main">
              <h2>
                <span>Stand Out from </span> the Crowd
              </h2>
              <p>
                At WebGuruz Technologies Pvt Ltd, we provide a course completion
                certificate recognized by employers. It’s your badge of
                excellence, proving your skills in key areas of digital
                marketing.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <Image src={sas} alt="Digital Marketing Internship Certificate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalCertificate;
