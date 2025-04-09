"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ConsultInner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <Swiper
      slidesPerView={3} // Default value for large screens
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        // Autoplay settings
        delay: 1500, // Delay between slides in ms (3 seconds)
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Continue autoplay after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      className="new-consulting-page mySwiper"
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
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
        <div className="consulting-card-sub text-center">
          <h4 className="slide-consult-head">Discovery Phase</h4>
          <p>
            We collaborate closely to learn about your industry, competitors,
            and unique value proposition. This insight shapes our strategy and
            ensures alignment with your objectives.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="consulting-card-sub text-center">
          <h4 className="slide-consult-head">Content Recommendations</h4>
          <p>
            Deliver insights to optimize your content strategy. We focus on
            creating and enhancing high-quality, relevant content that resonates
            with your target audience and aligns with SEO best practices.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="consulting-card-sub text-center">
          <h4 className="slide-consult-head">SEO Audit</h4>
          <p>
            Our audits evaluate technical issues, content quality, and backlink
            profiles to identify strengths and weaknesses. This comprehensive
            review sets the stage for effective optimization.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="consulting-card-sub text-center">
          <h4 className="slide-consult-head">Strategy Development & Sharing</h4>
          <p>
            Create and communicate a customized roadmap. Our strategic plans
            outline clear steps to achieve your goals, ensuring you are always
            informed and aligned with our approach.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="consulting-card-sub text-center">
          <h4 className="slide-consult-head">UI/UX Recommendations</h4>
          <p>
            We provide actionable suggestions to make your website intuitive,
            visually appealing, and easy to navigate, ensuring better
            interaction with your visitors.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="consulting-card-sub text-center">
          <h4 className="slide-consult-head">Support</h4>
          <p>
            Offer ongoing assistance and adjustments. We’re here to help you
            navigate challenges, answer questions, and make continuous
            improvements for sustained success.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ConsultInner;
