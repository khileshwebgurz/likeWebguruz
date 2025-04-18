"use client";
import React, { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Quotes from "../../../../../public/images/quote-left.webp";
import { testimonialData } from "@/utils/07utilhomtestim";

const HomeTestimonial = () => {
  const slider1Ref = useRef(null); // Ref for main slider
  const slider2Ref = useRef(null); // Ref for navigation slider

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settingsMain = {
    autoplay: true, // Enable autoplay
  autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: nav2, // Sync with navigation slider
    Infinity: true,
  };

  const settingsNav = {
    autoplay: true, // Enable autoplay
  autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1, // Sync with main slider
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Below 991px width
        settings: {
          slidesToShow: 4, // Show 3 slides
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 991, // Below 991px width
        settings: {
          slidesToShow: 3, // Show 3 slides
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768, // Below 768px width
        settings: {
          slidesToShow: 3, // Show 2 slides
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 668, // Below 768px width
        settings: {
          slidesToShow: 2, // Show 2 slides
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 375, // Below 375px width
        settings: {
          slidesToShow: 2,
          arrows: true,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-5">
              <h2>
                Client <span>Testimonials</span>
              </h2>
              <span>
                Hear from Satisfied Clients about their Experience Working with
                WebGuruz.
              </span>
            </div>
            <Slider
              {...settingsMain}
              ref={slider1Ref}
              className="testimonial-top"
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className="row align-items-center image-content-testimonial">
                    <div className="col-sm-4 col-xs-12 image-left">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={500}
                        height={340}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="content-right">
                        <Image
                          src={Quotes}
                          alt="quotes"
                          className="quote-main"
                        />
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="navtestimonial">
              <Slider
                {...settingsNav}
                ref={slider2Ref}
                className="slider-thumbnail"
              >
                {testimonialData.map((testimonial) => (
                  <div key={testimonial.id}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={340}
                      height={340}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
