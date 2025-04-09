import Image from "next/image";
import sas from "../../../public/images/internproimg/benefits-internship.webp";
import React from "react";
import track1 from "../../../public/images/internproimg/train-benefit-1.webp";
import track2 from "../../../public/images/internproimg/train-benefit-2.webp";
import track3 from "../../../public/images/internproimg/train-benefit-3.webp";
import track4 from "../../../public/images/internproimg/train-benefit-4.webp";

const DigitalTrainingBenefits = () => {
  return (
    <>
      <section className="wgz-training-benefits py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <div className="col-12 heading-main mb-4">
                <h2>
                  Benefits of a <br />{" "}
                  <span> Digital Marketing Certificate</span>
                </h2>
              </div>
              <div className="row program-list">
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track1} alt="Marketing Expertise Icon" />
                    </div>
                    <h4>
                      Validates your expertise and credibility in digital
                      marketing.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track2} alt="Career Opportunities Icon" />
                    </div>
                    <h4>
                      Opens doors to higher-paying job opportunities across
                      industries.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track3} alt="Employability Boost Icon" />
                    </div>
                    <h4>
                      Boosts your employability and gives you an edge in
                      interviews.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track4} alt="Professional Growth Icon" />
                    </div>
                    <h4>
                      Demonstrates your commitment to staying updated in a
                      dynamic field.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="training-beneift-image">
                <Image src={sas} alt="Digital Marketing Certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTrainingBenefits;
