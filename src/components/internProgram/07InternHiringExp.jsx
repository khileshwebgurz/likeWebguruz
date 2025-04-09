import React from "react";
import Image from "next/image";
import suddit from "../../../public/images/careerimages/web-main-su.webp";
import sukhpal from "../../../public/images/careerimages/web-main-2.webp";
import parul from "../../../public/images/careerimages/web-main-4.webp";
const InternHiringExp = () => {
  return (
    <div className="Experienced-section" id="adivsor-connect">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <h2>
              Connect with <span>Our Qualified Mentors</span>
            </h2>
          </div>
        </div>
        <div className="row experience pt-4">
          <div className="col-md-4 col-12 text-center">
            <div className="experince-card ">
              <div className="experince-img">
                <Image src={suddit} alt="cicle" />
              </div>
              <p>For queries, feedback & assistance </p>
              <h3>
                Digital Marketing <br />
              </h3>
              <p>For Admissions & Career Counselling </p>
              <h3>
                <a href="tel:+917087233363">+91 708 7233 363</a>
              </h3>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <div className="experince-card ">
              <div className="experince-img">
                <Image src={sukhpal} alt="cicle" />
              </div>
              <p>For queries, feedback & assistance </p>
              <h3>
                Web Development <br />
              </h3>
              <p>For Admissions & Career Counselling </p>
              <h3>
                <a href="tel:+917087233363">+91 708 7233 363</a>
              </h3>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <div className="experince-card ">
              <div className="experince-img">
                <Image src={parul} alt="cicle" />
              </div>
              <p>For queries, feedback & assistance </p>
              <h3>
                HubSpot Development <br />
              </h3>
              <p>For Admissions & Career Counselling </p>
              <h3>
                <a href="tel:+917087233363">+91 708 7233 363</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternHiringExp;
