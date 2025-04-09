import React from "react";
import Image from "next/image";
import laod from "../../../public/images/loadtestingimg/load-points.svg";
const LoadTestApproach = () => {
  return (
    <div className="loadour-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              A Proven Approach to <strong> Load & Performance Testing </strong>
            </h2>
          </div>
        </div>
        <div className="row our-laod-row" style={{alignItems:"center"}}>
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className="our-laod-count">
              <div className="count-one">
                <div className="count-number">
                  <h5>1</h5>
                </div>
                <div className="count-details">
                  <h4>In-Depth System Analysis</h4>
                  <p>
                    We start by analyzing your entire system architecture to
                    understand potential weak points and create targeted test
                    scenarios.
                  </p>
                </div>
              </div>
              <div className="count-one">
                <div className="count-number">
                  <h5>2</h5>
                </div>
                <div className="count-details">
                  <h4>Custom Test Script Development</h4>
                  <p>
                    Our experts develop realistic test scripts that accurately
                    simulate user journeys specific to your application.
                  </p>
                </div>
              </div>
              <div className="count-one">
                <div className="count-number">
                  <h5>3</h5>
                </div>
                <div className="count-details">
                  <h4>Gradual Load Increase</h4>
                  <p>
                    We incrementally increase the virtual user load to identify
                    exact breaking points and performance thresholds.
                  </p>
                </div>
              </div>
              <div className="count-one">
                <div className="count-number">
                  <h5>4</h5>
                </div>
                <div className="count-details">
                  <h4>Real-time Monitoring</h4>
                  <p>
                    During testing, we monitor all system components to pinpoint
                    specific bottlenecks and failure points.
                  </p>
                </div>
              </div>
              <div className="count-one">
                <div className="count-number">
                  <h5>5</h5>
                </div>
                <div className="count-details">
                  <h4>Actionable Recommendations</h4>
                  <p>
                    We provide clear, prioritized recommendations to address
                    identified issues based on impact and implementation effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="laod-img">
              <Image src={laod} alt="laoding-pc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadTestApproach;
