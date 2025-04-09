"use client";
import React, { useEffect, useState } from "react";
import useScript from "@/utils/formsHubspot/useScript";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clutch from "../../../public/images/getaquote/clutch-logo.webp";
import Goodfirm from "../../../public/images/getaquote/goodfirms-logo.webp";
import Googlepartner from "../../../public/images/getaquote/google-partner-logo.webp";
import Hubspot from "../../../public/images/getaquote/HubSpot-Logo.webp";
import Shopify from "../../../public/images/getaquote/shopify-logo.webp";
import qoute from "../../../public/images/quote-img.webp";
import NewQuoteForm from "@/utils/formsHubspot/NewQuoteForm";

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      borderRadius: "100%",
    },
    visible: {
      scale: 1,
      opacity: 1,
      borderRadius: "0%",
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      borderRadius: "100%",
      transition: { duration: 0.3 },
    },
  };
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleOpen}>
        GET A QUOTE
      </button>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal show d-block get-quote-form new-quote-class"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
          >
            <div className="modal-dialog">
              <motion.div
                className="modal-content"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                  <div className="image-form">
                    <div className="image">
                      <Image src={qoute} alt="Contact us" />
                      <div className="content-image-above">
                        <h3 className="mb-4">
                          A man with a strategy can defeat a genius with no
                          strategy.
                        </h3>
                        <p>
                          With Webguruz, your Conceived plan will get achieved
                          and succeed
                        </p>
                      </div>
                    </div>
                    <div className="form">
                      <NewQuoteForm />
                    </div>
                  </div>
                  <div className="bottom-form-quote">
                    <div className="quote-pargraph">
                      {" "}
                      <p>
                        5000+ successful projects delivered by 200+ certified
                        expert
                      </p>
                    </div>
                    <ul>
                      <li>
                        <Image src={clutch} alt="Clutch Icon" />
                      </li>
                      <li>
                        <Image src={Googlepartner} alt="Google Partner" />
                      </li>
                      <li>
                        <Image src={Hubspot} alt="Hubspot" />
                      </li>
                      <li>
                        <Image src={Shopify} alt="Shopify" />
                      </li>
                      <li>
                        <Image src={Goodfirm} alt="GoodFirm Icon" />
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalForm;
