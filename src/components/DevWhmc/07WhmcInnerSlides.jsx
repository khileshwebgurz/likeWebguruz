"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import list1 from "../../../public/images/whmcsimages/whmc-code-1.svg";
import list2 from "../../../public/images/whmcsimages/whmc-code-2.svg";
import list3 from "../../../public/images/whmcsimages/whmc-code-3.svg";
import list4 from "../../../public/images/whmcsimages/whmc-code-4.svg";
import list5 from "../../../public/images/whmcsimages/whmc-code-5.svg";
import list6 from "../../../public/images/whmcsimages/whmc-code-6.svg";
import choose1 from "../../../public/images/whmcsimages/whmc-quality-1.webp";
import choose2 from "../../../public/images/whmcsimages/whmc-quality-2.webp";
import choose3 from "../../../public/images/whmcsimages/whmc-quality-3.webp";
import choose4 from "../../../public/images/whmcsimages/whmc-quality-4.webp";
import choose5 from "../../../public/images/whmcsimages/whmc-quality-5.webp";
import choose6 from "../../../public/images/whmcsimages/whmc-quality-6.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const WhmcInnerSlides = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-md-3  col-12 custom-left">
        <div className="swiper-pagination custom-whmcs-dot"></div>
      </div>
      <div className="col-md-9 col-12">
        <div className="swiper-container">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="cycle-content">
                <div className="cycle-img">
                  <Image src={choose1} alt="Requirement Gathering" />
                </div>
                <div className="cycle-inner-content">
                  <div className="cycle-icon">
                    <Image src={list1} alt="Requirement Gathering Icon" />
                  </div>
                  <div className="cycle-head">
                    <h5>Requirement Gathering</h5>
                    <p>
                      We begin by understanding your business needs to identify
                      key objectives. This allows us to tailor our solutions to
                      address your unique challenges and ensure a smooth and
                      successful development process from the start.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cycle-content">
                <div className="cycle-img">
                  <Image src={choose2} alt="Planning Analysis" />
                </div>
                <div className="cycle-inner-content">
                  <div className="cycle-icon">
                    <Image src={list2} alt="Planning Analysis Icon" />
                  </div>
                  <div className="cycle-head">
                    <h5>Planning & Analysis</h5>
                    <p>
                      Our team outlines a detailed plan that aligns with your
                      business goals and technical requirements. This plan
                      ensures that every aspect of the development process is
                      thoroughly thought out, reducing risks and ensuring a
                      well-executed final product.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cycle-content">
                <div className="cycle-img">
                  <Image src={choose3} alt="Development & Customization" />
                </div>
                <div className="cycle-inner-content">
                  <div className="cycle-icon">
                    <Image src={list3} alt="Development & Customization Icon" />
                  </div>
                  <div className="cycle-head">
                    <h5>Development & Customization</h5>
                    <p>
                      We develop and customize your WHMCS solution to meet the
                      defined specifications. Our experienced developers work
                      closely with you to create features that enhance
                      functionality and optimize your workflows.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cycle-content">
                <div className="cycle-img">
                  <Image src={choose4} alt="Testing & Quality Assurance" />
                </div>
                <div className="cycle-inner-content">
                  <div className="cycle-icon">
                    <Image src={list4} alt="Testing & Quality Assurance Icon" />
                  </div>
                  <div className="cycle-head">
                    <h5>Testing & Quality Assurance</h5>
                    <p>
                      We rigorously test all solutions to ensure flawless
                      functionality and performance. Our quality assurance
                      process guarantees that the system is not only free from
                      bugs but also operates efficiently under various
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cycle-content">
                <div className="cycle-img">
                  <Image src={choose5} alt="Deployment" />
                </div>
                <div className="cycle-inner-content">
                  <div className="cycle-icon">
                    <Image src={list5} alt="Deployment Icon" />
                  </div>
                  <div className="cycle-head">
                    <h5>Deployment</h5>
                    <p>
                      After successful testing, we deploy your WHMCS solution in
                      a seamless and secure manner. Our deployment process
                      ensures minimal disruption to your ongoing operations
                      while implementing your new solution smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cycle-content">
                <div className="cycle-img">
                  <Image src={choose6} alt="Post Deployment Support" />
                </div>
                <div className="cycle-inner-content">
                  <div className="cycle-icon">
                    <Image src={list6} alt="Post Deployment Support Icon" />
                  </div>
                  <div className="cycle-head">
                    <h5>Post-Deployment Support</h5>
                    <p>
                      Our support doesn’t end after deployment- we provide
                      continuous assistance to keep your system running
                      smoothly. We offer timely updates, troubleshooting, and
                      adjustments as necessary to maintain optimal performance
                      over time.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhmcInnerSlides;
