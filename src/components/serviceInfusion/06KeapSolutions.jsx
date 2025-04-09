import React from "react";
import Image from "next/image";
import hand1 from "../../../public/images/keapimages/keap-app-1.webp";
import hand2 from "../../../public/images/keapimages/keap-app-2.webp";
import hand3 from "../../../public/images/keapimages/keap-app-3.webp";
import hand4 from "../../../public/images/keapimages/keap-app-4.webp";
import hand5 from "../../../public/images/keapimages/keap-app-5.webp";
import hand6 from "../../../public/images/keapimages/keap-app-6.webp";
import hand7 from "../../../public/images/keapimages/keap-app-7.webp";
import hand8 from "../../../public/images/keapimages/keap-app-8.webp";
const KeapSolutions = () => {
  return (
    <div className="keapsolutions-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5  col-12 heading-main text-left">
            <h2 className="mb-2">
              Our <span>Keap Development Services </span>
            </h2>
            <p>
              At WebGuruz Technologies, we offer comprehensive Keap development
              services designed to maximize the potential of your marketing and
              sales automation. Our team of experienced developers works closely
              with you to understand your unique business requirements and
              create solutions that drive real results.
            </p>
            <p>
              We combine technical expertise with strategic insight to deliver
              Keap implementations that not only work flawlessly but also align
              perfectly with your business objectives. From initial consultation
              to ongoing support, we&apos;re committed to your success every step of
              the way.
            </p>
          </div>
          <div className="col-lg-7  col-12">
            <div className="row solutions-icons">
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand1} alt="mangement" />
                  <h6>Custom Keap App Development</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand2} alt="mangement" />
                  <h6>Keap Integration Services</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand3} alt="mangement" />
                  <h6>Automation Sequence Design</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand4} alt="mangement" />
                  <h6>Landing Page Development</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand5} alt="mangement" />
                  <h6>Email Marketing Templates</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand6} alt="mangement" />
                  <h6>Sales Pipeline Customization</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand7} alt="mangement" />
                  <h6>Data Migration Services</h6>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="solution-icons-box">
                  <Image src={hand8} alt="mangement" />
                  <h6>Training & Implementation Support</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapSolutions;
