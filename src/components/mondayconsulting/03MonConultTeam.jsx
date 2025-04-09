import React from "react";
import Image from "next/image";
import process from "../../../public/images/mondayconsimages/consult-business.jpg";
const MonConsultTeam = () => {
  return (
    <div className="monday-consult-team py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="process-img">
              <Image src={process} alt="process" />
            </div>
          </div>
          <div className="col-md-6 heading-main col-12 mb-4 mb-md-0">
            <h2 className="mb-2">
              Supercharge Your Business with Expert{" "}
              <span> Monday.com Consulting</span>
            </h2>
            <p className="mt-3">
              Our comprehensive Monday.com consulting services are designed to
              help you maximize ROI and transform how your teams work. We take a
              holistic approach to implementation, ensuring that Monday.com
              becomes an integral part of your organization&apos;s success story.
            </p>
            <div className="process-list">
              <ul>
                <li>
                  Custom automation that eliminates repetitive tasks and human
                  error
                </li>
                <li>
                  Break down silos and improve communication across departments
                </li>
                <li>
                  Get instant insights into project status, team capacity, and
                  deadlines
                </li>
                <li>
                  Custom dashboards and reports that help you make smarter
                  business choices
                </li>
                <li>
                  Connect Monday.com with your existing tools for a unified work
                  ecosystem
                </li>
                <li>
                  Systems that grow with your business without requiring
                  complete overhauls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonConsultTeam;
