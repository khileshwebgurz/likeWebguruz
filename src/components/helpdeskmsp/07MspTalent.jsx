import React from "react";

const MspTalent = () => {
  return (
    <div className="msptalent-services py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2 className="mb-4">
              Our <span> Support Team </span>
            </h2>

            <p>
              Connect with qualified and experienced support services
              professionals
            </p>
          </div>
        </div>
        <div className="row rmm">
          <div className="col-md-6 col-12 ">
            <div className="rmm-card">
              <div className="card-title-main">
                <h3>Helpdesk Engineers</h3>
                <p>Our helpdesk engineers provide:</p>
              </div>
              <div className="rmm-services-list">
                <ul>
                  <li>Remote technical support</li>
                  <li>Troubleshooting and issue resolution</li>
                  <li>Software installations and updates</li>
                  <li>User account management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="rmm-card">
              <div className="card-title-main">
                <h3>Senior Helpdesk Engineers</h3>
                <p>Our senior engineers handle:</p>
              </div>
              <div className="rmm-services-list">
                <ul>
                  <li>Advanced Troubleshooting</li>
                  <li>Server and network management</li>
                  <li>Security assessments</li>
                  <li>IT strategy consulting</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="rmm-card">
              <div className="card-title-main">
                <h3>System Administrators</h3>
                <p>Our system administrators specialize in:</p>
              </div>
              <div className="rmm-services-list">
                <ul>
                  <li>Server maintenance and monitoring</li>
                  <li>Network optimization</li>
                  <li>Data backup and recovery</li>
                  <li>IT infrastructure upgrades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MspTalent;
