import React from "react";
import Image from "next/image";
import track1 from "../../../public/images/internproimg/training-hands-1.webp";
import track2 from "../../../public/images/internproimg/training-hands-2.webp";
import track3 from "../../../public/images/internproimg/training-hands-3.webp";
import track4 from "../../../public/images/internproimg/training-hands-4.webp";
import track5 from "../../../public/images/internproimg/training-hands-5.webp";
import track6 from "../../../public/images/internproimg/training-hands-6.webp";
const DigitalTrainingFeatures = () => {
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
                  <Image src={track1} alt="Hands-On Learning Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Hands-On Learning</h4>
                  <p>
                    Practical assignments and real-time projects for every
                    module.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track2} alt="Expert Trainers Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Expert Trainers</h4>
                  <p>
                    Learn from industry veterans with years of digital marketing
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track3} alt="Customized Curriculum Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Customized Curriculum</h4>
                  <p>
                    Content designed to meet current industry demands and
                    trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track4} alt="Placement Assistance Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Placement Assistance</h4>
                  <p>
                    Dedicated support to help you land your first digital
                    marketing job.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track5} alt="Flexible Learning Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Flexible Learning Options</h4>
                  <p>Weekday and weekend batches for your convenience.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track6} alt="Certification Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Certification from WebGuruz</h4>
                  <p>
                    Boost your resume with a recognized certificate that
                    validates your expertise.
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

export default DigitalTrainingFeatures;
