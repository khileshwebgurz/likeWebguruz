import React from "react";
import insight from "../../../public/images/blogimages/latest-insights.gif";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BlogSubscribeForm from "@/utils/formsHubspot/BlogSubscribeForm";
const NewBlogSubscriber = () => {
  return (
    <div className="NewBlogSubscriber py-5">
      <div className="container">
        <div className="row subscribe-box ">
          <div className="col-lg-4 col-md-5 col-12 ">
            <div className="subscribe-img">
              <Image src={insight} alt="subscribe" unoptimized />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-12">
            <div className="sub-text">
              <ul className="email-icon">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />
                <li>Join 25000+ Subscribers</li>
              </ul>
              <h2>
                Stay updated with <br />
                <span> Latest Insights.</span>
              </h2>
              <p>
                Latest Mobile App Development and Online Marketing News,
                Insights,Trends delivered weekly to your Inbox.
              </p>
            </div>
            <div className="new-subscribe-form">
              <BlogSubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlogSubscriber;
