"use client";
import { useEffect, useState } from "react";

const DigitalForm = () => {
  const [isLoaded, setIsLoaded] = useState(false); // To track script load status

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js"; // HubSpot form script
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;

      // Set script.onload to true after script has fully loaded
      script.onload = () => {
        setIsLoaded(true); // Mark script as loaded
      };

      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Trigger form creation after a delay if the script is loaded
    if (isLoaded) {
      const timeoutId = setTimeout(() => {
        if (window.hbspt) {
          try {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "2383602",
              formId: "2eda60e8-4000-4dc7-aa23-fa45a2e83674",
              target: "#digitalForm",
              onFormSubmit: function ($form) {
                console.log("enter form");
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "services_submitform",
                  form_name: "Contact Us Today",
                  form_id: "2eda60e8-4000-4dc7-aa23-fa45a2e83674",
                });
                console.log(window.dataLayer, " window.dataLayer");
              },
            });
          } catch (error) {
            console.error("Error loading HubSpot form:", error);
          }
        }
      }, 500); // Increased delay to ensure form rendering after load

      // Cleanup timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded]); // Only run when the script is loaded

  return <div id="digitalForm"></div>; // The form will be injected here
};

export default DigitalForm;
