"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import Image from "next/image";
import layer1 from "../../../public/images/ecommerceimage/ecom-report-1.webp";
import layer2 from "../../../public/images/ecommerceimage/ecom-report-2.webp";
import layer3 from "../../../public/images/ecommerceimage/ecom-report-3.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const EcommerceSlides = () => {
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
    >
      <SwiperSlide>
        <div className="row align-items-center ecom-slide-1">
          <div className="col-md-6">
            <div className="slider-seo-img">
              <Image src={layer1} alt="Research and Audit Icon" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="slider-seo-content">
              <h3>Research and Audit</h3>
              <p>
                We start by understanding your business, analyzing competitors,
                and conducting a thorough audit of your site.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="row align-items-center ecom-slide-2">
          <div className="col-md-6">
            <div className="slider-seo-img">
              <Image src={layer2} alt="Optimization and Implementation Icon" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="slider-seo-content">
              <h3>Optimization and Implementation</h3>
              <p>
                Based on our findings, we optimize your site’s structure,
                content, and technical aspects.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="row align-items-center ecom-slide-3">
          <div className="col-md-6">
            <div className="slider-seo-img">
              <Image src={layer3} alt="Monitoring and Reporting Icon" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="slider-seo-content">
              <h3>Monitoring and Reporting</h3>
              <p>
                We track your site’s performance, provide regular reports, and
                refine strategies to ensure ongoing success.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default EcommerceSlides;
