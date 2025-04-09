import React from "react";
import boost1 from "../../../public/images/voicesearchimg/voice-exp-1.webp";
import boost2 from "../../../public/images/voicesearchimg/voice-exp-2.webp";
import boost3 from "../../../public/images/voicesearchimg/voice-exp-3.webp";
import boost4 from "../../../public/images/voicesearchimg/voice-exp-4.webp";
import Image from "next/image";
const VoiceSeoBusinessReady = () => {
  return (
    <div className="Voicesearch-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Key Benefits of <span>Voice Search Optimization</span>
            </h2>
          </div>
        </div>
        <div className="row voice-search one mb-5">
          <div className="col-md-3 col-12">
            <div className="search-icon">
              <Image src={boost1} alt="Local Visibility Icon" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="search-text">
              <h5>Increased Local Visibility</h5>
              <p>
                Voice search often includes phrases like “near me,” making it
                essential for businesses to rank in local searches. Optimizing
                for voice ensures you’re easily found by nearby customers
                actively seeking your products or services. This not only drives
                foot traffic but also strengthens your local market presence.
              </p>
            </div>
          </div>
        </div>
        <div className="row voice-search two mb-5">
          <div className="col-md-9 col-12">
            <div className="search-text">
              <h5>Enhanced Mobile Experience</h5>
              <p>
                With more users relying on mobile devices for voice search, our
                optimization ensures your website is mobile-friendly and
                delivers quick, accurate responses. We focus on improving page
                loading times, mobile usability, and response accuracy,
                providing a seamless experience for users on the go.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="search-icon">
              <Image src={boost2} alt="Mobile Experience Icon" />
            </div>
          </div>
        </div>
        <div className="row voice-search one mb-5">
          <div className="col-md-3 col-12">
            <div className="search-icon">
              <Image src={boost3} alt="Customer Engagement Icon" />
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="search-text">
              <h5>Improved Customer Engagement</h5>
              <p>
                Voice search is conversational by nature. We tailor your content
                to match user intent, creating meaningful and engaging
                interactions with potential customers. By addressing their
                queries in a natural tone, we build trust and make your brand
                more relatable and approachable.
              </p>
            </div>
          </div>
        </div>
        <div className="row voice-search two mb-5">
          <div className="col-md-9 col-12">
            <div className="search-text">
              <h5>Competitive Edge</h5>
              <p>
                As voice search grows, businesses that adapt early will dominate
                their industries. Optimization ensures you’re ahead of
                competitors and ready for the future. By embracing this
                cutting-edge technology, you position your brand as innovative
                and customer-focused.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="search-icon">
              <Image src={boost4} alt="Competitive Edge Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSeoBusinessReady;
