import React from "react";
import Image from "next/image";
import certiimg from "../../../public/images/internproimg/intern-taining.webp";
import CareecheckMark from "../../../public/images/internproimg/caree-check-mark.webp";

const InternDifferentFrom = () => {
  const points = [
    "Industry Partnerships",
    "Comprehensive Curriculum",
    "Expert Trainers",
    "Live Projects",
    "Job Readiness",
    "Flexible Batches",
    "Affordable Rates",
    "Strong Alumni Network",
  ];

  return (
    <div className="hubdev-certified new-intern-program py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 heading-main mb-4 mb-md-0  ">
            <div className="hub-certified-content intern-left-content">
              <h2>
                What Sets <span>Us Apart?</span>
              </h2>
              <p>
                Our industrial training program in Mohali/Chandigarh is unique
                in several ways. With a focus on practical, real-world skills,
                we ensure that you are job-ready by the end of the program.
                Here&apos;s what makes us the best choice:
              </p>
            </div>
            <div className="row technology-card">
              {[0, 1].map((colIndex) => (
                <div className="intern-fav-point col-md-6 mt-3" key={colIndex}>
                  <ul>
                    {points
                      .slice(colIndex * 4, colIndex * 4 + 4)
                      .map((point, index) => (
                        <li key={index}>
                          <Image src={CareecheckMark} alt="check mark" />
                          {point}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="certified-img">
              <Image src={certiimg} alt="Industrial Training Program Chandigarh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternDifferentFrom;
