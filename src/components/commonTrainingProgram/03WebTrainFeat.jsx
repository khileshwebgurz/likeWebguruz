import React from "react";
import Image from "next/image";
import track1 from "../../../public/images/internproimg/training-hands-1.webp";
import track2 from "../../../public/images/internproimg/training-hands-2.webp";
import track3 from "../../../public/images/internproimg/training-hands-3.webp";
import track4 from "../../../public/images/internproimg/training-hands-10.webp";
import track5 from "../../../public/images/internproimg/training-hands-11.webp";
import track6 from "../../../public/images/internproimg/training-hands-6.webp";
const WebTrainFeat = () => {
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
                  <Image src={track1} alt="Hands-On Learning Approach Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Hands-On Learning Approach</h4>
                  <p>
                    Work on real-time projects that simulate industry scenarios,
                    ensuring you gain practical experience that boosts your
                    confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track2} alt="Mentorship Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Expert Mentorship</h4>
                  <p>
                    Learn from experienced professionals who provide
                    personalized attention and share industry insights to
                    enhance your learning journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track3} alt="Comprehensive Curriculum Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Comprehensive Curriculum</h4>
                  <p>
                    Master core web development technologies, including HTML,
                    CSS, JavaScript, and more, to create fully functional
                    websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track4} alt="Post-Course Support Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Post-Course Support</h4>
                  <p>
                    Enjoy continued career support, including job placement
                    assistance, to help you start your career in web
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image src={track5} alt="Flexible Learning Hours Icon" />
                </div>
                <div className="training-feat-content">
                  <h4>Flexible Learning Hours</h4>
                  <p>
                    Our course is designed with your schedule in mind, offering
                    flexible timings to accommodate students and working
                    professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div className="tech-features">
                <div className="training-feat-icon">
                  <Image
                    src={track6}
                    alt="Industry-Recognized Certification Icon"
                  />
                </div>
                <div className="training-feat-content">
                  <h4>Industry-Recognized Certification</h4>
                  <p>
                    Earn a certificate from WebGuruz Technologies Pvt Ltd that
                    showcases your expertise and helps you stand out in the job
                    market.
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

export default WebTrainFeat;
