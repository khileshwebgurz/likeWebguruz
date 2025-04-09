import React from "react";
import Image from "next/image";
import app1 from "../../../public/images/keapimages/keap-project-1.webp";
import app2 from "../../../public/images/keapimages/keap-project-2.webp";
import app3 from "../../../public/images/keapimages/keap-project-3.webp";
import app4 from "../../../public/images/keapimages/keap-project-4.webp";
const KeapPlatform = () => {
  return (
    <div className="keapapp-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-2">
              The <span>WebGuruz Advantage</span>
            </h2>
            <p>
              At WebGuruz Technologies, we deliver more than just technical
              solutions. We provide real business value through our expert Keap
              development services.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="app-card">
              <div className="app-image">
                <Image src={app1} alt="security" />
              </div>
              <div className="app-content">
                <h5>200+ Satisfied Clients Worldwide</h5>
                <p>
                  Each client receives customized Keap solutions tailored to
                  their unique business needs, resulting in our exceptional 98%
                  satisfaction rate and strong testimonial portfolio that
                  demonstrates our consistent ability to deliver results.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="app-card">
              <div className="app-image">
                <Image src={app2} alt="security" />
              </div>
              <div className="app-content">
                <h5>10+ Years of Specialized Experience</h5>
                <p>
                  WebGuruz has refined methodologies and expanded capabilities
                  since these technologies first emerged. This extensive
                  experience enables us to anticipate challenges, recommend
                  optimal solutions, and implement strategies that drive
                  measurable business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="app-card">
              <div className="app-image">
                <Image src={app3} alt="security" />
              </div>
              <div className="app-content">
                <h5>25+ Certified Keap Development Experts</h5>
                <p>
                  Each expert undergoes continuous education to stay current
                  with the latest updates while bringing specialized skills in
                  automation, integration, and customization to ensure your
                  implementation leverages Keap&apos;s full potential.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="app-card">
              <div className="app-image">
                <Image src={app4} alt="security" />
              </div>
              <div className="app-content">
                <h5>500+ Successful Projects Delivered</h5>
                <p>
                  Our proven project management methodology ensures efficient
                  execution with a 96% project success rate, making us a trusted
                  partner for businesses seeking reliable Keap development
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeapPlatform;
