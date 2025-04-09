"use client"
// import Link from "next/link";
import React from "react";
// import HomeClient from "../homeComponents/clientcomp/HomeClient";
import BlogSubscribeForm from "@/utils/formsHubspot/BlogSubscribeForm";

const CareerJob = () => {
  const handleScrollToJobs = () => {
    const jobSection = document.getElementById("applyalljob");
    if (jobSection) {
      const yOffset = -150; // Adjust this value to control the scroll offset
      const yPosition = jobSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="career-job  new-careers-job-checknow">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className=" col-md-6 col-xs-12 left-content heading-main job-open">
                <div className="job-btn-section">
                <h2>
                Keep an eye on the
               latest job openings.
              </h2>
              <button className="explore-btn" onClick={handleScrollToJobs}>Check Now</button>
                </div>
            </div>
            <div className="col-md-6 col-xs-12 content-right">
               <div className="job-search">
               <h3 className="color-wt mb-4">
                Subscribe to our email newsletter and stay updated with the
                latest tech insights from our digital experts.
              </h3>
             
              <BlogSubscribeForm/>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerJob;
