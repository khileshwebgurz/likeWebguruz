"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const AmazonPpcCounter = () => {
  const [inView, setInView] = useState(false); // State to track if the component is in view
  const counterRef = useRef(null); // Ref to target the counter section

  useEffect(() => {
    const refValue = counterRef.current; // Store the ref value in a variable

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
      className="counter-main seo-stratergy-counter py-5"
      ref={counterRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              Achieve Positive Results with <span> Amazon PPC Management</span>
            </h2>
            <p className="my-3">
              Our claims are backed by our portfolio of successful projects,
              years of experience, and the profits we have generated for our
              clients.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={10}
                  duration={2}
                  suffix="K+"
                  separator=""
                />
              ) : (
                <span>1K+</span>
              )}
              <p>hours dedicated to Amazon PPC campaigns</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={1200}
                  duration={1}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>successful projects completed</p>
            </label>
          </div>
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
              <p>years of industry experience</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={30}
                  duration={1}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>CTR Achieved for key campaigns</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazonPpcCounter;
