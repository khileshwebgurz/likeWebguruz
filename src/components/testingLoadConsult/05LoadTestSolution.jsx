import React from "react";

const LoadTestSolution = () => {
  return (
    <div className="loadsolutions-sections py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 heading-main ">
            <span className="short-title-test"> OUR SOLUTIONS </span>
            <h2 className="mb-2">
              Prevent Costly Downtime with{" "}
              <span> Proactive Performance Testing</span>
            </h2>
            <p>
              Don&apos;t wait for your website to crash during peak traffic. Our
              proactive load testing helps you stay ahead of performance issues.
            </p>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row solutions-row">
              <div className="col-md-6 col-12 mb-4">
                <div className="solutions-content">
                  <h4>Early Problem Detection</h4>
                  <p>
                    Identify and fix performance bottlenecks before they affect
                    real users, saving time and protecting your reputation.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <div className="solutions-content">
                  <h4>Risk Mitigation</h4>
                  <p>
                    Reduce the risk of revenue loss and damaged brand reputation
                    from unexpected system failures during high-traffic periods.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4 mb-md-0">
                <div className="solutions-content">
                  <h4>Capacity Planning Insights</h4>
                  <p>
                    Understand exactly how many concurrent users your system can
                    handle, helping you plan infrastructure upgrades
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 ">
                <div className="solutions-content">
                  <h4>Improved User Experience</h4>
                  <p>
                    Ensure consistent performance even during traffic spikes,
                    keeping customers satisfied and engaged with your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadTestSolution;
