import Image from "next/image";
import React from "react";
import sas from "../../../public/images/internproimg/train-cert-3.webp";

const HubCertificates = () => {
  return (
    <>
      <section className="training certifications py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 heading-main">
              <h2>
                <span>Your HubSpot </span> Certification Awaits!
              </h2>
              <p>
                Gain a globally recognized certificate upon course completion,
                demonstrating your proficiency in HubSpot development. This
                credential is a powerful addition to your professional profile,
                showcasing your commitment and expertise.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <Image src={sas} alt="HubSpot Certification" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubCertificates;
