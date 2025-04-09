import Image from "next/image";
import sas from "../../../public/images/internproimg/benefits-internship.webp";
import React from "react";
import track1 from "../../../public/images/internproimg/train-benefit-1.webp";
import track3 from "../../../public/images/internproimg/train-benefit-2.webp";
import track2 from "../../../public/images/internproimg/train-benefit-3.webp";
import track4 from "../../../public/images/internproimg/train-benefit-4.webp";

const HubTrainBenefits = () => {
  return (
    <>
      <section className="wgz-training-benefits py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12">
              <div className="col-12 heading-main mb-4">
                <h2>
                  Why Does a <br />
                  <span> HubSpot Development Certificate Matter?</span>
                </h2>
              </div>
              <div className="row program-list">
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track1} alt="Expertise Validation Icon" />
                    </div>
                    <h4>
                      Validates your expertise and makes your resume stand out
                      to employers.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track2} alt="Career Opportunities Icon" />
                    </div>
                    <h4>
                      Opens doors to roles in CRM development, inbound
                      marketing, and automation strategy.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track3} alt="Earning Potential Icon" />
                    </div>
                    <h4>
                      Increases earning potential by showcasing specialized
                      skills in a high-demand field.
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="training-program-benefits">
                    <div className="beneifts-icons">
                      <Image src={track4} alt="Global Recognition Icon" />
                    </div>
                    <h4>
                      Recognized globally by companies across various
                      industries.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="training-beneift-image">
                <Image src={sas} alt="HubSpot Development Certificate" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubTrainBenefits;
