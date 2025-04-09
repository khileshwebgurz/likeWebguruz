import React from "react";
import Image from "next/image";
import idea1 from "../../../public/images/wordpressdevimages/word-lauch-1.webp";
import idea2 from "../../../public/images/wordpressdevimages/word-lauch-2.webp";
import idea3 from "../../../public/images/wordpressdevimages/word-lauch-3.webp";
import idea4 from "../../../public/images/wordpressdevimages/word-lauch-4.webp";
import idea5 from "../../../public/images/wordpressdevimages/word-lauch-5.webp";
const WordpressProcess = () => {
  return (
    <div className="ourapporach-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
            <span>Our Development </span> Process
            </h2>
            <p>How We Build Your Perfect WordPress Website</p>
          </div>
        </div>
        <div className="row our-apporach mt-4 mt-md-5">
          <div className="col-xl col-md-4  col-12">
            <div className="apporach-card">
              <div className="approach icon mb-3">
                <Image src={idea1} alt="Checklist Icon" />
              </div>
              <div className="card-decription">
                <h5>Consultation & Requirement Analysis</h5>
                <p>
                  We discuss your project goals and requirements to craft a
                  tailored WordPress solution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl col-md-4 mt-4 mt-md-0 col-12">
            <div className="apporach-card">
              <div className="approach icon mb-3">
                <Image src={idea2} alt="UI/UX Icon" />
              </div>
              <div className="card-decription">
                <h5>UI/UX Design & Prototyping</h5>
                <p>
                  Our design team creates visually stunning and user-friendly
                  website mockups for your approval.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl col-md-4  mt-4 mt-md-0 col-12">
            <div className="apporach-card">
              <div className="approach icon mb-3">
                <Image src={idea3} alt="Web Icon" />
              </div>
              <div className="card-decription">
                <h5>Custom WordPress Development</h5>
                <p>
                  We develop your website with clean code, integrating the
                  required features and functionalities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl col-md-4  mt-4 mt-xl-0 col-12">
            <div className="apporach-card">
              <div className="approach icon mb-3">
                <Image src={idea4} alt="Service Icon" />
              </div>
              <div className="card-decription">
                <h5>Testing & Quality Assurance</h5>
                <p>
                  Our QA team rigorously tests the website to ensure smooth
                  performance across all devices and browsers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl col-md-4 mt-4 mt-xl-0 col-12">
            <div className="apporach-card">
              <div className="approach icon mb-3">
                <Image src={idea5} alt="Rocket Icon" />
              </div>
              <div className="card-decription">
                <h5>Launch & Post-Launch Support</h5>
                <p>
                  Once approved, we deploy your website and provide ongoing
                  support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordpressProcess;
