import React from "react";
import man from "../../../public/images/automationtestimg/test-man.png";
import mark from "../../../public/images/automationtestimg/check-mark.svg";
import Image from "next/image";
const AutomateExperts = () => {
  return (
    <div className="automationtest-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="automation-test-left">
              <div className="test-img">
                <Image src={man} alt="test" />
              </div>
              <div className="test-title">
                <h2>
                  What <br />
                  Differentiates Us?
                </h2>
                <div className="talk-to">
                  <a href="/book-an-appointment">Talk to our Experts</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="autotest-list-main">
              <div className="test-list">
                <div className="test-mark-img">
                  <Image src={mark} alt="check-mark" />
                </div>
                <h3>Custom Automation Frameworks</h3>
              </div>
              <p>
                We don&apos;t use one-size-fits-all solutions. We build custom
                automation frameworks tailored to your specific needs,
                technology stack, and business goals. This targeted approach
                delivers better results and higher ROI.
              </p>
            </div>
            <div className="autotest-list-main">
              <div className="test-list">
                <div className="test-mark-img">
                  <Image src={mark} alt="check-mark" />
                </div>
                <h3>Skilled Testing Professionals</h3>
              </div>
              <p>
                Our team includes certified testing professionals with years of
                experience in both manual and automated testing. They understand
                the nuances of different industries and can apply best practices
                to your specific situation.
              </p>
            </div>
            <div className="autotest-list-main">
              <div className="test-list">
                <div className="test-mark-img">
                  <Image src={mark} alt="check-mark" />
                </div>
                <h3>Transparent Communication</h3>
              </div>
              <p>
                We maintain clear, open communication throughout the testing
                process. Regular updates, detailed reports, and honest feedback
                ensure you always know the status of your project and can make
                informed decisions.
              </p>
            </div>
            <div className="autotest-list-main">
              <div className="test-list">
                <div className="test-mark-img">
                  <Image src={mark} alt="check-mark" />
                </div>
                <h3>Continuous Improvement</h3>
              </div>
              <p>
                We&apos;re constantly refining our testing approaches and adopting
                new tools and techniques. This commitment to improvement ensures
                that you benefit from the latest advancements in testing
                automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomateExperts;
