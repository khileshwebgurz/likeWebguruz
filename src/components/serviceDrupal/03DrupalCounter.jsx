"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const DrupalCounter = () => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const refValue = counterRef.current;

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
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
    <section className="counter-main drupal-counter py-5" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              The <span>WebGuruz Advantage</span>
            </h2>
            <p className="my-3">
              With a proven track record in Drupal development, we stand out as
              a trusted technology partner for businesses worldwide.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={400} duration={1} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Satisfied Clients</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={40} duration={1} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Drupal Developers & Experts</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp
                  start={0}
                  end={10}
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
                <CountUp start={0} end={700} duration={2} suffix="+" separator="" />
              ) : (
                <span>1+</span>
              )}
              <p>Projects Successfully Delivered</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrupalCounter;
