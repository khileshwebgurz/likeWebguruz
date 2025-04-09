"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const DevEcomConsultCounter = () => {
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
      { threshold: 0.5 } 
    );

    if (refValue) {
      observer.observe(refValue); // Start observing
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue); 
      }
    };
  }, []); 

  return (
    <section className="counter-main ecommerce-consulting-counter py-5" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              <span>Achievements </span> Over the Years
            </h2>
            <p className="my-3">
            With years of excellence, WebGuruz has delivered outstanding results across the global eCommerce landscape.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={500} duration={1} suffix="+" separator="" />
              ) : (
                <span>1+</span>
              )}
              <p>Successful eCommerce projects</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={16} duration={2} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Years of Industry Experience</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={50}
                  duration={2}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Certified eCommerce Experts</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={200} duration={1} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Satisfied clients across various sectors</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevEcomConsultCounter;
