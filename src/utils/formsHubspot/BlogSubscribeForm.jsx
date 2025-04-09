"use client"; 
import { useEffect } from "react";
import useScript from "./useScript";
const BlogSubscribeForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  useEffect(() => {
    if (isLoaded && window.hbspt) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "b1cc9043-30e3-4e00-b5be-0739f835d639",
          target: "#blogSubscribeForm",
          onFormSubmit: function($form) {
            console.log('enter form');
            window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'subscribe_now',
            'form_name': 'Subscribe InTo WebGuruz',
            'form_id':'b1cc9043-30e3-4e00-b5be-0739f835d639',
            });
            console.log( window.dataLayer, " window.dataLayer")
            } // Target div ID
        });
      } catch (error) {
        console.error("Error loading HubSpot form:", error);
      }
    }
  }, [isLoaded]);

  return <div id="blogSubscribeForm" className="news-form-right"></div>; // The form will be injected here
};

export default BlogSubscribeForm;
