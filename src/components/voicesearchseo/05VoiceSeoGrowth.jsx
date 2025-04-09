import React from "react";
import Image from "next/image";
import user1 from "../../../public/images/voicesearchimg/voice-search-1.webp";
import user2 from "../../../public/images/voicesearchimg/voice-search-2.webp";
import user3 from "../../../public/images/voicesearchimg/voice-search-3.webp";
import user4 from "../../../public/images/voicesearchimg/voice-search-4.webp";
import user5 from "../../../public/images/voicesearchimg/voice-search-5.webp";
import user6 from "../../../public/images/voicesearchimg/voice-search-6.webp";
import user7 from "../../../public/images/voicesearchimg/voice-search-7.webp";
import user8 from "../../../public/images/voicesearchimg/voice-search-8.webp";

const voiceFacts = [
  {
    image: user1,
    alt: "Voice Icon",
    text: "Over 50% of searches are now voice-based.",
  },
  {
    image: user2,
    alt: "Voice Search Icon",
    text: "58% of consumers use voice search to find local businesses.",
  },
  {
    image: user3,
    alt: "Voice Search Queries Icon",
    text: "Voice search queries are typically 29 words long on average.",
  },
  {
    image: user4,
    alt: "Voice Over Icon",
    text: "71% of users prefer using voice-over typing for queries.",
  },
  {
    image: user5,
    alt: "Voice Commerce Icon",
    text: "By 2025, voice commerce is expected to reach $40 billion in the U.S.",
  },
  {
    image: user6,
    alt: "Voice Search Results Icon",
    text: "Websites with fast-loading speeds rank higher in voice search results.",
  },
  {
    image: user7,
    alt: "Google Voice Search Icon",
    text: "75% of voice search results come from the top three Google results.",
  },
  {
    image: user8,
    alt: "Voice search optimization Icon",
    text: "Voice search optimization can increase website traffic by up to 30%.",
  },
];

const VoiceSeoGrowth = () => {
  return (
    <div className="Voicegrow-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center">
            <div className="mb-4 mb-md-5">
              <h2>
                <span>Voice Search Optimization</span> <br /> Facts
              </h2>
            </div>
          </div>

          {voiceFacts.map((fact, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-12 mb-4 mb-lg-0"
            >
              <div className="voice-card">
                <div className="voice-small-icon">
                  <Image src={fact.image} alt={fact.alt} />
                </div>
                <p>{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceSeoGrowth;
