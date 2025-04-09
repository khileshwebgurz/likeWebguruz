"use client"; // Ensure this component runs on the client side
import { useEffect, useState } from "react";

const WebdevForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);  // Track script load status

  useEffect(() => {
    // Create a script element to load the HubSpot form script
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js"; // Secure HTTPS source for loading the script
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true; // Load the script asynchronously

    // After the script is loaded, mark it as loaded
    script.onload = () => {
      setIsLoaded(true);  // Mark script as loaded
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
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
              formId: "46bee7c7-5168-46a9-9af5-a09227c25ff1",
              target: "#webdevForm",
              onFormSubmit: function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "services_submitform",
                  form_name: "Contact Us Today",
                  form_id: "46bee7c7-5168-46a9-9af5-a09227c25ff1",
                });
              },
            });
          } catch (error) {
            console.error("Error loading HubSpot form:", error);
          }
        } else {
          console.error("hbspt object not found on window.");
        }
      }, 500); // Increased delay to 1.5 seconds

      // Cleanup the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded]);  // Only run when the script is loaded

  return <div id="webdevForm" className="web-connect text-center"></div>; // The form will be injected here
};

export default WebdevForm;
