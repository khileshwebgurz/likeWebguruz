import React from "react";
import arrow1 from "../../../public/images/Hubspotappimages/one.webp";
import arrow3 from "../../../public/images/Hubspotappimages/two.webp";
import arrow4 from "../../../public/images/Hubspotappimages/three.webp";
import down from "../../../public/images/Hubspotappimages/down-arrow.webp";
import dev from "../../../public/images/Hubspotappimages/deve-supp-1.webp";
import plan from "../../../public/images/Hubspotappimages/deve-supp-2.webp";
import support from "../../../public/images/Hubspotappimages/deve-supp-3.webp";
import test from "../../../public/images/Hubspotappimages/deve-supp-4.webp";

import Image from "next/image";
const AppDevProcessFollow = () => {
  return (
    <div className="Hubprocessfollw-section pb-5 pt-3 pt-md-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-12 heading-main ">
            <h2>
              {" "}
              Our  Application <span>Development Process </span> 
            </h2>
          </div>
          <div className="col-md-7 col-12">
            <p>
              We follow a streamlined process to ensure success for every
              project:
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-3 d-none d-md-block col-12 heading-main ">
            <div className="follow-arrrow-img text-center">
              <Image src={arrow1} alt="arrow-img" />
            </div>
          </div>
          <div className="col-md-3 d-block d-md-none text-center col-12 heading-main ">
            <div className="follow-arrrow-img text-center mobile-image">
              <Image src={down} alt="down-arrow-img" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="fllow-step">
              <div className="fllow-img">
                <Image
                  src={plan}
                  className="small-icon-img"
                  alt="Consultation and Planning"
                />
              </div>
              <div className="follow-content">
                <h3>Consultation and Planning</h3>
                <p>
                  We understand your needs and create a roadmap for your
                  project. Our team works closely with you to define objectives
                  and align strategies for success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4 my-md-5 ">
          <div className="col-md-3 d-block d-md-none text-center col-12 heading-main ">
            <div className="follow-arrrow-img text-center mobile-image">
              <Image src={down} alt="down-arrow-img" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="fllow-step">
              <div className="fllow-img">
                <Image
                  src={dev}
                  className="small-icon-img"
                  alt="Design and Development Icon"
                />
              </div>
              <div className="follow-content">
                <h3>Design and Development</h3>
                <p>
                  Our developers craft user-friendly and scalable applications
                  tailored to your goals. We focus on building intuitive
                  interfaces and robust back-end systems to ensure a seamless
                  user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 d-none d-md-block col-12 heading-main ">
            <div className="follow-arrrow-img text-center">
              <Image
                src={arrow3}
                className="rotate-img-arrow"
                alt="arrow-img"
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-3 d-block d-md-none text-center col-12 heading-main ">
            <div className="follow-arrrow-img text-center mobile-image">
              <Image src={down} alt="down-arrow-img" />
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block col-12 heading-main ">
            <div className="follow-arrrow-img text-center">
              <Image src={arrow4} alt="arrow-img" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="fllow-step">
              <div className="Quality Assurance Icon">
                <Image
                  src={test}
                  className="small-icon-img"
                  alt="fllow-icon"
                />
              </div>
              <div className="follow-content">
                <h3>Testing and Quality Assurance</h3>
                <p>
                  We rigorously test each application to ensure seamless
                  performance and functionality. Our thorough process identifies
                  potential issues early, ensuring a high-quality final product.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4 my-md-5 align-items-center">
          <div className="col-md-3 d-block d-md-none text-center col-12 heading-main ">
            <div className="follow-arrrow-img text-center mobile-image">
              <Image src={down} alt="down-arrow-img" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="fllow-step">
              <div className="fllow-img">
                <Image
                  src={support}
                  className="small-icon-img"
                  alt="Deployment and Support Icon"
                />
              </div>
              <div className="follow-content">
                <h3>Deployment and Support</h3>
                <p>
                  After launching, we provide ongoing support to keep your
                  application running smoothly. Our team offers timely updates
                  and troubleshooting to address any issues that may arise
                  post-launch.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 d-none d-md-block col-12 heading-main ">
            <div className="follow-arrrow-img text-left visibility-hidden">
              <Image src={arrow3} alt="arrow-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevProcessFollow;
