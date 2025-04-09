import React from "react";
import Image from "next/image";
import check from "../../../public/images/youtubeimg/youcheck.svg";

const YoutAdsType = () => {
  const adTypes = [
    {
      title: "Skippable In-Stream Ads",
      description:
        "These video ads appear before, during, or after a YouTube video and are skippable after 5 seconds.",
    },
    {
      title: "Bumper Ads",
      description:
        "These are brief, non-skippable video ads that appear before a YouTube video, with a maximum length of 6 seconds.",
    },
    {
      title: "Non-Skippable In-Stream Ads",
      description:
        "These video ads play before, during, or after a YouTube video and must be watched in full. They have a maximum duration of 15 seconds.",
    },
    {
      title: "Overlay Ads",
      description:
        "These are semi-transparent banner ads that display at the bottom 20% of a video and can be either image or text-based.",
    },
    {
      title: "Masthead Ads",
      description:
        "These video ads are prominently featured at the top of the YouTube homepage for 24 hours. Available exclusively to advertisers who book them through a reservation process.",
    },
    {
      title: "Sponsored Cards",
      description:
        "These ads appear as a teaser in the top right corner of a YouTube video and can be expanded by the viewer for more details.",
    },
    {
      title: "Display Ads",
      description:
        "These ads are shown to the right of the featured video and above the video suggestion list.",
    },
    {
      title: "Discovery Ads",
      description:
        "These ads appear on the YouTube homepage, search results pages, and next to related videos. They can be either a thumbnail image or a text-based ad.",
    },
  ];

  return (
    <div className="Youtubetype-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              <span>YouTube Advertising </span> Ad Types
            </h2>
          </div>
          {adTypes.map((ad, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="youtube-type-card">
                <div className="img-text">
                  <Image src={check} alt="check" />
                  <h5>{ad.title}</h5>
                </div>
                <p>{ad.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutAdsType;
