import React from "react";

const MonConsultApproach = () => {
  return (
    <div className="mondaycons-approach py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              Our Approach to <span>Monday.com Consulting </span>
            </h2>
            <p>
              We believe that successful Monday.com implementation starts with
              understanding your business needs first, and technology second.
              Our consultants work closely with your team to design solutions
              that feel intuitive and add immediate value to your daily
              operations.
            </p>
          </div>
        </div>
        <div className="row monday-approach-cards">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="apporach-card blue-check">
              <h4>Say Hello To:</h4>
              <ul>
                <li>
                  Custom workflows tailored to your specific business needs
                </li>
                <li>Automation that saves hours of manual work each week</li>
                <li>Clear dashboards that provide instant insights</li>
                <li>Seamless integrations with your existing tech stack</li>
                <li>Team-wide adoption and enthusiasm for the platform</li>
                <li>Ongoing support from certified Monday.com experts</li>
                <li>Measurable ROI from your Monday.com investment</li>
                <li>Scalable solutions that grow with your business</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="apporach-card red-cross">
              <h4>Say Goodbye To:</h4>
              <ul>
                <li>Confusing spreadsheets and endless email chains</li>
                <li>Lost information and duplicated work</li>
                <li>Missed deadlines and unclear responsibilities</li>
                <li>Time wasted on manual data entry and updates</li>
                <li>Frustrated team members struggling with technology</li>
                <li>Unclear project status and progress tracking</li>
                <li>Disconnected systems and data silos</li>
                <li>
                  The feeling that you&apos;re not getting value from your software
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonConsultApproach;
