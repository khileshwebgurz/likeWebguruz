"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CmsMigrateProcess = () => {
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
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className="card-seo-process cards-cms-migration mb-5">
          <span className="number">01</span>
          <h3>Initial Assessment</h3>
          <p>
            We evaluate your current website and outline a tailored migration
            strategy.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">02</span>
          <h3>Data & Content Backup</h3>
          <p>
            We back up all your existing data to prevent any loss during
            migration.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">03</span>
          <h3>Development & Migration</h3>
          <p>
            Our team migrates your content, builds custom themes, and integrates
            essential tools.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">04</span>
          <h3>Testing & Quality Assurance</h3>
          <p>
            We thoroughly test the website for performance, functionality, and
            SEO compliance.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">05</span>
          <h3> Launch & Support</h3>
          <p>
            Once approved, we launch your website and provide ongoing support.
          </p>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">01</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default CmsMigrateProcess;
