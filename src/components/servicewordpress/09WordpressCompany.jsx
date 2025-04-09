import React from "react";
import Image from "next/image";
import why from "../../../public/images/wordpressdevimages/word-company.webp";
import user1 from "../../../public/images/wordpressdevimages/word-custom-1.webp";
import user2 from "../../../public/images/wordpressdevimages/word-custom-2.webp";
import user3 from "../../../public/images/wordpressdevimages/word-custom-3.webp";
import user4 from "../../../public/images/wordpressdevimages/word-custom-4.webp";
const WordpressCompany = () => {
  return (
    <div className="wordpress-company-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
          <h2 className="mb-2">
              <span>Trusted WordPress Development </span> Company in India
            </h2>
            <p>
              Our commitment to innovation, user experience, and business growth
              has helped us earn a reputation for delivering top-tier WordPress
              solutions to businesses of all sizes, from startups to
              enterprises.
            </p>
          </div>
          <div className="col-md-12 col-lg-8 col-12 mb-4 col-mb-0">
            <div className="row">
              <div className="col-sm-6  col-12 mb-4">
                <div className="benifit-card">
                  <div className="benifit-img">
                    <Image src={user1} alt="Customer Icon" />
                  </div>
                  <div className="benifit-description">
                    <h4>Client-Centric Approach</h4>
                    <p>
                      We believe that every business is unique, and so should
                      its website. Our client-first approach ensures that every
                      WordPress project we undertake is designed to align
                      perfectly with your business goals, brand identity, and
                      target audience expectations
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6  col-12 mb-4">
                <div className="benifit-card">
                  <div className="benifit-img">
                    <Image src={user2} alt="Testimonials Icon" />
                  </div>
                  <div className="benifit-description">
                    <h4>Transparent Communication</h4>
                    <p>
                      We value honest and open communication throughout the
                      development process. From the initial consultation to
                      project deployment, our team keeps you in the loop with
                      regular progress updates, milestone tracking, and detailed
                      reports to ensure complete transparency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6  col-12 mb-4">
                <div className="benifit-card">
                  <div className="benifit-img">
                    <Image src={user3} alt="Security Icon" />
                  </div>
                  <div className="benifit-description">
                    <h4>Proven Track Record</h4>
                    <p>
                      Our extensive portfolio showcases custom-built WordPress
                      websites, WooCommerce stores, membership platforms,
                      enterprise solutions, and innovative web applications, all
                      designed to drive engagement, conversions, and business
                      growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6  col-12 mb-4">
                <div className="benifit-card">
                  <div className="benifit-img">
                    <Image src={user4} alt="Light Icon" />
                  </div>
                  <div className="benifit-description">
                    <h4>Innovative & Modern Solutions</h4>
                    <p>
                      Our team of expert WordPress developers constantly
                      explores new technologies, modern design principles, and
                      the latest WordPress innovations to create websites that
                      are visually stunning, functionally robust, and
                      future-proof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  d-none d-lg-block col-12">
            <div className="why-image">
              <Image src={why} alt="Trusted Wordpress Development Company" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default WordpressCompany;
