"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DesignEcomSlides = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className="slider-row">
          <div className="slider-one">
            <span className="slider-counter">01</span>

            <div className="slider-content">
              <h3>Discovery Phase</h3>
              <p>
                We begin by diving deep into your business goals, target
                audience, and unique requirements. Through detailed
                consultations, we gain a thorough understanding of your brand
                and the challenges you want to address. This foundational step
                ensures that every decision we make aligns with your objectives.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-row">
          <div className="slider-one">
            <span className="slider-counter">02</span>

            <div className="slider-content">
              <h3>Planning</h3>
              <p>
                In this phase, we create a comprehensive blueprint for your
                website, including wireframes, design concepts, and feature
                lists. This roadmap provides a clear direction for the project,
                ensuring all stakeholders are on the same page before moving
                forward with development.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-row">
          <div className="slider-one">
            <span className="slider-counter">03</span>

            <div className="slider-content">
              <h3>Design</h3>
              <p>
                Our team of creative designers gets to work bringing your vision
                to life. From captivating layouts to intuitive interfaces, every
                design element is carefully crafted to engage users and reflect
                your brand’s identity. We focus on balancing visual appeal with
                functionality to create a cohesive and attractive design.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-row">
          <div className="slider-one">
            <span className="slider-counter">04</span>

            <div className="slider-content">
              <h3>Development</h3>
              <p>
                Once the design is approved, our development team brings it to
                life. Using the latest technologies and coding practices, we
                build an interactive and fully functional website. This includes
                integrating essential features like secure payment gateways,
                responsive designs, and user-friendly navigation.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-row">
          <div className="slider-one">
            <span className="slider-counter">05</span>

            <div className="slider-content">
              <h3>Launch and Support</h3>
              <p>
                After rigorous testing to ensure everything works perfectly, we
                launch your website with precision. But our work doesn’t end
                there- we provide ongoing support to address any issues,
                implement updates, and ensure your platform remains optimized
                for long-term success.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default DesignEcomSlides;
