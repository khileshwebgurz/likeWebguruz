"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const ConsultDisplay = () => {
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
      className="counter-main service-counter hubspot-counting consulting-page py-5"
      ref={counterRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              Accelerate Business Growth with{" "}
              <span>Tailored HubSpot Solutions</span>
            </h2>
            <p>
              Partnering with a HubSpot consulting company ensures that your
              business utilizes HubSpot to its fullest potential. Our expert
              consultants can identify gaps, streamline processes, and provide
              innovative solutions that directly impact your ROI.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={9}
                  duration={2}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Years of Experience in marketing and HubSpot consulting.</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={1800}
                  duration={1}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Satisfied Clients from various industries.</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={50}
                  duration={2}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>Certified Experts ready to support your HubSpot journey.</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultDisplay;
