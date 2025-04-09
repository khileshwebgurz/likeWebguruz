import React from "react";
import teamhire1 from "../../../public/images/manualsoftimages/manual-task-1.webp";
import teamhire2 from "../../../public/images/manualsoftimages/manual-task-2.webp";
import teamhire3 from "../../../public/images/manualsoftimages/manual-task-3.webp";
import Image from "next/image";
const ManualProcess = () => {
  return (
    <div className="manualservice-section manualproces-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <strong> Engagement Models </strong>
            </h2>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="manual-card">
              <div className="team-img">
                <Image src={teamhire1} alt="team" />
              </div>
              <h3>Dedicated Testing Team</h3>
              <p>
                Get a dedicated team of manual testers who work exclusively on
                your projects, becoming an extension of your in-house team.
              </p>
              <div className="hire-btn">
                <a href="#" className=" apply-btn">
                  Hire team
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="manual-card">
              <div className="team-img">
                <Image src={teamhire2} alt="team" />
              </div>
              <h3>Project-Based Testing</h3>
              <p>
                Engage our services for specific projects or releases, with
                clear deliverables, timelines, and fixed pricing.
              </p>
              <div className="hire-btn">
                <a href="#" className=" apply-btn">
                  Hire team
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="manual-card">
              <div className="team-img">
                <Image src={teamhire3} alt="team" />
              </div>
              <h3>Testing as a Service (TaaS)</h3>
              <p>
                Access our testing expertise on demand with our flexible,
                scalable testing service that can be adjusted based on your
                changing needs.
              </p>
              <div className="hire-btn">
                <a href="#" className=" apply-btn">
                  Hire team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualProcess;
