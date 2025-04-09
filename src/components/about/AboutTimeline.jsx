"use client";
import React, { useEffect, useRef, useState } from "react";
import caarier from "../../../public/images/careerimages/carrerimg2.webp";
import Image from "next/image";
const AboutTimeline = () => {
  const timelineRowRef = useRef(null);
  const yearPrefixDivRef = useRef(null);
  const sliderRef = useRef(null);
  const [totalYears, setTotalYears] = useState(17); // Total number of years in the timeline (from 2008 to 2024)
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

 
  useEffect(() => {
    const timelineRow = timelineRowRef.current;
    const yearPrefixDiv = yearPrefixDivRef.current;

    if (!timelineRow || !yearPrefixDiv) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = timelineRow;

      // Add your class when scrolling starts
      if (scrollTop > 0 && scrollTop < scrollHeight - clientHeight - 10) {
        yearPrefixDiv.classList.add("scrolling-active");
      } else {
        // Remove the class when at the top or bottom
        yearPrefixDiv.classList.remove("scrolling-active");
      }

      // NEW CODE: Update slider position based on scroll
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      setCurrentPosition(scrollPercentage);
    };

    timelineRow.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      timelineRow.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Handle slider drag events
  const handleDragStart = (e) => {
    setIsDragging(true);
  };

  const handleDrag = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;

    // Clamp position between 0 and 100
    const clampedPosition = Math.max(0, Math.min(100, position));
    setCurrentPosition(clampedPosition);

    // Scroll the timeline based on position
    if (timelineRowRef.current) {
      const { scrollHeight, clientHeight } = timelineRowRef.current;
      const scrollAmount =
        (clampedPosition / 100) * (scrollHeight - clientHeight);
      timelineRowRef.current.scrollTop = scrollAmount;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle dot click to scroll to specific year
  const handleDotClick = (index) => {
    const position = (index / (totalYears - 1)) * 100;
    setCurrentPosition(position);

    if (timelineRowRef.current) {
      const { scrollHeight, clientHeight } = timelineRowRef.current;
      const scrollAmount = (position / 100) * (scrollHeight - clientHeight);
      timelineRowRef.current.scrollTop = scrollAmount;
    }
  };
  useEffect(() => {
    // Add mouse move and mouse up event listeners to document for dragging
    const handleMouseMove = (e) => handleDrag(e);
    const handleMouseUp = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Generate dots for the timeline slider
  const renderTimelineDots = () => {
    const dots = [];
    for (let i = 0; i < totalYears; i++) {
      const year = 2008 + i;
      const position = (i / (totalYears - 1)) * 100;
      dots.push(
        <div
          key={i}
          className={`timeline-slider-dot ${
            currentPosition >= position - 3 && currentPosition <= position + 3
              ? "active"
              : ""
          }`}
          style={{ left: `${position}%` }}
          onClick={() => handleDotClick(i)}
        >
          <span className="dot-year">{year}</span>
        </div>
      );
    }
    return dots;
  };
  return (
    <div className="ourhistory-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main  mb-4">
            <span>timeline</span>
            <h2 className="timeline-title">Our history</h2>
          </div>
        </div>

        <div className="scroll-main-section">
          <div className="row timeline-row" ref={timelineRowRef}>
            <div className="col-xl-4 col-lg-5 col-12">
              <div className="d-flex flex-column align-items-end">
                <nav className="position-relative">
                  <div className="year-prefix-div fixed" ref={yearPrefixDivRef}>
                    <div className="fixed--inner">
                      <h3 className="year-text-prefix observer">
                        <span>20</span>
                      </h3>
                    </div>
                  </div>
                  <ul className="flex-column timeline-milestone-year-ul">
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2004"
                      >
                        08
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2006"
                      >
                        09
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2007"
                      >
                        10
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2011"
                      >
                        11
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2014"
                      >
                        12
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2016"
                      >
                        13
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2017"
                      >
                        14
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2020"
                      >
                        15
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        16
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        17
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        18
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        19
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        20
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        21
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        22
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        23
                      </a>
                    </li>
                    <li className="year-divider"></li>
                    <li className="timeline-milestone-year-li">
                      <a
                        className="timeline-milestone-year-text text-center p-0"
                        href="#2022"
                      >
                        24
                      </a>
                    </li>
                    <li className="year-divider"></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-1 col-lg-1 col-xl-1"></div>
            <div className="col-xl-7 col-lg-6 col-12">
              <div className="timeline-content-img">
                <div className="row">
                  <div className="timeline-card">
                    <div className="timelime-img">
                      <Image src={caarier} alt="caarier" />
                    </div>
                    <div className="timeline-content">
                      <p>
                        WebGuruz Technologies is a well-established custom
                        development Company that started in 2008. This was the
                        initial phase of the Company with a team of nearly 50
                        who provide web development, mobile app development,
                        custom software development, and e-commerce development.
                      </p>
                    </div>
                    <div className="timeline-card-year-text">2008</div>
                  </div>
                  <div className="timeline-card">
                    <div className="timelime-img">
                      <Image src={caarier} alt="caarier" />
                    </div>
                    <div className="timeline-content">
                      <p>
                        WebGuruz Technologies is a well-established custom
                        development Company that started in 2008. This was the
                        initial phase of the Company with a team of nearly 50
                        who provide web development, mobile app development,
                        custom software development, and e-commerce development.
                      </p>
                    </div>
                    <div className="timeline-card-year-text">2009</div>
                  </div>
                  <div className="timeline-card">
                    <div className="timelime-img">
                      <Image src={caarier} alt="caarier" />
                    </div>
                    <div className="timeline-content">
                      <p>
                        WebGuruz Technologies is a well-established custom
                        development Company that started in 2008. This was the
                        initial phase of the Company with a team of nearly 50
                        who provide web development, mobile app development,
                        custom software development, and e-commerce development.
                      </p>
                    </div>
                    <div className="timeline-card-year-text">2010</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="right-side-scroll-bar">
        <div className="timeline-slider-container" ref={sliderRef} onMouseDown={handleDragStart}>
          <div className="timeline-slider-track">{renderTimelineDots()}</div>
          <div className="timeline-slider-handle" style={{ left: `${currentPosition}%` }}></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
