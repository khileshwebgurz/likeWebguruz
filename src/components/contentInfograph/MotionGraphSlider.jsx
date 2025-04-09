"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import searh1 from "../../../public/images/graphmotionimg/graph-diagram-1.png";
import searh2 from "../../../public/images/graphmotionimg/graph-diagram-2.png";
import searh3 from "../../../public/images/graphmotionimg/graph-diagram-3.png";
import searh4 from "../../../public/images/graphmotionimg/graph-diagram-4.png";
import searh5 from "../../../public/images/graphmotionimg/graph-diagram-5.png";
import "swiper/css";
import "swiper/css/navigation";

const MotionGraphSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="infographic-inner position-relative">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 30000000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div className="motion-graphic-slides">
            <div className="motion-graphic-img">
              <Image src={searh1} alt="Audit Icon" />
            </div>
            <div className="yout-content">
              <h4>Custom Infographic Design</h4>
              <p>
                We create visually compelling infographics that make your data
                and content easy to understand and highly engaging.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="motion-graphic-slides">
            <div className="motion-graphic-img">
              <Image src={searh2} alt="Audit Icon" />
            </div>
            <div className="yout-content">
              <h4>Animated Explainer Videos</h4>
              <p>
                Our motion graphics experts craft animated videos that simplify
                complex topics and promote your business effectively.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="motion-graphic-slides">
            <div className="motion-graphic-img">
              <Image src={searh3} alt="Audit Icon" />
            </div>
            <div className="yout-content">
              <h4>Social Media Visual Content</h4>
              <p>
                We design attention-grabbing motion graphics and infographics
                optimized for social media engagement.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="motion-graphic-slides">
            <div className="motion-graphic-img">
              <Image src={searh4} alt="Audit Icon" />
            </div>
            <div className="yout-content">
              <h4>Presentation & Pitch Deck Design</h4>
              <p>
                We design professional, visually appealing pitch decks and
                presentations that effectively communicate your ideas and
                captivate your audience.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="motion-graphic-slides">
            <div className="motion-graphic-img">
              <Image src={searh5} alt="Audit Icon" />
            </div>
            <div className="yout-content">
              <h4>Interactive Data Visualization</h4>
              <p>
                Our team creates dynamic, interactive visualizations that
                transform complex data into clear, engaging, and actionable
                insights.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-navigation-container">
        <div className="swiper-button-prev">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="nav-arrow nav-arrow-prev"
          />
        </div>
        <div className="swiper-button-next">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="nav-arrow nav-arrow-next"
          />
        </div>
      </div>
    </div>
  );
};

export default MotionGraphSlider;
