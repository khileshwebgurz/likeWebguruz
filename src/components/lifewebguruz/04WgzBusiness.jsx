import React from "react";
import ourimg1 from "../../../public/images/lifewebguruzimages/life-solution-1.webp";
import ourimg2 from "../../../public/images/lifewebguruzimages/life-solution-2.webp";
import ourimg3 from "../../../public/images/lifewebguruzimages/life-solution-3.webp";
import Image from "next/image";
const WgzBusiness = () => {
  return (
    <div className="Life-our-bussines py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center heading-main pb-4">
            <h2>
              Our <span>Business</span>
            </h2>
            <p>
              WebGuruz partners with a wide variety of companies across
              industries such as technology, finance, healthcare, and more. Our
              expertise spans many domains, and we offer tailored solutions to
              meet the specific needs of each industry.
            </p>
          </div>
        </div>
        <div className="row bussines">
          <div className="col-md-4 col-sm-6 col-12 mb-4 mb-md-0">
            <div className="our-bussines-card">
              <div className="our-bussines-img">
                <Image src={ourimg1} alt="Strategy & Consulting" />
                <div className="our-bussines-text">
                  <h3>
                    Strategy & <br />
                    Consulting
                  </h3>
                  <p>
                    We help businesses develop strategies to optimize
                    operations, drive growth, and stay competitive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-4 mb-md-0">
            <div className="our-bussines-card">
              <div className="our-bussines-img">
                <Image src={ourimg2} alt="Technology & Solutions" />
                <div className="our-bussines-text">
                  <h3>
                    Technology & <br />
                    Solutions
                  </h3>
                  <p>
                    From custom development to AI-driven systems, we provide
                    innovative tech solutions to solve complex challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 ">
            <div className="our-bussines-card">
              <div className="our-bussines-img">
                <Image src={ourimg3} alt="Digital Marketing Expertise" />
                <div className="our-bussines-text">
                  <h3>
                    Digital
                    <br />
                    Marketing
                  </h3>
                  <p>
                    Our digital marketing expertise helps businesses reach their
                    target audience and grow their brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WgzBusiness;
