"use client";
import { useEffect } from "react";

const HubSpotForm = ({ targetId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.onload = () => {
      
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "78cdc06b-4479-4c6b-b851-153b55a464ed",
          target: `#${targetId}`,
        });
    
    };
    document.body.appendChild(script);
  }, [targetId]);

  return <div id={targetId} className="website-label tpfrmbnr">
    
  </div>; // Use targetId prop here
};

export default HubSpotForm;
