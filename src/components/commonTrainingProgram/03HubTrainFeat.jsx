import React from "react";
import Image from "next/image";
import track1 from "../../../public/images/internproimg/training-hands-1.webp";
import track2 from "../../../public/images/internproimg/training-hands-2.webp";
import track3 from "../../../public/images/internproimg/training-hands-3.webp";
import track4 from "../../../public/images/internproimg/training-hands-7.webp";
import track5 from "../../../public/images/internproimg/training-hands-8.webp";
import track6 from "../../../public/images/internproimg/training-hands-6.webp";
const HubTrainFeat = () => {
  return (
    <>
      <section className="training-features digital py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center">
              <h2>
                Key Features of the <span>Training Course</span>
              </h2>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track1} alt="Learning Sessions Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Practical Learning Sessions</h4>
                  <p>
                    Hands-on projects to solidify your knowledge of HubSpot
                    tools and integrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track2} alt="Expert Mentorship Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Expert Mentorship</h4>
                  <p>
                    Learn from certified HubSpot professionals with years of
                    experience in the field.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track3} alt="Job-Ready Curriculum Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Job-Ready Curriculum</h4>
                  <p>
                    Tailored modules focusing on skills most sought-after by
                    employers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track4} alt="Live Project Experience Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Live Project Experience</h4>
                  <p>
                    Work on real-time projects to understand industry challenges
                    and solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track5} alt="Flexible Class Schedules Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Flexible Class Schedules</h4>
                  <p>
                    Weekday and weekend classes to fit around your existing
                    commitments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track6} alt="Certification Assistance Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Certification Assistance</h4>
                  <p>
                    Get guidance to ace the official HubSpot certification exams
                    with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubTrainFeat;
