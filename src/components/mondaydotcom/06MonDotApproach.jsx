import React from "react";
import Image from "next/image";
import app1 from "../../../public/images/mondaycomimages/mon-idea-1.png";
import app2 from "../../../public/images/mondaycomimages/mon-idea-2.png";
import app3 from "../../../public/images/mondaycomimages/mon-idea-3.png";
import app4 from "../../../public/images/mondaycomimages/mon-idea-4.png";
const MonDotApproach = () => {
  return (
    <div className="mondayapproach py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span> Approach </span>
            </h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={app1} alt="monday" />
              </div>
              <h3>Discovery</h3>
              <p>
                We learn about your business goals, challenges, and workflows to
                understand your unique needs.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={app2} alt="monday" />
              </div>
              <h3>Design</h3>
              <p>
                We create customized Monday.com solutions tailored specifically
                to your business requirements.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={app3} alt="monday" />
              </div>
              <h3>Implementation</h3>
              <p>
                We configure the platform, migrate data, and integrate with your
                existing systems.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="mondayoffer-box ">
              <div className="mondayoffer-img">
                <Image src={app4} alt="monday" />
              </div>
              <h3>Training</h3>
              <p>
                We ensure your team is confident using the new system through
                comprehensive training sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonDotApproach;
