"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation
import BlogSubscribeForm from "@/utils/formsHubspot/BlogSubscribeForm";

const SingleCareerJob = () => {
  const router = useRouter();

  const handleScrollToJobs = () => {
    router.push("/careers#applyalljob");
  };

  return (
    <>
      <section className="career-job  new-careers-job-checknow">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className=" col-md-6 col-xs-12 left-content heading-main job-open">
              <div className="job-btn-section">
                <h2>Keep an eye on the latest job openings.</h2>
                <button className="explore-btn" onClick={handleScrollToJobs}>
                  Check Now
                </button>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 content-right">
              <div className="job-search">
                <h3 className="color-wt mb-4">
                  Subscribe to our email newsletter and stay updated with the
                  latest tech insights from our digital experts.
                </h3>

                <BlogSubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCareerJob;
