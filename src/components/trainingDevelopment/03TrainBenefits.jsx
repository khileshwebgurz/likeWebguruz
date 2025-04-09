import React from "react";
import Image from "next/image";
import traning1 from "../../../public/images/traningdevimg/training-dev.jpg";
const TrainingBenfits = () => {
  return (
    <div className="training-benfit py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12">
            <div className="benifit-left">
              <h2>
                Bridging Skills Gaps, <br />{" "}
                <strong> Accelerating Organizational Success</strong>
              </h2>
              <p>
                Our Employee Training & Development service is a comprehensive,
                tailored approach to workforce enhancement. We conduct in-depth
                organizational assessments to identify skill gaps, design
                customized training modules, and implement cutting-edge learning
                strategies. From digital marketing expertise to leadership
                development, our programs are crafted to meet the evolving
                demands of modern businesses, ensuring your team stays ahead of
                the curve.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="traning-benifit-right">
              <Image src={traning1} alt="traning-benifit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingBenfits;
