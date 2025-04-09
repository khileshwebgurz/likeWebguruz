import React from "react";
import Image from "next/image";
import board1 from "../../../public/images/hubonboardingimg/hub-onboard-1.svg";
import board2 from "../../../public/images/hubonboardingimg/hub-onboard-2.svg";
import Link from "next/link";
const OnboardingTypes = () => {
  return (
    <div className="onboarding-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              <span>HubSpot Onboarding: </span> Tailored Solutions for Your
              Business
            </h2>
          </div>
        </div>
        <div className="row  align-items-center onboard">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h3>Guided HubSpot Onboarding</h3>
            <p>
              Ideal for businesses that prefer a collaborative approach. We
              guide you through the setup process, providing support at every
              stage.
            </p>
            <ul>
              <li>Hands-on guidance from certified experts</li>
              <li>Personalized strategy and setup recommendations</li>
              <li>Step-by-step training sessions</li>
              <li>Support in navigating HubSpot’s features</li>
            </ul>
            <div className="get-btn">
              <Link href="#" className="explore-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="onboard-img">
              <Image src={board1} alt="HubSpot Onboarding Solutions" />
            </div>
          </div>
        </div>
        <div className="row  align-items-center onboard board-two">
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <div className="onboard-img">
              <Image src={board2} alt="HubSpot Onboarding" />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h3>Managed HubSpot Onboarding</h3>
            <p>
              Perfect for businesses looking for a fully managed, hassle-free
              onboarding experience. We handle everything from setup to
              customization.
            </p>
            <ul>
              <li>Comprehensive HubSpot account setup</li>
              <li>Workflow and automation implementation</li>
              <li>CRM data migration and integration</li>
              <li>Custom dashboard creation for analytics</li>
            </ul>
            <div className="get-btn">
              <Link href="#" className="explore-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTypes;
