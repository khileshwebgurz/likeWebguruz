"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const ContentSeoCounter = () => {
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
    <section className="counter-main content-seo-counter py-5" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              <span>Gain Readership and Convert</span> <br />
              Potential Leads Conveniently
            </h2>
            <p className="my-3">
              Our SEO Content Writing Services are tailored to boost your
              business rankings in the SERPs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={16} duration={2} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Years in Business</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={25} duration={2} suffix="M+" />
              ) : (
                <span>1M+</span>
              )}
              <p>Organic Traffic Generated</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={2} duration={3} suffix="M+" />
              ) : (
                <span>1M+</span>
              )}
              <p>Keywords Ranked on the 1st Page</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={104}
                  duration={1}
                  suffix="K+"
                  separator=""
                />
              ) : (
                <span>1K+</span>
              )}
              <p>Leads Converted</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSeoCounter;
