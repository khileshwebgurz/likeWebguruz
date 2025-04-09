"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const AppDevCounter = () => {
  const [inView, setInView] = useState(false); // State to track if the component is in view
  const counterRef = useRef(null); // Ref for the counter section

  useEffect(() => {
    const refValue = counterRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true); // Start counting when the section comes into view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (refValue) observer.observe(refValue);

    return () => {
      if (refValue) observer.unobserve(refValue);
    };
  }, []);

  return (
    <div className="Certifiedagency-section py-5" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5 mb-md-4">
            <h2>
              <span>Our Value</span> Speaks for Itself
            </h2>
            <p>
              We pride ourselves on delivering outstanding results. Here’s why
              we’re the perfect partner for your HubSpot application
              development:
            </p>
          </div>
          {/** Reusable Counter Cards */}
          <div className="col-md-3 col-12 mb-4">
            <div className="certified-card">
              <h2>
                {inView ? (
                  <CountUp start={0} end={50} duration={2} suffix="+" />
                ) : (
                  "50+"
                )}
              </h2>
              <h4 className="my-3">Certified Application Developers
              </h4>
              <p>
              Our team includes over 50 HubSpot-certified developers who bring unmatched expertise to every project.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-4">
            <div className="certified-card">
              <h2>
                {inView ? (
                  <CountUp start={0} end={1500} duration={1} suffix="+" separator="" />
                ) : (
                  "1500+"
                )}
              </h2>
              <h4 className="my-3">Satisfied Clients
              </h4>
              <p>
              Our commitment to quality has earned us the trust of more than 1,500 happy clients worldwide.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-4">
            <div className="certified-card">
              <h2>
                {inView ? (
                  <CountUp start={0} end={450} duration={1} suffix="+" />
                ) : (
                  "450+"
                )}
              </h2>
              <h4 className="my-3">Applications Made Live
              </h4>
              <p>We have successfully delivered over 450 applications, making businesses smarter and more efficient.</p>
            </div>
          </div>
          <div className="col-md-3 col-12 mb-0 mb-sm-4">
            <div className="certified-card">
              <h2>
                {inView ? (
                  <CountUp start={0} end={16} duration={2} suffix="+" />
                ) : (
                  "16+"
                )}
              </h2>
              <h4 className="my-3">Years of Experience
              </h4>
              <p>With over 16 years in the industry, we’ve honed our skills to deliver unparalleled solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevCounter;
