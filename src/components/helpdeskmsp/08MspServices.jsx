import Link from "next/link";

const MspServices = () => {
  return (
    <div className="msp-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-title text-center mb-4">
            <h2>
              <strong>Administrative </strong> Support Services
            </h2>
            <p>
              Our administrative support services ensure smooth IT operations
              for your business.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="services-card">
              <h3>
                IT Documentation <br /> Management
              </h3>
              <p>Ensuring Accuracy and Compliance with Organized IT Records</p>
              <div className="rmm-services-list">
                <ul>
                  <li>Maintaining IT records</li>
                  <li>Documenting IT processes</li>
                  <li>Organizing system configurations</li>
                  <li>Ensuring compliance documentation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="services-card">
              <h3>
                Vendor <br />
                Management{" "}
              </h3>
              <p>
                Optimizing Third-Party Partnerships for Seamless IT Operations
              </p>
              <div className="rmm-services-list">
                <ul>
                  <li>Managing third-party IT vendors</li>
                  <li>Negotiating service agreements</li>
                  <li>Evaluating vendor performance</li>
                  <li>Ensuring timely renewals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="services-card">
              <h3>
                IT Asset <br />
                Management
              </h3>
              <p>Maximizing Efficiency with Strategic IT Asset Oversight</p>
              <div className="rmm-services-list">
                <ul>
                  <li>Tracking IT assets</li>
                  <li>Managing software licenses</li>
                  <li>Optimizing IT resources</li>
                  <li>Conducting periodic audits</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-3 mt-lg-5 mb-3">
            <Link href="/contact-us" className="get-btn">
              GET STARTED{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MspServices;
