import React from "react";
import Image from "next/image";
import agency1 from "../../../public/images/drupaldevimages/drupal-buss-1.webp";
import agency2 from "../../../public/images/drupaldevimages/drupal-buss-2.webp";
import agency3 from "../../../public/images/drupaldevimages/drupal-buss-3.webp";
import agency4 from "../../../public/images/drupaldevimages/drupal-buss-4.webp";
import agency5 from "../../../public/images/drupaldevimages/drupal-buss-5.webp";
import agency6 from "../../../public/images/drupaldevimages/drupal-buss-6.webp";
import Link from "next/link";
const DrupalAgency = () => {
  return (
    <div className="drupalagency-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5 ">
            <h2 className="mb-2">
              <span> Why Choose WebGuruz </span> for Drupal Development?
            </h2>
          </div>
        </div>
        <div className="row mt-5 agency ">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="agency-card">
              <div className="card-images">
                <Image src={agency1} alt="User Icon" />
              </div>
              <div className="card-description">
                <h4>Certified Drupal Developers</h4>
                <p>
                  Our team consists of certified Drupal developers with deep
                  expertise in the latest Drupal technologies, ensuring your
                  website is built using the most advanced tools and best
                  practices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="agency-card">
              <div className="card-images">
                <Image src={agency2} alt="Computer Icon" />
              </div>
              <div className="card-description">
                <h4>Transparent Pricing</h4>
                <p>
                  Get clear, upfront pricing with no hidden fees. We provide
                  detailed estimates and flexible pricing models to accommodate
                  different budgets while maintaining the highest quality
                  standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="agency-card">
              <div className="card-images">
                <Image src={agency3} alt="Coding Icon" />
              </div>
              <div className="card-description">
                <h4>End-to-End Development</h4>
                <p>
                  Our structured approach ensures a seamless transition from
                  concept to execution, delivering a website that is both
                  functional and future-ready.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="agency-card">
              <div className="card-images">
                <Image src={agency4} alt="Tablet Icon" />
              </div>
              <div className="card-description">
                <h4>Custom & Scalable Solutions</h4>
                <p>
                  Our solutions are designed to scale effortlessly, ensuring
                  your website can grow with your business without compromising
                  on speed, security, or functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="agency-card">
              <div className="card-images">
                <Image src={agency5} alt="SEO Icon" />
              </div>
              <div className="card-description">
                <h4>SEO & Performance Optimization</h4>
                <p>
                  From clean coding practices and mobile responsiveness to fast
                  load times and on-page SEO, we help drive more organic traffic
                  and improve visibility.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="agency-card">
              <div className="card-images">
                <Image src={agency6} alt="Customer Service Icon" />
              </div>
              <div className="card-description">
                <h4>Ongoing Support & Maintenance</h4>
                <p>
                  From bug fixes and performance optimization to security
                  patches and feature enhancements, we ensure your Drupal site
                  remains fast, secure, and up to date.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row our-btn-group">
          <div className=" benifit-cta ">
            <Link href="/contact-us" className="explore-btn partner-btn">
              Partner With Us
            </Link>
            <Link
              href="/services/drupal-development/drupal-maintenance-package"
              className="explore-btn"
            >
              Maintenance Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrupalAgency;
