"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import Cookies from "js-cookie";

const CookieConsentBanner = () => {
  const handleAccept = () => {
    const consentData = {
      consentId: generateUniqueId(),
      consent: "yes",
      necessary: "yes",
      functional: "yes",
      analytics: "yes",
      performance: "yes",
      advertisement: "yes",
    };

    const consentString = `consentId:${consentData.consentId},consent:${consentData.consent},necessary:${consentData.necessary},functional:${consentData.functional},analytics:${consentData.analytics},performance:${consentData.performance},advertisement:${consentData.advertisement}`;

    Cookies.set("myCookie", consentString, { expires: 30 });

    localStorage.setItem("userCookie", consentString);
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 16);
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myCookie"
        buttonClasses="custom-cookie-btn"
        style={{ background: "#000", color: "#FFF" }}
        buttonStyle={{
          backgroundColor: "#fd4d92",
          color: "#FFF",
          padding: "6px 10px",
          fontSize: "12px",
          borderColor: "#fff",
        }}
        expires={30}
        onAccept={handleAccept}
      >
        <p>
          We use cookies to ensure you get the best experience on our website.
          <Link href="/privacy-policy" className="cookie-btn-link">
            <span style={{ color: "#fff" }}>privacy policy </span>
          </Link>
        </p>
      </CookieConsent>
    </>
  );
};
export default CookieConsentBanner;
