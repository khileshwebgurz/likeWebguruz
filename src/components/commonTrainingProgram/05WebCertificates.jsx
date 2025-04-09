import Image from "next/image";
import React from "react";
import sas from "../../../public/images/internproimg/train-cert-2.webp";

const WebCertificates = () => {
  return (
    <>
      <section className="training certifications py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 heading-main">
              <h2>
                Earn Your <span>Certificate </span>
              </h2>
              <p>
                Show potential employers that you are equipped with the
                practical skills and industry knowledge to thrive in the digital
                space. The professional certificate from WebGuruz validates your
                expertise and demonstrates your commitment to mastering the
                skills needed for a successful career in web development.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <Image
                src={sas}
                alt="Website Development Internship Certificate"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebCertificates;
