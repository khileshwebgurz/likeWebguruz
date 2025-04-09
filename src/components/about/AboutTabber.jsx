"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutTabData } from "@/utils/03utilHomeTab";

const AboutTabber = () => {
  const [activeTab, setActiveTab] = useState(aboutTabData[aboutTabData.length - 1].eventKey);
  const tabContainerRef = useRef(null);

  // Scroll to the last tab on initial render
  useEffect(() => {
    const tabContainer = tabContainerRef.current;
    const lastTabIndex = aboutTabData.length - 1;
    const lastTab = tabContainer?.children[0].children[lastTabIndex];

    if (tabContainer && lastTab) {
      // Calculate the position of the last tab and scroll to it
      const containerRect = tabContainer.getBoundingClientRect();
      const tabRect = lastTab.getBoundingClientRect();
      const offset = tabRect.left - containerRect.left;

      // Scroll the container to the last tab
      tabContainer.scrollBy({
        left: offset - containerRect.width / 2 + tabRect.width / 2,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  }, []); // Run only on initial render

  // Handle tab click and scroll to the clicked tab
  const handleTabClick = (eventKey, tabIndex) => {
    setActiveTab(eventKey);

    const tabContainer = tabContainerRef.current;
    const clickedTab = tabContainer?.children[0].children[tabIndex];

    if (tabContainer && clickedTab) {
      const containerRect = tabContainer.getBoundingClientRect();
      const tabRect = clickedTab.getBoundingClientRect();
      const offset = tabRect.left - containerRect.left;

      // Scroll smoothly to the clicked tab
      tabContainer.scrollBy({
        left: offset - containerRect.width / 2 + tabRect.width / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-5 tab-main history-sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
              Our <span>History</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="tabs-input-main">
              <div className="nav-tab-main" ref={tabContainerRef}>
                <div className="nav nav-tabs" role="tablist">
                  {aboutTabData.map((tab, index) => (
                    <button
                      key={tab.eventKey}
                      className={`nav-link ${activeTab === tab.eventKey ? "active" : ""}`}
                      onClick={() => handleTabClick(tab.eventKey, index)}
                      type="button"
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="tab-content mt-3">
                {aboutTabData.map((tab) => (
                  <div
                    key={tab.eventKey}
                    className={`tab-pane ${activeTab === tab.eventKey ? "active" : ""}`}
                    role="tabpanel"
                  >
                    <div className="image-cnt d-flex justify-content-between column-gap-5">
                      <div className="content">
                        {tab.content.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="image">
                        <Image
                          src={tab.imageSrc}
                          alt={tab.title}
                          width={2000}
                          height={2000}
                          style={{ height: "100%", width: "100%" }}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTabber;
