import React from "react";
import Image from "next/image";
import soft from "../../../public/images/softwereimages/software-qa.webp";
import list1 from "../../../public/images/softwereimages/software-high-1.webp";
import list2 from "../../../public/images/softwereimages/software-high-2.webp";
import list3 from "../../../public/images/softwereimages/software-high-3.webp";
import list4 from "../../../public/images/softwereimages/software-high-4.webp";
const SoftTestEffeciency = () => {
  return (
    <div className="softwere-services-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-7 col-12 heading-main mb-4 mb-md-0">
            <h2 className="mb-2">
              Our <span> Software QA Services</span>
            </h2>
            <p>
              At WebGuruz Technologies, we offer comprehensive quality assurance
              services designed to help you deliver flawless software products.
              Our expert testers use industry-leading tools and methodologies to
              identify issues early in the development process, saving you time
              and resources.
            </p>
          </div>
          <div className="col-md-5 col-12 mb-4 mb-md-0">
            <div className="services-img">
              <Image src={soft} alt="QA" />
            </div>
          </div>
        </div>
        <div className="row softwere-row">
          <div className="col-md-6 col-12 mb-4">
            <div className="softwere-list">
              <div className="softwere-img-text">
                <div className="list-img">
                  <Image src={list1} alt="API" />
                </div>
                <div className="list-text">
                  <h4>Manual Testing</h4>
                </div>
              </div>
              <p>
                Our skilled manual testers meticulously examine your software
                from a user&apos;s perspective, identifying usability issues and bugs
                that automated tests might miss.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="softwere-list">
              <div className="softwere-img-text">
                <div className="list-img">
                  <Image src={list2} alt="API" />
                </div>
                <div className="list-text">
                  <h4>Mobile App Testing</h4>
                </div>
              </div>
              <p>
                Our specialized mobile testing team ensures your apps work
                flawlessly across different devices, operating systems, and
                network conditions.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="softwere-list">
              <div className="softwere-img-text">
                <div className="list-img">
                  <Image src={list3} alt="API" />
                </div>
                <div className="list-text">
                  <h4>Automated Testing</h4>
                </div>
              </div>
              <p>
                We develop and implement efficient automated testing strategies
                that speed up your testing process while maintaining thorough
                coverage of your application.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="softwere-list">
              <div className="softwere-img-text">
                <div className="list-img">
                  <Image src={list4} alt="API" />
                </div>
                <div className="list-text">
                  <h4>Performance Testing</h4>
                </div>
              </div>
              <p>
                We rigorously test your software&apos;s speed, responsiveness, and
                stability under various conditions to ensure it meets
                performance expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftTestEffeciency;
