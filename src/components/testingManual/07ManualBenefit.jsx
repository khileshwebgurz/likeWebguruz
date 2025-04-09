import React from "react";
import Image from "next/image";
import square1 from "../../../public/images/manualsoftimages/manual-exp-1.webp";
import square2 from "../../../public/images/manualsoftimages/manual-exp-2.webp";
import square3 from "../../../public/images/manualsoftimages/manual-exp-3.webp";
import square4 from "../../../public/images/manualsoftimages/manual-exp-4.webp";
const ManualBenefit = () => {
  return (
    <div className="squarespace-services manual-test-benefit py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Benefits of <span> Manual Testing Services </span>
            </h2>
            <p>
              While automated testing has its place, manual testing offers
              unique advantages that are essential for delivering truly
              exceptional software. Our manual testing services provide a human
              perspective that automated tools simply cannot match.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square1} alt="Background Image" />
              </div>
              <div className="squarspace-card-title">
                <h4>Superior User Experience Validation</h4>
                <p>
                  Our testers evaluate your software from a user&apos;s perspective,
                  identifying usability issues that automated tests would miss.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square2} alt="Square Box" />
              </div>
              <div className="squarspace-card-title">
                <h4>Cost-effective for Visual Applications</h4>
                <p>
                  For applications with complex visual elements, manual testing
                  is often more efficient and cost-effective than creating
                  automated visual tests.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square3} alt="Square Box Background" />
              </div>
              <div className="squarspace-card-title">
                <h4>Flexibility and Adaptability</h4>
                <p>
                  Manual testing can quickly adjust to changing requirements
                  without extensive script modifications, saving time during
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="squarspace-card">
              <div className="card-icon">
                <Image src={square4} alt="24/7 IT Support Icon" />
              </div>
              <div className="squarspace-card-title">
                <h4>Immediate Feedback</h4>
                <p>
                  Our testers provide real-time feedback during testing,
                  allowing for quicker issue resolution and development
                  iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualBenefit;
