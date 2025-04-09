import React from "react";
import auto from "../../../public/images/automationtestimg/automate-quality.webp";
import Image from "next/image";
const AutomateQuality = () => {
  return (
    <div className="automation-quality-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12 mb-4 mb-md-0 heading-main">
            <div className="automation-left pe-0 pe-md-4">
              <h2 className="mb-2">
                <span>Quality Assurance </span>
                <br />
                That Keeps Pace with Innovation
              </h2>
              <p className="mb-3">
                Our approach to software testing combines technical excellence
                with business understanding. We know that effective testing
                isn&apos;t just about finding bugs- it&apos;s about ensuring your products
                deliver real value to your customers. We work closely with your
                team to understand your business goals and design testing
                strategies that align with your objectives.
              </p>
              <p>
                We use a combination of automated and manual testing methods to
                ensure comprehensive coverage. Our automated tests handle
                repetitive tasks and regression testing, while our expert
                testers focus on exploratory testing and user experience
                evaluation. This balanced approach ensures that your products
                are not only bug-free but also user-friendly and aligned with
                your business requirements.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="automation-img">
              <Image src={auto} alt="automation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateQuality;
