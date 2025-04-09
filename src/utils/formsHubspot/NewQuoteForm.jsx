"use client";
import { useEffect } from "react";
import useScript from "./useScript";
const NewQuoteForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  useEffect(() => {
    if (isLoaded && window.hbspt) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "3b223d7c-ad34-41c9-b896-aa21ded33dc5",
          target: "#hubspotFormV2",
          onFormSubmit: function ($form) {
            console.log("enter form");
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "get_quote_free_proposalform",
              form_name: "Register with webguruz",
              form_id: "3b223d7c-ad34-41c9-b896-aa21ded33dc5",
            });
            console.log(window.dataLayer, " window.dataLayer");
          },
        });
      } catch (error) {
        console.error("Error loading HubSpot form:", error);
      }
    }
  }, [isLoaded]);

  return <div id="hubspotFormV2" className="contact-right-form"></div>; // The form will be injected here
};

export default NewQuoteForm;
