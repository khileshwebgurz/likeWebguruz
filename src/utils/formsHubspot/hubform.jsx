"use client";
import { useEffect, useState } from "react";

const HubSpotFormV2 = () => {
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
              formId: "8274ed34-4045-4f8a-9a5a-06f6708536be", // Correct formId
              target: "#hubspotFormV3", // Ensure this matches the div ID
              onFormSubmit: function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "contactus_submitform",
                  form_name: "Got a Question? Fill in the details below.",
                  form_id: "8274ed34-4045-4f8a-9a5a-06f6708536be",
                });
              },
            });
          } catch (error) {
            console.error("HubSpot form creation error:", error);
          }
        } else {
          console.error("hbspt object not found on window.");
        }
      }, 500); 
     
      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded]); // Trigger form creation when the script is loaded

  return <div id="hubspotFormV3" className="contact-right-form"></div>; // Placeholder div for the HubSpot form
};

export default HubSpotFormV2;
