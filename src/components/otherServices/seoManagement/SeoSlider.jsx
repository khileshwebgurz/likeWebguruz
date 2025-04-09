'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperSlider = () => {
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
      autoplay={{ // Autoplay settings
        delay: 1500, // Delay between slides in ms (3 seconds)
        disableOnInteraction: false,
        pauseOnMouseEnter:true, // Continue autoplay after user interaction
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
        <div className="card-seo-process mb-5">
          <span className="number">01</span>
          <h3>Discovery</h3>
          <p>We analyze your business, industry, and competition to develop a deep understanding of your SEO needs.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">02</span>
          <h3>Keyword Research</h3>
          <p>Identifying the most relevant and high-value keywords that can drive targeted traffic to your site.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">03</span>
          <h3>Optimization</h3>
          <p>Implementing on-page and off-page SEO strategies to boost search engine rankings and user experience.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">04</span>
          <h3> Content Creation</h3>
          <p>Developing high-quality, engaging, and SEO-friendly content that attracts your target audience.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">05</span>
          <h3> Monitoring & Reporting</h3>
          <p>Continuously tracking your SEO performance with regular reports and adjusting strategies as needed. </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">06</span>
          <h3>Ongoing Optimization </h3>
          <p>Keeping up with search engine algorithm updates and refining your SEO strategy to maintain top rankings.</p>
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

export default SwiperSlider;
