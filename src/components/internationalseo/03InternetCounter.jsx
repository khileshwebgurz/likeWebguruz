"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const InternetCounter = () => {
  const [inView, setInView] = useState(false); // State to track if the component is in view
  const counterRef = useRef(null); // Ref to target the counter section

  useEffect(() => {
    const refValue = counterRef.current; // Store the ref value in a variable

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true); // Set to true when component is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (refValue) {
      observer.observe(refValue); // Start observing
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue); // Clean up observer on unmount
      }
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <section
      className="counter-main international-counter py-5"
      ref={counterRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              Make Your Presence Felt Globally with{" "}
              <span>International SEO</span>
            </h2>
            <p className="my-3">
              International SEO ensures that your business can be found by
              potential customers worldwide, driving brand awareness, increasing
              traffic, and enhancing revenue opportunities across
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={16}
                  duration={2}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Years of Experience</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={40}
                  duration={1}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>Average Increase in Qualified leads</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={200}
                  duration={1}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>increase in ROI</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternetCounter;
