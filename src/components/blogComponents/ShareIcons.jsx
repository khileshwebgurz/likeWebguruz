"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faWhatsapp,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const ShareIcons = ({ title = '', thumbnailUrl = '' }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          setTooltipVisible(true);
          setTimeout(() => setTooltipVisible(false), 2000);
        })
        .catch((error) => {
          console.error("Failed to copy link: ", error);
        });
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="social-icon">
      <h4>Share:</h4>
      <ul className="icon-list">
        <li>
          <button onClick={handleCopyLink} className="copy-link-btn">
            <FontAwesomeIcon icon={faCopy} height={20} aria-label="Copy Link" />
          </button>
          {tooltipVisible && (
            <div className="tooltip">
              <span>Link copied!</span>
            </div>
          )}
        </li>
        {currentUrl && (
          <>
            <li>
              <FacebookShareButton url={currentUrl} quote={title}>
                <FontAwesomeIcon icon={faFacebook} height={20} aria-label="Facebook" />
              </FacebookShareButton>
            </li>
            <li>
              <LinkedinShareButton url={currentUrl} title={title}>
                <FontAwesomeIcon icon={faLinkedin} height={20} aria-label="LinkedIn" />
              </LinkedinShareButton>
            </li>
            <li>
              <TwitterShareButton url={currentUrl} title={title}>
                <FontAwesomeIcon icon={faXTwitter} height={20} aria-label="Twitter" />
              </TwitterShareButton>
            </li>
            <li>
              <PinterestShareButton url={currentUrl} media={thumbnailUrl}>
                <FontAwesomeIcon icon={faPinterest} height={20} aria-label="Pinterest" />
              </PinterestShareButton>
            </li>
            <li>
              <WhatsappShareButton url={currentUrl} title={title}>
                <FontAwesomeIcon icon={faWhatsapp} height={20} aria-label="WhatsApp" />
              </WhatsappShareButton>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ShareIcons;