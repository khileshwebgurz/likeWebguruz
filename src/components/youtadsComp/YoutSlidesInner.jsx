"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Navigation and Autoplay modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import Image from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import icons
import searh from "../../../public/images/youtubeimg/search.webp";
import setup from "../../../public/images/youtubeimg/Setup.webp";
import youtube from "../../../public/images/youtubeimg/youtube.webp";
import test from "../../../public/images/youtubeimg/Test.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const YoutSlidesInner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <div className="youtube-inner">
      <div className="swiper-button-prev custom-prev">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="swiper-button-next custom-next">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true, 
        }}
        navigation={{
          prevEl: ".custom-prev", // Custom previous button
          nextEl: ".custom-next", // Custom next button
        }}
        modules={[Navigation, Autoplay]} // Add Navigation and Autoplay modules
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
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div className="youtube-slides mb-5">
            <div className="youtube-img">
              <Image src={searh} alt="Audit Icon" />
            </div>
            <div className="yout-content">
              <h4>Discovery and audit</h4>
              <p>
                As your business partners, we take the time to understand your
                objectives, target audience, competitors, and more. This insight
                allows us to craft a customized strategy that will achieve
                results for your business. Additionally, our team will
                thoroughly audit your Google Ads account to evaluate the
                performance of your previous campaigns.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="youtube-slides mb-5">
            <div className="youtube-img">
              <Image src={setup} alt="Video Ad Setup Icon" />
            </div>
            <div className="yout-content">
              <h4>Video Ad Setup</h4>
              <p>
                Once you approve, we will set up and manage your YouTube ad
                campaigns through Google Ads. We utilize advanced targeting
                features to ensure your video ads reach the right audience.
                Simultaneously, we implement comprehensive tracking and
                reporting to monitor the performance of your ads.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="youtube-slides mb-5">
            <div className="youtube-img">
              <Image src={youtube} alt="YouTube Advertising Strategy Icon" />
            </div>
            <div className="yout-content">
              <h4>YouTube Advertising Strategy </h4>
              <p>
                Leveraging our expertise and experience, our strategists create
                a tailored strategy through our YouTube Ads Services, designed
                to meet your objectives and help you stand out. During this
                phase, we also recommend expanding your reach through additional
                advertising on the Google Network to further amplify your
                message.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="youtube-slides mb-5">
            <div className="youtube-img">
              <Image src={test} alt="Tracking & Testing Icon" />
            </div>
            <div className="yout-content">
              <h4>Track, Test, Optimize</h4>
              <p>
                Now it&apos;s time to fine-tune your campaigns! We rely on data to
                help you meet your goals, and that’s exactly what we focus on
                after launching your video ads. Whether it&apos;s adjusting your
                video length or refining your targeting, we work diligently to
                optimize your ads for better engagement and clicks. This
                commitment to excellence is what sets us apart as the top
                YouTube advertising agency.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default YoutSlidesInner;
