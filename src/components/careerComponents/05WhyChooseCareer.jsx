"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import suddit from "../../../public/images/careerimages/web-main-1.webp";
import sukhpal from "../../../public/images/careerimages/web-main-2.webp";
import jaspreet from "../../../public/images/careerimages/web-main-3.webp";
import parul from "../../../public/images/careerimages/web-main-4.webp";
import kalim from "../../../public/images/careerimages/web-main-5.webp";
import avtar from "../../../public/images/careerimages/web-main-6.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const WhyChooseCareer = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide index

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  // Generate the dynamic class name based on the active slide index
  const getDynamicClassName = () => {
    return `testimonial-img-main slide-${activeSlide + 1}-active`;
  };
  const slidesData = [
    {
      name: "Suddit Kaura",
      role: "Sales Head (Digital Marketing)",
      testimonial:
        "I'm extremely appreciative about the opportunity Webguruz has offered me to find my secret abilities and gain insights in the business. I'm glad to work in a team.",
    },
    {
      name: "Parul Sen",
      role: "Team Lead, Web Development",
      testimonial:
        "I have been lucky to have been encircled by incredible people some of whom truly care about their positions and are liberal in sharing information to improve the groups.",
    },
    {
      name: "Avtar Singh",
      role: "Sales Lead (Web & Mobile)",
      testimonial:
        "Webguruz is a World Class IT Enterprise with brilliant infrastructure, quality, and support. I'm pleased to be a member of the Webguruz Team.",
    },
    {
      name: "Jaspreet Singh",
      role: "Business Development Manager",
      testimonial:
        "I have had the privilege of working at WebGuruz Technologies, and I can confidently say it's a remarkable company. The team's dedication to excellence and innovation is truly inspiring. WebGuruz fosters a supportive work environment, and I'm proud to be a part of such a forward-thinking organization. I look forward to many more successful years here!",
    },
    {
      name: "Sukhpal",
      role: "Project Manager, Web Development",
      testimonial:
        "People that actually care about their professions and are willing to share information with others have surrounded me, and I'm grateful for their generosity.",
    },
    {
      name: "Kalim",
      role: "Tech Lead, Mobile Developmemt",
      testimonial:
        "Working at Webguruz is an extraordinary delight for me. The thing I appreciate most about the organization is that it has  allowed me the chance to work in a wonderful multicultural environment with decent team members. I'm pleased to be a part of Webguruz.",
    },
  ];

  return (
    <section className="career-slides">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={getDynamicClassName()}>
              <div className=" cont cont-1">
                <Image
                  src={jaspreet}
                  alt="Initial Assessment"
                  className="img-fluid testi-img-1"
                  width={200}
                  height={200}
                />
                <Image
                  src={sukhpal}
                  alt="Initial Assessment"
                  className="img-fluid testi-img-2"
                  width={200}
                  height={200}
                />
              </div>
              <div className=" cont cont-2">
                <Image
                  src={kalim}
                  alt="Jaspreet"
                  className="img-fluid testi-img-3"
                  width={200}
                  height={200}
                />
                <Image
                  src={kalim}
                  alt="Jaspreet"
                  className="img-fluid  testimonial-big-img testi-img-3"
                  width={200}
                  height={200}
                />
                <Image
                  src={suddit}
                  alt="Parul Sen"
                  className="img-fluid testimonial-big-img  testi-img-4"
                  width={200}
                  height={200}
                />

                <Image
                  src={parul}
                  alt="Kalim"
                  className="img-fluid testi-img-5"
                  width={200}
                  height={200}
                />
                <Image
                  src={parul}
                  alt="Kalim"
                  className="img-fluid testimonial-big-img testi-img-5"
                  width={200}
                  height={200}
                />
                <Image
                  src={suddit}
                  alt="Parul Sen"
                  className="img-fluid   testi-img-4"
                  width={200}
                  height={200}
                />
                <Image
                  src={avtar}
                  alt="Avtar"
                  className="img-fluid testi-img-6"
                  width={200}
                  height={200}
                />
                <Image
                  src={avtar}
                  alt="Avtar"
                  className="img-fluid testimonial-big-img testi-img-6"
                  width={200}
                  height={200}
                />
                <Image
                  src={jaspreet}
                  alt="Initial Assessment"
                  className="img-fluid testimonial-big-img  testi-img-1"
                  width={200}
                  height={200}
                />
                <Image
                  src={sukhpal}
                  alt="Initial Assessment"
                  className="img-fluid testimonial-big-img testi-img-2"
                  width={200}
                  height={200}
                />
                <Image
                  src={suddit}
                  alt="Parul Sen"
                  className="img-fluid   testi-img-4-small"
                  width={200}
                  height={200}
                />
              </div>
              <div className=" cont cont-3">
                <Image
                  src={avtar}
                  alt="Avtar"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
                <Image
                  src={jaspreet}
                  alt="Initial Assessment"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
                <Image
                  src={jaspreet}
                  alt="Initial Assessment"
                  className="img-fluid"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000, // Delay between slides in ms (3 seconds)
              
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Update active slide index using realIndex
            modules={[Pagination, Autoplay]}
            className="mySwiper careers-swiper-new"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="first-testimonial ">
                  <h2>
                    In Our <strong>Own Words</strong>
                  </h2>
                  <h3 className="h5 mb-3 font-weight-bold">{slide.name}</h3>
                  <h5>{slide.role}</h5>
                  <div className="team-words">
                    <div className="quote-left">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="quote-icon-left"
                        height={20}
                      />
                    </div>
                    <p className="text-muted">{slide.testimonial}</p>
                    <div className="quote-right">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="quote-icon-right"
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCareer;
