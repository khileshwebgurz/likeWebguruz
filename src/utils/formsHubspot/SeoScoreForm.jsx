"use client";
import { useEffect } from "react";
import useScript from "./useScript";

const SeoScoreForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");

  useEffect(() => {
    if (isLoaded && window.hbspt) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "ae0e848c-6eef-4902-9e39-4cff56da0bc8",
          target: "#seoScore",
          onFormReady: function ($form) {
            // Select the website URL input field
            const urlInput = document.querySelector("input[name='website']");

            if (urlInput) {
              urlInput.addEventListener("input", (event) => {
                const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/.*)?$/;
                const errorMessage = "Please enter a valid website";

                // Find or create an error message element
                let errorSpan = urlInput.nextElementSibling;
                if (!errorSpan || !errorSpan.classList.contains("url-error")) {
                  errorSpan = document.createElement("span");
                  errorSpan.classList.add("url-error");
                  errorSpan.style.color = "red";
                  errorSpan.style.fontSize = "12px";
                  urlInput.parentNode.appendChild(errorSpan);
                }

                if (!urlPattern.test(event.target.value.trim())) {
                  errorSpan.textContent = errorMessage;
                } else {
                  errorSpan.textContent = "";
                }
              });
            }
          },
          onFormSubmit: function ($form) {
            const urlInput = document.querySelector("input[name='website']");
            const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/.*)?$/;

            if (urlInput && !urlPattern.test(urlInput.value.trim())) {
              alert("Invalid website URL. Please enter a valid URL before submitting.");
              return false; 
            }

            console.log("Form submitted");
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "check_seo_score",
              form_name: "Check your SEO",
              form_id: "ae0e848c-6eef-4902-9e39-4cff56da0bc8",
            });
          },
        });
      } catch (error) {
        console.error("Error loading HubSpot form:", error);
      }
    }
  }, [isLoaded]);

  return <div id="seoScore" className="new-score-handle"></div>; // The form will be injected here
};

export default SeoScoreForm;
