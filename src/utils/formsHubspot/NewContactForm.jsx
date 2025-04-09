"use client";
import { useEffect, useState } from "react";

const NewContactForm = () => {
  const [isLoaded, setIsLoaded] = useState(false); // To track script load status

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js"; // Secure HTTPS source
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setIsLoaded(true); // Mark script as loaded
      };

      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Delay the form creation slightly after the script is fully loaded
      const timeoutId = setTimeout(() => {
        if (window.hbspt) {
          try {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "2383602",
              formId: "e5465e82-99a7-4a05-9cf8-fea14f17bc7c", // Correct formId
              target: "#contactForm", // Ensure this matches the div ID
              onFormSubmit: function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "contactus_discussion",
                  form_name: "Project Discussion",
                  form_id: "e5465e82-99a7-4a05-9cf8-fea14f17bc7c",
                });
              },
            });
          } catch (error) {
            console.error("HubSpot form creation error:", error);
          }
        } else {
          console.error("hbspt object not found on window.");
        }
      }, 500); // 1.5 second delay, can be adjusted

      // Cleanup timeout if component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded]); // Trigger form creation when the script is loaded

  return <div id="contactForm" className="banner-form"></div>; // Placeholder div for the HubSpot form
};

export default NewContactForm;
