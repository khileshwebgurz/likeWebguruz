"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay

// Import Swiper styles
import "swiper/css";

import treneestart from "../../../public/images/internproimg/trenee-start.webp";
import checkwhite from "../../../public/images/internproimg/check-white.webp";

const InternDevelopers = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  const reviews = [
    {
      quote:
        "This training program gave me the skills and confidence I needed to land my first job. The trainers were so helpful and supportive throughout.",
      name: "Amit Sharma",
      role: "Web Developer",
    },
    {
      quote:
        "The hands-on experience I gained during the internship was invaluable. I learned so much in just 3 months!",
      name: "Priya Gupta",
      role: "SEO Trainee",
    },
    {
      quote:
        "I highly recommend this program for anyone looking to enhance their skills and gain industry experience. The support during the job placement process was exceptional.",
      name: "Rajeev Kumar",
      role: "Node Js Developer",
    },
  ];

  const benefits = [
    "Practical Exposure",
    "Experienced Trainers",
    "Real Projects",
    "Career Growth",
    "Flexible Schedule",
    "Affordable Fees",
  ];

  return (
    <div className="trenne-review-section ">
      <div className="container">
        <div className="row  ">
          {/* Swiper Section */}
          <div className="col-md-6 col-12  mb-m-0">
            <Swiper
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="trenee-review-section">
                    <p>&quot;{review.quote}&quot;</p>
                    <div className="trenee-name-review-quote">
                      <div className="quote-main">
                        <div className="trenee-name">
                          <h5>-{review.name}</h5>
                          <h6>{review.role}</h6>
                        </div>
                        <div className="trenee-review-star">
                          <Image src={treneestart} alt="star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Benefits Section */}
          <div className="col-md-6 col-12">
            <div className="trenee-review-content">
              <span>Reviews From Our Trainees</span>
              <h2>What are they Saying?</h2>
              <ul className="treene-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <Image src={checkwhite} alt="check" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternDevelopers;
