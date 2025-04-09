"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const DevShopifyInnerSlides = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <>
      <div className="shopify-arrows">
        <div className="swiper-button-prev custom-prev"></div>
        <div className="swiper-button-next custom-next"></div>
      </div>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation, Autoplay]}
        className="shopify-slides-main mySwiper"
      >
        <SwiperSlide>
          <div className="shopify-card-working">
            <div className="shopify-counts">
              <span>01</span>
            </div>
            <div className="shopify-cards-content">
              <h4>Custom Integrations</h4>
              <p>
                Seamlessly connect your Shopify store with other essential
                platforms and tools, such as CRMs, ERPs, accounting software,
                and marketing automation systems. By integrating these
                solutions, we streamline your workflows, enhance operational
                efficiency, and provide a unified system for managing your
                business with ease.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopify-card-working">
            <div className="shopify-counts">
              <span>02</span>
            </div>
            <div className="shopify-cards-content">
              <h4>Migration Expertise</h4>
              <p>
                Our migration services ensure a hassle-free transition from
                legacy systems or other e-commerce platforms to Shopify. We
                handle everything from data migration and design recreation to
                functionality transfer, ensuring no data is lost and your store
                operates seamlessly during and after the transition.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopify-card-working">
            <div className="shopify-counts">
              <span>03</span>
            </div>
            <div className="shopify-cards-content">
              <h4>Performance Optimization</h4>
              <p>
                Maximize conversions and customer satisfaction by optimizing
                your store’s performance. We enhance loading speeds, streamline
                navigation, and ensure every element is designed to provide a
                frictionless shopping experience. A faster, well-optimized store
                not only improves user experience but also boosts your search
                engine rankings.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopify-card-working">
            <div className="shopify-counts">
              <span>04</span>
            </div>
            <div className="shopify-cards-content">
              <h4>Mobile Responsiveness</h4>
              <p>
                With mobile shopping becoming increasingly dominant, we ensure
                your Shopify store is fully responsive and performs flawlessly
                on all devices. From smartphones to tablets, your customers will
                enjoy a consistent and intuitive shopping experience, regardless
                of how they access your store.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shopify-card-working">
            <div className="shopify-counts">
              <span>05</span>
            </div>
            <div className="shopify-cards-content">
              <h4>Analytics and Reporting</h4>
              <p>
                Gain valuable insights into your store’s performance with robust
                analytics and reporting tools. Track key metrics such as sales,
                customer behavior, and traffic sources to make data-driven
                decisions that drive growth. With clear and actionable reports,
                you’ll have the tools to continuously refine your strategy and
                improve outcomes.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DevShopifyInnerSlides;
