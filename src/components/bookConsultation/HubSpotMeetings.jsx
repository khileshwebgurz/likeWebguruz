"use client";
import { useEffect, useState, useRef, useMemo } from "react";

const HubSpotMeetings = ({ service }) => {
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevService = useRef(null); // Track the previous service without triggering renders

  // Memoize service URLs to avoid dependency warnings
  const serviceUrls = useMemo(
    () => ({
      dm: [
        "https://hubspot.webguruz.in/meetings/saurabh64?embed=true",
        "https://meetings.hubspot.com/suddit-kaura?embed=true",
      ],
      seo: [
        "https://meetings.hubspot.com/suddit-kaura?embed=true",
        "https://hubspot.webguruz.in/meetings/saurabh64?embed=true",
      ],
      ppc: [
        "https://hubspot.webguruz.in/meetings/saurabh64?embed=true",
        "https://meetings.hubspot.com/suddit-kaura?embed=true",
      ],
      smm: [
        "https://meetings.hubspot.com/suddit-kaura?embed=true",
        "https://hubspot.webguruz.in/meetings/saurabh64?embed=true",
      ],
      ha: ["https://meetings.hubspot.com/avtar-s?embed=true"],
      hd: ["https://meetings.hubspot.com/avtar-s?embed=true"],
      webdev: ["https://meetings.hubspot.com/jaspreet11?embed=true"],
    }),
    []
  );

  // Load HubSpot script
  useEffect(() => {
    const scriptSelector =
      'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]';
    if (!document.querySelector(scriptSelector)) {
      const script = document.createElement("script");
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
        if (script) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  // Handle URL switching for selected service
  useEffect(() => {
    const urls = serviceUrls[service?.toLowerCase()] || [];

    if (service !== prevService.current) {
      // Reset index if service changes
      setCurrentIndex(0);
    } else if (urls.length > 0) {
      // Cycle through URLs
      setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length);
    } else {
      setError("No meetings available for this service.");
    }

    prevService.current = service; // Update previous service
  }, [service, serviceUrls]); // Add serviceUrls as a dependency

  const urls = serviceUrls[service?.toLowerCase()] || [];
  const currentUrl = urls[currentIndex];

  return (
    <div id="hubspot-meeting-container">
      {error ? (
        <p>{error}</p>
      ) : (
        <div
          className="meetings-iframe-container"
          data-src={currentUrl}
          aria-label={`HubSpot Meetings for ${service}`}
        />
      )}
    </div>
  );
};

export default HubSpotMeetings;
