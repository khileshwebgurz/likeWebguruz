import React from "react";
import Image from "next/image";
import discovery1 from "../../../public/images/drupaldevimages/drupal-mobile-1.webp";
import discovery2 from "../../../public/images/drupaldevimages/drupal-mobile-2.webp";
import discovery3 from "../../../public/images/drupaldevimages/drupal-mobile-3.webp";
import discovery4 from "../../../public/images/drupaldevimages/drupal-mobile-4.webp";
import discovery5 from "../../../public/images/drupaldevimages/drupal-mobile-5.webp";

const DrupalStratergy = () => {
  return (
    <div className="Drupalwedo-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4">
            <h2>
              Why <strong> Choose Drupal? </strong>
            </h2>
            <span className="dot color-wt">
              A Flexible & Future-Proof CMS for Modern Businesses
            </span>
            <p>
              Drupal is a powerful, open-source content management system (CMS)
              trusted by global enterprises, governments, and startups. Here’s
              why businesses choose Drupal over other CMS platforms:
            </p>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 mb-4 mb-xxl-0">
            <div className="dicovery-card">
              <div className="dicovery-icon-count">
                <div className="count">
                  <h3>01</h3>{" "}
                </div>
                <div className="icon">
                  <Image src={discovery1} alt="Dot Icon" />
                </div>
              </div>
              <div className="discovery-title">
                <h4>Open-Source & Cost-Effective</h4>
                <p>
                  No licensing fees, with a strong community, ensures continuous
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 mb-4 mb-xxl-0">
            <div className="dicovery-card">
              <div className="dicovery-icon-count">
                <div className="count">
                  <h3>02</h3>{" "}
                </div>
                <div className="icon">
                  <Image src={discovery2} alt="Dot Icon" />
                </div>
              </div>
              <div className="discovery-title">
                <h4>SEO-Friendly</h4>
                <p>
                  Drupal’s architecture ensures better rankings on search
                  engines.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 mb-4 mb-xxl-0">
            <div className="dicovery-card">
              <div className="dicovery-icon-count">
                <div className="count">
                  <h3>03</h3>{" "}
                </div>
                <div className="icon">
                  <Image src={discovery3} alt="Dot Icon" />
                </div>
              </div>
              <div className="discovery-title">
                <h4>Highly Secure & Reliable</h4>
                <p>
                  Our experts assess project requirements, objectives, and
                  expectations to establish a roadmap for WordPress web
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 mb-4 mb-xxl-0">
            <div className="dicovery-card">
              <div className="dicovery-icon-count">
                <div className="count">
                  <h3>04</h3>{" "}
                </div>
                <div className="icon">
                  <Image src={discovery4} alt="Dot Icon" />
                </div>
              </div>
              <div className="discovery-title">
                <h4>Scalable & Performance-Oriented</h4>
                <p>Suitable for both small businesses and large enterprises.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl col-lg-4 col-md-6 mb-4 mb-xxl-0">
            <div className="dicovery-card">
              <div className="dicovery-icon-count">
                <div className="count">
                  <h3>05</h3>{" "}
                </div>
                <div className="icon">
                  <Image src={discovery5} alt="Dot Icon" />
                </div>
              </div>
              <div className="discovery-title">
                <h4>Mobile & Performance Optimized</h4>
                <p>
                  Drupal websites load fast and deliver a seamless mobile
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrupalStratergy;
