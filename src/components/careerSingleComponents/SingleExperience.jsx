"use client";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SingleContactForm from "./SingleContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const SingleExperience = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <section className="single-experience py-5 new-single-experience">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-xs-12 heading-main left">
              <h2 className="mb-4">
                Skills & <strong>Experience:</strong>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[0].acf.skilles_experience,
                }}
              ></div>
                <div className="single-page-button">
                <button className="explore-btn mb-4 mb-md-0" onClick={handleShow}>
                Apply Now
              </button>
              <Link
                className="explore-btn mb-4 mb-md-0 "
                href="#"
              >
                Share JD
                <FontAwesomeIcon icon={faShareNodes} />
              </Link>
                </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Body className="new-single-form-body">
                  <button
                    type="button"
                    className="close-modal-btn"
                    onClick={handleClose}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <SingleContactForm data={data} />
                </Modal.Body>
              </Modal>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="right-active-jobs">
                <h3>Other Active Jobs</h3>
                <ul>
                  <li>
                    <Link href="/jobs-in-mohali/wordpress-and-shopify-developer">
                      WordPress Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs-in-mohali/direct-sales-consultant">
                      Direct Sales Consultant
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs-in-mohali/backend-developer">
                      Backend Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs-in-mohali/sr-react-native">
                      React Native<span>Minimum 4 Years</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs-in-mohali/business-development-executive">
                      Business Developer Executive<span>(0-2) Years</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs-in-mohali/web-developers">
                      Web Developers<span>(0-6) Years</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers/#applyalljob">View All</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleExperience;
