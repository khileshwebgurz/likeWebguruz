import React from "react";
import Image from "next/image";
import board1 from "../../../public/images/hubonboardingimg/hub-onboard-1.svg";
import board2 from "../../../public/images/hubonboardingimg/board2.webp";
import board3 from "../../../public/images/hubonboardingimg/board3.jpg";
import board4 from "../../../public/images/hubonboardingimg/board4.webp";

import Link from "next/link";
const AppDevPoints = () => {
  return (
    <div className="onboarding-section hubapp-onboarding-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Hire <span> HubSpot Developers  </span><br></br> for Your Application Development Needs?
            </h2>
          </div>
        </div>
        <div className="row  align-items-center onboard">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h3>Expertise in HubSpot</h3>
           
            <ul>
              <li>Deep understanding of HubSpot tools and features.</li>
              <li>Proven ability to maximize CRM capabilities.</li>
              <li>Experience in building scalable solutions</li>
              <li>High proficiency in integrating third-party applications.</li>
            </ul>
            <div className="get-btn">
              <Link href="#" className="explore-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="onboard-img">
              <Image src={board1} alt="HubSpot Application Development" />
            </div>
          </div>
        </div>
        <div className="row  align-items-center onboard board-two">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="onboard-img">
              <Image src={board4} alt="Custom Solutions" />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h3>Custom Solutions Tailored for You</h3>
            
            <ul>
              <li>Fully personalized applications to meet your needs.</li>
              <li>Focus on improving business efficiency.</li>
              <li>Seamless integration with your current systems</li>
              <li>Enhanced user experience for your team and customers.</li>
            </ul>
            <div className="get-btn">
              <Link href="#" className="explore-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="row  align-items-center onboard">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h3>Comprehensive Development Process</h3>
            
            <ul>
              <li>Clear communication at every stage.</li>
              <li>Strict adherence to timelines and budgets.</li>
              <li>Rigorous testing to ensure quality</li>
              <li>Continuous improvement based on your feedback.</li>
            </ul>
            <div className="get-btn">
              <Link href="#" className="explore-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="onboard-img">
              <Image src={board3} alt="Comprehensive Development Process" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevPoints;
