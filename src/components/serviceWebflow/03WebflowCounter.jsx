"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const WebflowCounter = () => {
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
    <section className="counter-main webflow-counter py-5" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
            Transform Your Vision into Reality with {" "}
              <span>Our Webflow Services</span>
            </h2>
            <p className="my-3">
            We bring years of expertise and a passion for excellence to every Webflow project.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={800} duration={1} suffix="+" />
              ) : (
                <span>1+</span>
              )}
              <p>Satisfied Clients</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={12} duration={2} suffix="+" />
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
                  end={20}
                  duration={1}
                  suffix="+"
                  separator=""
                />
              ) : (
                <span>1+</span>
              )}
              <p>Certified Webflow Experts</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              {inView ? (
                <CountUp start={0} end={300} duration={1} suffix="+" separator="" />
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

export default WebflowCounter;
