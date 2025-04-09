import React from "react";
import Rightarrow from "../../../public/images/whiteseoimg/right.svg";
import seowork from "../../../public/images/traningdevimg/employee-train.jpg";
import Image from "next/image";

const TrainHelp = () => {
  const benefits = [
    "Accelerates individual and organizational performance",
    "Reduces skill gaps and training costs",
    "Improves employee engagement and retention",
    "Drives innovation and competitive advantage",
    "Creates a culture of continuous learning",
  ];

  return (
    <div className="webguruzprocesswork-sec training-help py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <div className="work-seo-img">
              <Image src={seowork} alt="White-Label SEO Strategies" />
            </div>
          </div>
          <div className="col-6 heading-main text-left mb-4 mb-md-5">
            <h2>
              Why Our Employee Training &{" "}
              <span>Development Services Matter? </span>
            </h2>
            <p className="mt-3">
              Our training solutions are your strategic advantage in building a
              world-class workforce. We don&apos;t just train employees- we transform
              them into high-performing, innovative professionals. By addressing
              critical skill gaps, our targeted programs dramatically accelerate
              individual and organizational performance.
            </p>
            <div className="icon-text-main-work">
              <ul className="icon-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span>
                      <Image src={Rightarrow} alt="right" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainHelp;
