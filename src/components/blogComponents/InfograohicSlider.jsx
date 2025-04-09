"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const InfographicSlider = ({ posts }) => {
  const [isClient, setIsClient] = useState(false);

  const data = posts.filter((item) => item.acf.inforgaphic_image !== false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data.slice(0, 6).map((post, index) => (
          <SwiperSlide key={index}>
            <div className="trend-blog">
              <Link href={`/infographic/${post.slug}`}>
                <div className="trend-card">
                  <div className="lts-img">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt="img"
                      width={1200}
                      height={1200}
                    />
                  </div>
                  <div className="trend-heading">
                    <h4>{post.title.rendered}</h4>
                    
                  </div>
                  <span className="infograph-views">
                       <FontAwesomeIcon icon={faEye} aria-label="Count" />{" "}
                      {post.wgt_post_views_count}
                    </span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InfographicSlider;
