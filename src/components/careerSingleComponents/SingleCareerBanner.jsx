"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Experience from "../../../public/images/singlecareerimages/job-exp-1.png";
import Location from "../../../public/images/singlecareerimages/job-exp-2.webp";
import Job from "../../../public/images/singlecareerimages/job-exp-3.webp";
import Timespan from "../../../public/images/singlecareerimages/job-exp-4.webp";
import CareerContact from "../careerComponents/CareerContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const SingleCareerBanner = ({ data }) => {
  // Default fallback text
  const fallbackText = "Contact Webguruz";
  // State for share URL
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);
  return (
    <div>
      <section className="singleserviceform  ">
        <div className="container">
          <div className="row ">
            <div className="col-sm-7 col-xs-12 left heading-main inner-page">
              <h1 className="mb-3">
                {data[0]?.title?.rendered || fallbackText}
              </h1>
              <ul className="d-flex flex-wrap pt-4 experience-list">
                <li className="w-50 mb-4">
                  <span className="icon">
                    <Image src={Experience} alt="Experience Icon" />
                  </span>
                  {data[0]?.acf?.experience || fallbackText}
                </li>
                <li className="w-50 mb-4">
                  <a href="https://maps.app.goo.gl/sjUHz3n1pgrKhzVQ9" target="_blank">
                  <span className="icon">
                    <Image src={Location} alt="Location Icon" />
                  </span>
                  {data[0]?.acf?.location || fallbackText}
                  </a>
                </li>
                <li className="w-50">
                  <span className="icon">
                    <Image src={Job} alt="Job Type Icon" />
                  </span>
                  {data[0]?.acf?.jobType || "Job Type: Full-time"}
                </li>
                <li className="w-50">
                  <span className="icon">
                    <Image src={Timespan} alt="Timespan Icon" />
                  </span>
                  {data[0]?.date
                    ? new Date(data[0].date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : fallbackText}
                </li>
              </ul>
              <div className="post-share-icons color-wt">
                <h5 className="color-wt">Share this post on</h5>
                <ul className="job-share">
                  <li>
                    <FacebookShareButton url={shareUrl}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </FacebookShareButton>
                  </li>
                  <li>
                    <LinkedinShareButton url={shareUrl}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </LinkedinShareButton>
                  </li>
                  <li>
                    <TwitterShareButton url={shareUrl}>
                      <FontAwesomeIcon icon={faXTwitter} />
                    </TwitterShareButton>
                  </li>
                </ul>
              </div>
            </div>
            <CareerContact data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCareerBanner;
