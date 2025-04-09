"use client";
import React from "react";
import HubSpotMeetings from "./HubSpotMeetings";
import { useState } from "react";
const SelectMeeting = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectMeeting, setSelectMeeting] = useState("");
  const handleSelect = (e) => {
    setShowModal(true);
    setSelectMeeting(e.target.value);
  };

  return (
    <>
      <h3>Select Your Service</h3>
      <select
        className="form-select"
        value={selectMeeting}
        onChange={handleSelect}
      >
        <option value="none">Select Your Service</option>
        <option value="dm">Digital Marketing</option>
        <option value="seo">SEO</option>
        <option value="ppc">PPC</option>
        <option value="smm">Social Media Marketing</option>
        <option value="ha">Hubspot Automation</option>
        <option value="hd">Hubspot Development</option>
        <option value="webdev">Web Development/Design</option>
      </select>

      {showModal && selectMeeting !== "none" && (
        <>
          <div
            className="modal show d-block get-quote-form"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
                <div className="modal-body">
                  <div className="items">
                    <HubSpotMeetings service={selectMeeting} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SelectMeeting;
