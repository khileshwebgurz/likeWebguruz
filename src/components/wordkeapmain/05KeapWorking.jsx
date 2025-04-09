import React from "react";
import Image from "next/image";
import step1 from "../../../public/images/wordpressmaintenanceimg/main-rating-3.webp";
import step2 from "../../../public/images/wordpressmaintenanceimg/main-rating-5.webp";
import step3 from "../../../public/images/wordpressmaintenanceimg/main-rating-1.webp";
import step4 from "../../../public/images/wordpressmaintenanceimg/main-rating-7.webp";
const KeapWorking = () => {
  return (
    <div className="wordpresssiteplain py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Benefits of On-Time <span>Keap Maintenance</span>
            </h2>
            <p>
              Regular, proactive maintenance of your Squarespace website offers
              numerous advantages that can significantly impact your business
              success.
            </p>
          </div>
        </div>
        <div className="row row-plain">
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step1} alt="Keap maintenance services" />
              </div>
              <h5>Improved System Performance</h5>
              <p>
                Regular maintenance ensures your Keap system runs smoothly and
                efficiently, reducing load times and improving overall user
                experience.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step3} alt="Security Icon" />
              </div>
              <h5>Enhanced Data Security</h5>
              <p>
                Our maintenance protocols include security checks and updates to
                protect your valuable customer data from potential breaches or
                loss.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step2} alt="Setting Icon" />
              </div>
              <h5>Cost Savings</h5>
              <p>
                Proactive maintenance helps identify and resolve small issues
                before they become major problems requiring expensive emergency
                fixes.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="plain-card">
              <div className="card-img">
                <Image src={step4} alt="ROI Icon" />
              </div>
              <h5>Increased ROI</h5>
              <p>
                A well-maintained Keap system delivers better results for your
                marketing campaigns and customer relationship management
                efforts, directly impacting your bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapWorking;
