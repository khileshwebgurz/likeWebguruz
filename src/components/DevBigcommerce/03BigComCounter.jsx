"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const BigComCounter = () => {
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
      observer.observe(refValue);
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue);
      }
    };
  }, []);

  return (
    <section
      className="counter-main bigcommerce-development-counter py-5"
      ref={counterRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
            Maximize Conversions, and {" "}
              <span>Drive Revenue Growth</span>
            </h2>
            <p className="my-3">
            At WebGuruz Technologies, we take pride in delivering top-notch BigCommerce solutions. Here’s what sets us apart:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={500}
                  duration={1}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Satisfied Clients</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={50} duration={1} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Certified BigCommerce Developers</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={15}
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
                <CountUp start={0} end={700} duration={1} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Successful Projects</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigComCounter;
