import Image from "next/image";
import sas from "../../../public/images/internproimg/benefits-internship.webp";
import React from "react";
import track1 from "../../../public/images/internproimg/train-benefit-1.webp";
import track2 from "../../../public/images/internproimg/train-benefit-2.webp";
import track3 from "../../../public/images/internproimg/train-benefit-3.webp";
import track4 from "../../../public/images/internproimg/train-benefit-4.webp";

const WebTrainBenefits = () => {
  return (
    <>
      <section className="wgz-training-benefits py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <div className="col-12 heading-main mb-4">
                <h2>
                  Benefits of Having a <br />{" "}
                  <span> Website Development Certificate</span>
                </h2>
              </div>
              <div className="row program-list">
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track1} alt="Official Certificate Icon" />
                    </div>
                    <h4>
                      Stand out in a competitive job market with an official
                      certificate from WebGuruz Technologies Pvt Ltd.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track2} alt="Career Growth Icon" />
                    </div>
                    <h4>
                      Boost your chances of securing high-paying roles in web
                      development.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track3} alt="Developer Credibility Icon" />
                    </div>
                    <h4>
                      Gain credibility as a qualified web developer, making you
                      more attractive to potential employers.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track4} alt="Career Support Icon" />
                    </div>
                    <h4>
                      Access to ongoing career guidance and placement assistance
                      that accelerates your professional growth.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="training-beneift-image">
                <Image src={sas} alt="Website Development Certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebTrainBenefits;
