"use client";
import { useEffect } from "react";
import useScript from "./useScript";
const ParichayForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  useEffect(() => {
    if (isLoaded && window.hbspt) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "f652af4f-a2b2-42dd-89d2-7ebe416f6aa1",
          target: "#parichayForm",
          onFormSubmit: function ($form) {
            console.log("enter form");
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "parichay_form",
              form_name: "Parichay Form",
              form_id: "f652af4f-a2b2-42dd-89d2-7ebe416f6aa1",
            });
            console.log(window.dataLayer, " window.dataLayer");
          }, // Target div ID
        });
      } catch (error) {
        console.error("Error loading HubSpot form:", error);
      }
    }
  }, [isLoaded]);

  return <div id="parichayForm" className="parichay-details"></div>; // The form will be injected here
};

export default ParichayForm;
