import Image from "next/image";
import React from "react";
import wix1 from "../../../public/images/wiximages/wix-web-1.webp";
import wix2 from "../../../public/images/wiximages/wix-web-2.webp";
import wix3 from "../../../public/images/wiximages/wix-web-3.webp";
import wix4 from "../../../public/images/wiximages/wix-web-4.webp";
import wix5 from "../../../public/images/wiximages/wix-web-5.webp";
import wix6 from "../../../public/images/wiximages/wix-web-6.webp";
import Link from "next/link";

const WixServices = () => {
  return (
    <>
      <section className="wix-development-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main text-center mb-4 mb-md-5">
              <h2 className="mb-2">
                <span> Our Wix Development</span> Services
              </h2>
              <p>
                We offer a wide range of Wix development services to meet your
                business needs:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="wix-services-points">
                <div
                  className="wix-service-img"
                  style={{ backgroundColor: "#dbffff" }}
                >
                  <Image src={wix1} alt="Wix Development" />
                </div>
                <h3>Custom Wix Website Design</h3>
                <p>
                  We create unique and visually appealing Wix websites tailored
                  to your brand identity. Our designs ensure a seamless user
                  experience, mobile responsiveness, and an intuitive navigation
                  structure, enhancing engagement and conversions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="wix-services-points">
                <div
                  className="wix-service-img"
                  style={{ backgroundColor: "#d6e0ff" }}
                >
                  <Image src={wix2} alt="Wix Developer" />
                </div>
                <h3>Wix eCommerce Development</h3>
                <p>
                  Looking to start or expand your online store? Our Wix
                  eCommerce development services include custom product pages,
                  seamless checkout processes, secure payment gateways, and
                  inventory management for a hassle-free shopping experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="wix-services-points">
                <div
                  className="wix-service-img"
                  style={{ backgroundColor: "#fff1e7" }}
                >
                  <Image src={wix3} alt="Wix SEO" />
                </div>
                <h3>Wix SEO Optimization</h3>
                <p>
                  A great website isn’t enough- it needs to be found! We offer
                  Wix SEO services to improve your site’s visibility, rankings,
                  and organic traffic. Our experts handle on-page SEO, keyword
                  research, and performance optimization to help you stand out.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="wix-services-points">
                <div
                  className="wix-service-img"
                  style={{ backgroundColor: "#fffbd4" }}
                >
                  <Image src={wix4} alt="Support Icon" />
                </div>
                <h3>Wix Maintenance & Support</h3>
                <p>
                  We offer ongoing maintenance and support services to keep your
                  Wix website updated, secure, and running smoothly. From bug
                  fixes to content updates, we ensure optimal performance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="wix-services-points">
                <div
                  className="wix-service-img"
                  style={{ backgroundColor: "#f4dccc" }}
                >
                  <Image src={wix5} alt="Cloud Icon" />
                </div>
                <h3>Wix Website Migration</h3>
                <p>
                  Need to move from another platform to Wix? Our team ensures a
                  smooth, hassle-free migration, preserving your website’s SEO,
                  content, and functionality while enhancing its performance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="wix-services-points">
                <div
                  className="wix-service-img"
                  style={{ backgroundColor: "#c4e4ee" }}
                >
                  <Image src={wix6} alt="Cloud Icon" />
                </div>
                <h3>Wix Custom Integrations</h3>
                <p>
                  Enhance your website’s capabilities with custom integrations.
                  We connect third-party CRM, payment gateways, marketing tools,
                  and automation solutions to optimize your website’s
                  performance.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12 text-center wix-btn-group">
              <Link href="/contact-us" className="explore-btn">
                Get Wix Solution Now
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default WixServices;
