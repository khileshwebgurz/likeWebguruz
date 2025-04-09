"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const HubAutomateDisplay = () => {
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
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section
      className="counter-main service-counter automate-display py-5"
      ref={counterRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-1">
            <h2>
              Cutting-edge <span>HubSpot Automation Solutions</span>
            </h2>
            <span>
              Experience unparalleled efficiency and growth with WebGuruz’s
              HubSpot automation expertise.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={200}
                  duration={1}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Successful Projects Completed</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={50} duration={2} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Certified HubSpot Experts on Board</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={9} duration={2} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Years of Experience in Automation Services</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={100} duration={2} suffix="%" />
              ) : (
                <span>1%</span>
              )}
              <p>Happy Clients Across the Globe</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubAutomateDisplay;
