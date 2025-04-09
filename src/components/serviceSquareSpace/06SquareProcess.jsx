import React from "react";
import Image from "next/image";
import squaresearch1 from "../../../public/images/squarespaceimg/square-process-1.webp";
import squaresearch2 from "../../../public/images/squarespaceimg/square-process-2.webp";
import squaresearch3 from "../../../public/images/squarespaceimg/square-process-3.webp";
import squaresearch4 from "../../../public/images/squarespaceimg/square-process-4.webp";
import squaresearch5 from "../../../public/images/squarespaceimg/square-process-5.webp";
const SquareProcess = () => {
  return (
    <div className="squareprocess-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-12  text-center mb-4 mb-md-5">
            <h2 className="mb-2">
            <strong> Our Squarespace </strong> Web Development Process
            </h2>
            <p>
              We follow a step-by-step approach to creating a high-performance
              Squarespace website.
            </p>
          </div>
        </div>
        <div className="row sqaure-process-row">
          <div className="col-lg-6 col-12">
            <div className="process-card-box">
              <div className="process-icon">
                <Image src={squaresearch1} alt="Squarespace Web Developer" />
              </div>
              <div className="process-content">
                <h5>Understanding Your Business Needs</h5>
                <p>
                  We start by analyzing your business goals, target audience,
                  and website requirements. Our team conducts in-depth research
                  to craft a strategy that aligns with your objectives.
                </p>
              </div>
            </div>
            <div className="process-card-box">
              <div className="process-icon">
                <Image src={squaresearch2} alt="Squarespace Web Developers" />
              </div>
              <div className="process-content">
                <h5>Development & Customization</h5>
                <p>
                  Our developers bring the design to life using custom
                  Squarespace coding and integrations. We implement responsive
                  elements, interactive features, and third-party integrations.
                </p>
              </div>
            </div>
            <div className="process-card-box">
              <div className="process-icon">
                <Image src={squaresearch3} alt="Manage Icon" />
              </div>
              <div className="process-content">
                <h5>Deployment & Ongoing Support</h5>
                <p>
                  Once launched, we provide maintenance, updates, and
                  performance enhancements. We offer continuous support to keep
                  your website running smoothly and securely.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 right-process-box">
            <div className="process-card-box">
              <div className="process-icon">
                <Image src={squaresearch4} alt="UI/UX Icon" />
              </div>
              <div className="process-content">
                <h5>Wireframing & UI/UX Design</h5>
                <p>
                  Our designers create a blueprint of your site with a focus on
                  usability and engagement. We ensure seamless navigation,
                  intuitive layouts, and an aesthetically pleasing interface.
                </p>
              </div>
            </div>
            <div className="process-card-box">
              <div className="process-icon">
                <Image src={squaresearch5} alt="Backup Icon" />
              </div>
              <div className="process-content">
                <h5>Testing & Optimization</h5>
                <p>
                  We perform thorough speed, security, and functionality tests
                  to ensure a flawless experience. Our rigorous testing process
                  helps eliminate bugs and enhance site performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareProcess;
