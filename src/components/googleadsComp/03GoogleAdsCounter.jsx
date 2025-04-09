"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const GoogleAdsCounter = () => {
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
    <section className="counter-main google-ads-counter py-5" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              Did You <span>Know?</span>
            </h2>
            <p className="my-3">
              The impact of Google Ads on businesses is far beyond brand
              awareness.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={63}
                  duration={1}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>of people click on Google Ads when searching for products or services.</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={8}
                  duration={2}
                  prefix="$"
                  separator=""
                />
              ) : (
                <span>$1</span>
              )}
              <p>average that businesses make for every $1 spent on Google Ads.</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={80}
                  duration={1}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>of Google Ads traffic comes from mobile devices.</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={90}
                  duration={1}
                  suffix="%"
                  separator=""
                />
              ) : (
                <span>1%</span>
              )}
              <p>of consumers use Google to find local businesses online.</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsCounter;
