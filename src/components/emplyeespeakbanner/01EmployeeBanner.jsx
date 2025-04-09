import React from "react";
import image from "../../../public/images/careerimages/carrerimg6.webp";
import Top from "../../../public/images/empolyeimages/top.webp";
import bottom from "../../../public/images/empolyeimages/bottom.webp";
import jassteam from "../../../public/images/leadershipImages/jass-team.webp";
import Image from "next/image";
import Link from "next/link";
const EmployeeBanner = () => {
  return (
    <div className="Empolyeabout-section ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-md-6  col-12 mb-5 mb-md-0">
            <div className="empolye content">
              <div className="col-12 heading-main text-center">
                <h1>
                  Employee
                  <br />
                  <span>Testimonials</span>
                </h1>
                <p>
                  Discover How Working at WebGuruz Fosters Growth, Innovation,
                  and a Positive Work Environment
                </p>
              </div>

              <div className="Empolyeaboutquote">
                <Image src={Top} className="top-img top-quote"   alt="Top Quote" />
                <div className="Empolyeabout-quote-content d-flex">
                  <Image src={jassteam} alt="Jaswinder Singh" />
                  <div>
                    <p className="mb-2">
                      We pride ourselves on fostering an environment where
                      creativity, innovation, and collaboration thrive.
                    </p>
                    <span className="cta-btn">
                      <Link href="/careers" className="explore-btn">
                        Apply for a Position
                      </Link>
                    </span>
                  </div>
                </div>
                <Image src={bottom}  className="top-img bottom-quote" alt="Bottom Quote" />
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-md-6 col-12">
            <div className="empolye-img">
              <Image src={image} alt="Employee Testimonials" height={1200} width={1200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBanner;
