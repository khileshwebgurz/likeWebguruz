import Link from "next/link";

const LoadTestChallenge = () => {
  return (
    <div className="loadchalange-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="challenges-card">
              <h2>
                Challenges in <br />
                Performance Testing
              </h2>
              <p>
                Common Challenges and <br />
                Our Solutions
              </p>
              <Link href="/book-an-appointment" className="challeng-btn">
                Talk to our Experts
              </Link>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row challenge-row">
              <div className="col-md-6 col-12 mb-3 mb-md-0">
                <div className="challenges-content">
                  <div className="challenges-title">
                    <h4 className="red-text">Common Challenges</h4>
                  </div>
                  <ul>
                    <li>Accurately simulating real-world user behavior</li>
                    <li>
                      Identifying the root causes of performance bottlenecks
                    </li>
                    <li>Testing third-party integrations and dependencies</li>
                    <li>
                      Balancing test coverage with time and budget constraints
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-3 mb-md-0">
                <div className="challenges-content">
                  <div className="challenges-title  green-title">
                    <h4 className="red-green">Our Solutions</h4>
                  </div>
                  <ul>
                    <li>
                      Custom user journey scripts based on actual analytics data
                    </li>
                    <li>
                      Advanced diagnostic tools to pinpoint exact failure points
                    </li>
                    <li>Isolated component testing for third-party services</li>
                    <li>
                      Prioritized testing approach focused on business-critical
                      functions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadTestChallenge;
