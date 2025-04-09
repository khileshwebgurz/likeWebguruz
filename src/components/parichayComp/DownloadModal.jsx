"use client";

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ParichayForm from "@/utils/formsHubspot/ParichayForm";

const DownloadModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="downlaod-btn">
        <button
          className="octf-btn octf-btn-primary octf-btn-icon"
          onClick={(e) => {
            e.preventDefault();
            handleShow();
          }}
        >
          <span>
            Download File
            <i className="flaticon-right-arrow-1"></i>
          </span>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        dialogClassName="parichay-dialog"
        contentClassName="parichay-content"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ParichayForm />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer> */}
        </motion.div>
      </Modal>
    </div>
  );
};

export default DownloadModal;
