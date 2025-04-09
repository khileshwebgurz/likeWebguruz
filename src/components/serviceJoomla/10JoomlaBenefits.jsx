import React from "react";
import Image from "next/image";
import benifit1 from "../../../public/images/joomlaimages/joom-benefit-1.webp";
import benifit2 from "../../../public/images/joomlaimages/joom-benefit-2.webp";
import benifit3 from "../../../public/images/joomlaimages/joom-benefit-3.webp";
import benifit4 from "../../../public/images/joomlaimages/joom-benefit-4.webp";
import benifit5 from "../../../public/images/joomlaimages/joom-benefit-5.webp";
import benifit6 from "../../../public/images/joomlaimages/joom-benefit-6.webp";
import benifit7 from "../../../public/images/joomlaimages/joom-benefit-7.webp";
import benifit8 from "../../../public/images/joomlaimages/joom-benefit-8.webp";
import circle from "../../../public/images/joomlaimages/benifts-circle.svg";
const JoomlaBenefits = () => {
  return (
    <div className="joomlabenifit-section py-5">
      <div className="container">
        <div className="row mb-4 mb-md-5">
          <div className="col-12 col-md-5  heading-main ">
            <h2 className="mb-3">
              Benefits of <br />
              <span>Joomla Development </span>{" "}
            </h2>
          </div>
          <div className="col-md-7 col-12">
            <p>
              Joomla as a web development platform comes with built-in features
              to make your websites function seamlessly. Here are some key
              features that solidify its character:
            </p>
          </div>
        </div>
        <div className="row joomla-benifit">
          <div className="col-md-4 col-12">
            <ul>
              <li className="blue-shap blue-shap-one d-flex align-items-center">
                <h3>
                  Highly Flexible <br />& Scalable
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit1} alt="Benefits Icon" />
                </div>
              </li>
              <li className="blue-shap green-shap d-flex align-items-center">
                <h3>
                  Extensive <br />
                  Community Support
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit2} alt="Unity Icon" />
                </div>
              </li>
              <li className="blue-shap parpul-shap d-flex align-items-center">
                <h3>
                  Cost-Effective <br />& Open Source
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit3} alt="Unity Icon" />
                </div>
              </li>
              <li className="blue-shap blue-shap-one orange-shap d-flex align-items-center">
                <h3>
                  Multi-Language <br />
                  Support
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit4} alt="Security Icon" />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12 benifit-img  d-none d-sm-flex">
            <div className="benifit-circle-img">
              <Image src={circle} alt="Globe Icon" />
            </div>
          </div>
          <div className="col-md-4 col-12 right-benifit">
            <ul>
              <li className="blue-shap  blue-shap-two  pink-shape blue-right d-flex align-items-center">
                <h3>
                  Robust <br />
                  Security Features
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit5} alt="Security Icon" />
                </div>
              </li>
              <li className="blue-shap yelow-shape blue-right d-flex align-items-center">
                <h3>
                  Wide Range of <br />
                  Extensions & Plugins
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit6} alt="Coding Icon" />
                </div>
              </li>
              <li className="blue-shap blued-shape blue-right d-flex align-items-center">
                <h3>
                  SEO & <br />
                  Mobile-Friendly
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit7} alt="Book Icon" />
                </div>
              </li>
              <li className="blue-shap blue-shap-two   red-shape blue-right d-flex align-items-center">
                <h3>
                  Easy-to-Use <br />
                  Content Management
                </h3>
                <div className="new-benefit-img">
                  <Image src={benifit8} alt="Setting Icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoomlaBenefits;
