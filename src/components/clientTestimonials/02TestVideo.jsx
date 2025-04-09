"use client";
import React, { useState } from "react";
import Image from "next/image";
import quote from "../../../public/images/testimonialImages/quote.webp";
import videoimg from "../../../public/images/testimonialImages/review-1.webp";
import playimg from "../../../public/images/testimonialImages/play-btn.webp";
import videoimg2 from "../../../public/images/testimonialImages/img-2.webp";
import videoimg3 from "../../../public/images/testimonialImages/img-3.webp";
import videoimg4 from "../../../public/images/testimonialImages/img-4.webp";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MyVerticallyCenteredModal = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Video Player</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <iframe
        width="800"
        height="315"
        src="https://www.youtube.com/embed/EuiAtW3iraQ?si=KIBAnTiwlStXPq6S"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

const TestVideo = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className="testimonial-video py-5 inner-page">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-main">
              <span className="dot">What Our Customers say</span>
              <h2 className="mt-2">
              We Care about Our <strong>Cutomers Experience Too</strong>
              </h2>
              <p>
              Our cutomers love us and they have shared a few reviews to say just how much
              </p>
            </div>
          </div>
          <div className="row pt-2 pt-md-5 pb-0  video-row">
            <div className="col-lg-4 col-md-6">
              <div className="first-video">
                <iframe
                  src="https://www.youtube.com/embed/EuiAtW3iraQ?si=KIBAnTiwlStXPq6S&autoplay=1&loop=1&playlist=EuiAtW3iraQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  height="640"
                  width="400"
                  id="widget2"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 px-md-4">
              <div className="video-content">
                <div className="quote-img pt-3 pt-md-0">
                  <Image src={quote} alt="quote" />
                </div>
                <div className="video-review pt-md-5 pt-3 ps-md-4">
                  <p className="mb-0 mt-0">
                    &quot;Jas and his team worked brilliantly to realise my dream of creating a video course online. The team is technically sound and work on the tiniest details. Very professional and carry a positive attitude to deliver work that&apos;s done with precision. I wish them all the best.&quot;
                  </p>
                  <h3 className="pt-3 m-0 name">- Tina Costermans</h3>
                  {/* <span className="title">CEO Minusagent</span> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 review-video">
              <div className="row flex-row pt-4 pt-md-0">
                {[videoimg, videoimg2, videoimg3, videoimg4].map(
                  (img, index) => (
                    <div className="col-6" key={index}>
                      <div className="video-wallpapper">
                        <div className="video-img">
                          <Image src={img} alt={`videoimg${index + 1}`} />
                        </div>
                        <div className="video-play-link">
                          <button onClick={() => setModalShow(true)}>
                            <Image src={playimg} alt="playimg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TestVideo;
