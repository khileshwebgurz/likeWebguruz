import React from "react";
import Image from "next/image";
import jicon from "../../../public/images/joomlaimages/j-icon.png";
import Link from "next/link";
const JoomlaApplication = () => {
  return (
    <div className="joomlachooseing-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto heading-main text-center mb-4 mb-md-5">
            <h2>
              Our <span>Development Process </span>
            </h2>
            <p>
              We follow a structured and result-driven 8-step Joomla development
              process to ensure that every project is completed with precision,
              efficiency, and excellence.
            </p>
          </div>
        </div>
        <div className="row joomla-choosing my-5">
          <div className="col-md-6 left-col first-main">
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Understanding your business needs and goals.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Creating a roadmap for a seamless Joomla development process.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Crafting an intuitive and engaging user interface.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Implementing custom features and integrations.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6 right-col first-main">
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Ensuring bug-free and high-performance functionality.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Launching the website with minimal downtime.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="choosing-div text-center">
              <h4 className="ttl">Enhancing visibility and search rankings.</h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
            <div className="choosing-div text-center">
              <h4 className="ttl">
                Providing continuous updates and security patches.
              </h4>
              <div className="icon">
                <Image src={jicon} alt="Arrow Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row our-btn-group">
          <div className=" benifit-cta ">
            <Link href="/contact-us" className="explore-btn partner-btn">
              Partner With Us
            </Link>
            <Link
              href="/services/joomla-development/joomla-maintenance-package"
              className="explore-btn"
            >
              Maintenance Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoomlaApplication;
