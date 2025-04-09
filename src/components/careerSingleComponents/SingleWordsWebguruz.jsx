import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import kanik from "../../../public/images/singlecareerimages/word-1.webp";
import manish from "../../../public/images/singlecareerimages/word-2.webp";
import kalim from "../../../public/images/singlecareerimages/word-3.webp";
import mohit from "../../../public/images/singlecareerimages/word-4.webp";
import punnet from "../../../public/images/singlecareerimages/word-5.webp";
const SingleWordsWebguruz = () => (
  <div className="Single-review-section ">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="review-title">
            <span>Team Review</span>
            <h2>
              What our <strong>team says</strong>
              <br />
              about us
            </h2>
            <p>
              A business that lacks ethics is short-lived, and one thing that we
              stand by is the business ethics that we follow ardently. Of
              course, we are here to make money, but more than that. One
            </p>
          </div>
        </div>
        <div className=" col-lg-8 col-12">
          <div className="row review-row">
            <div className="col-md-6 mb-4 ">
              <div className="review-card">
                <div className="msg-review">
                  <div className="single-quote-left">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon-left"
                      height={20}
                    />
                  </div>
                  <p>
                    I joined this company 1 Year ago and found it really
                    professional and friendly. Everyone is very helpful and
                    supportive, and knowledgeable and they resolve all the
                    queries and questions. This company has plenty of projects
                    to work on as they have clients all over the world
                  </p>
                  <div className="single-quote-right">
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="quote-icon-right"
                      height={20}
                    />
                  </div>
                </div>
                <div className="review-name-img">
                  <div className="img-box">
                    <Image src={kanik} alt="Kanik" />
                  </div>
                  <h6>- Kanik</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="review-card">
                <div className="msg-review">
                  <div className="single-quote-left">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="quote-icon-left"
                      height={20}
                    />
                  </div>
                  <p>
                    Working with Webguruz had been an incredible experience for
                    me. It was one of the best decision I made. This company was
                    working on a large project for me, and they delivered on
                    time. They provided excellent service and assistance. I&apos;d
                    want to work with Webguruz Technologoes again.
                  </p>
                  <div className="single-quote-right">
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="quote-icon-right"
                      height={20}
                    />
                  </div>
                </div>
                <div className="review-name-img">
                  <div className="img-box">
                    <Image src={manish} alt="manish" />
                  </div>
                  <h6>- Manish Khullar</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        <div className="row second-row">
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 ">
            <div className="review-card">
              <div className="msg-review">
                <div className="single-quote-left">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="quote-icon-left"
                    height={20}
                  />
                </div>
                <p>
                  &quot;One thing I love about this company is we don&apos;t shy away from
                  feedback. We tell people what they need to know to be the best
                  version of themselves and I really appreciate that.&quot; Very good
                  work culture
                </p>
                <div className="single-quote-right">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="quote-icon-right"
                    height={20}
                  />
                </div>
              </div>
              <div className="review-name-img">
                <div className="img-box">
                  <Image src={kalim} alt="kalim" />
                </div>
                <h6>- Mohammad Kalimullah</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="review-card">
              <div className="msg-review">
                <div className="single-quote-left">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="quote-icon-left"
                    height={20}
                  />
                </div>
                <p>
                  I have been working with Webguruz for over 6 months now and
                  throughout this period, I have only grown professionally.
                  There&apos;s so much to work on and learn from the seniors. Every
                  day is a new day exposing you to the wealth of knowledge and
                  skills you can acquire while working on real-world projects.
                  Very much satisfied with what this organization has to offer
                  to its employees. Can&apos;t ask for more.
                </p>
                <div className="single-quote-right">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="quote-icon-right"
                    height={20}
                  />
                </div>
              </div>
              <div className="review-name-img">
                <div className="img-box">
                  <Image src={mohit} alt="mohit" />
                </div>
                <h6>- Mohit Bhatt</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="review-card">
              <div className="msg-review">
                <div className="single-quote-left">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="quote-icon-left"
                    height={20}
                  />
                </div>
                <p>
                  Webguruz Technologies a company that allows you to grow and
                  enhance your skills. The office environment is extremely
                  comfortable. Seniors here are always ready to help. I am
                  learning alot and feeling fulfilled with skills.
                </p>
                <div className="single-quote-right">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="quote-icon-right"
                    height={20}
                  />
                </div>
              </div>
              <div className="review-name-img">
                <div className="img-box">
                  <Image src={punnet} alt="puneet" />
                </div>
                <h6>- Puneet Sharma</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

);

export default SingleWordsWebguruz;
