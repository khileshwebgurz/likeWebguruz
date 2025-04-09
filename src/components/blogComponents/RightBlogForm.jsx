"use client"; 
import { useEffect } from "react";
import useScript from "@/utils/formsHubspot/useScript";
const RightBlogForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  useEffect(() => {
    if (isLoaded && window.hbspt) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "4ceeaaba-124a-4166-b3af-d556632f537d",
          target: "#rightSideBlog",
          onFormSubmit: function($form) {
            console.log('enter form');
            window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'success_for_business',
            'form_name': 'Get Success With WebGuruz',
            'form_id':'4ceeaaba-124a-4166-b3af-d556632f537d',
            });
            console.log( window.dataLayer, " window.dataLayer")
            } // Target div ID
        });
      } catch (error) {
        console.error("Error loading HubSpot form:", error);
      }
    }
  }, [isLoaded]);

  return <div id="rightSideBlog" className="new-right-form"></div>; // The form will be injected here
};

export default RightBlogForm;
