"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SliderBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <Swiper
      slidesPerView={1} // Default value for large screens
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{ // Autoplay settings
          delay: 3000, // Delay between slides in ms (3 seconds)
          // disableOnInteraction: false,
          // pauseOnMouseEnter: true, // Continue autoplay after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      className="mySwiper New-foundation-slider"
      // breakpoints={{
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      //   480: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      //   768: {
      //     slidesPerView: 1,
      //     spaceBetween: 15,
      //   },
      //   1024: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      //   1200: {
      //     slidesPerView: 1,
      //     spaceBetween: 30,
      //   },
      // }}
    >
      <SwiperSlide>
        <section className="foundation-one foundation-slider ">
          <div className="container">
            <div className="row slider-content">
              <h2 className="text-white">Education Donations</h2>
              <p className="text-white">
                To empower underprivileged children and we are going to sponsor
                their education not only at the elementary level but competitor
                level as well.
              </p>
              <div className="slider-btn">
                <a href="/webguruz-foundation/foundation-initiatives" className="found-slider-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="foundation-two foundation-slider">
          <div className="container">
            <div className="row slider-content">
              <h2 className="text-white" >
                Co-Sponsors of panther&apos;s 11
                <br />
                <span className="text-white">Club-cricket team</span>
              </h2>
              <p className="text-white">
                We are what we do over and over again. Excellence, then, is a
                habit, not an act.
              </p>
              <div className="slider-btn">
                <a href="/webguruz-foundation/foundation-initiatives" className="found-slider-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="foundation-three foundation-slider">
          <div className="container">
            <div className="row slider-content">
              <h2 className="text-white">Covid Vaccination Camp</h2>
              <p className="text-white">
                COVAXIN is included along with immune-potentiators, also known
                as vaccine adjuvants, which are added to the vaccine to increase
                and boost its immunogenicity.
              </p>
              <div className="slider-btn">
                <a href="/webguruz-foundation/foundation-initiatives" className="found-slider-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderBanner;
