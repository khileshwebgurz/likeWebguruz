import React from "react";
import Image from "next/image";
import transfer1 from "../../../public/images/keapimages/keap-chat-1.webp";
import transfer2 from "../../../public/images/keapimages/keap-chat-2.webp";
import transfer3 from "../../../public/images/keapimages/keap-chat-3.webp";
import transfer4 from "../../../public/images/keapimages/keap-chat-4.webp";

const KeapBenefits = () => {
  return (
    <div className="keapdeveloper-section pt-5 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-5">
            <h2>
              Unique Value <span>Proposition at WebGuruz</span>
            </h2>
          </div>
        </div>
        <div className="row developer-row mt-5">
          <div className="col-md-6 col-12 mb-5">
            <div className="developer-box">
              <div className="developer-img">
                <Image src={transfer1} alt="transfer" />
              </div>
              <div className="developer-box-text">
                <h5>Tailored Solutions</h5>
                <p>
                  We don&apos;t believe in one-size-fits-all approaches. Each
                  solution we create is custom-built to address your specific
                  business challenges and goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="developer-box">
              <div className="developer-img">
                <Image src={transfer2} alt="transfer" />
              </div>
              <div className="developer-box-text">
                <h5>Certified Keap Experts</h5>
                <p>
                  Our team includes certified Keap specialists who stay updated
                  with the latest features and best practices to deliver
                  cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="developer-box">
              <div className="developer-img">
                <Image src={transfer3} alt="transfer" />
              </div>
              <div className="developer-box-text">
                <h5>Transparent Development Process</h5>
                <p>
                  We keep you informed every step of the way with regular
                  updates, detailed documentation, and clear communication
                  throughout the project lifecycle.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="developer-box">
              <div className="developer-img">
                <Image src={transfer4} alt="transfer" />
              </div>
              <div className="developer-box-text">
                <h5>Ongoing Support</h5>
                <p>
                  Our relationship doesn&apos;t end at project delivery. We provide
                  continued support and maintenance to ensure your Keap system
                  evolves with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapBenefits;
