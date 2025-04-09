import React from "react";
import cup from "../../../public/images/googleadsimg/goole-ad.webp";
import Image from "next/image";
const GoogleAdsCup = () => {
  return (
    <div className="Ourgooglewho py-5">
      <div className="container">
        <div className="row google-row">
          <div className="col-md-4 col-12">
            <div className="goole-img">
              <Image src={cup} alt="Google Ads Icon" />
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="google-text">
              <h2>Our Google Ads Specialists are Experts at:</h2>
              <p>
                Our expertise spans across different industries, allowing us to
                deliver targeted Google Ads strategies that align with your
                business needs.
              </p>
              <ul>
                <li>E-Commerce</li>
                <li>Real Estate</li>
                <li>Healthcare</li>
                <li>Education</li>
                <li>Travel & Tourism</li>
                <li>Retail</li>
                <li>Automotive</li>
                <li>Legal Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsCup;
