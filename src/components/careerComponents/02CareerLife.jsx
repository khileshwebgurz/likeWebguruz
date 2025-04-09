"use client";
import React, { useState } from "react";
import Image from "next/image";
import Life1 from "../../../public/images/careerimages/life-1.webp";
import Life2 from "../../../public/images/careerimages/life2.webp";
import Life3 from "../../../public/images/careerimages/life3.webp";
import Life5 from "../../../public/images/careerimages/life5.webp";
import ArrowUp from "../../../public/images/chevron-up.svg";
import ArrowDown from "../../../public/images/chevron-down.svg";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordionNew ${isOpen ? "active" : ""}`}>
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="according-heading"
    >
      {title}
      <Image
        src={isOpen ? ArrowUp : ArrowDown}
        alt={isOpen ? "Collapse" : "Expand"}
        width={5}
        height={5}
      />
    </div>
    {isOpen && (
      <div
        className="accContentMain"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )}
  </div>
);

const ServiceFaq = ({ accordionData, onItemClick, openIndex }) => {
  return (
    <div className="faq-content">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => onItemClick(index)}
        />
      ))}
    </div>
  );
};

const Careerlife = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const careerData = [
    {
      title: "Find a Balance Life with flexible office timings",
      content:
        "We'll make sure your Mondays aren't awful thanks to our accommodating work schedules, no-crying-over-leaves policy, and yearly trips.",
      image: Life1,
    },
    {
      title: "Get the opportunity to interact with fascinating individuals",
      content:
        "Make new friends by joining a community that prides itself on being multifaceted — a group of artists, thinkers, musicians, party-goers, nerds, and more!",
      image: Life2,
    },
    {
      title: "Activities for a more enlightened mind",
      content:
        "Besides the internet, we are also weak in the knees when it comes to examining the real world. Like clockwork, we go on company vacations and trips to places like amusement parks and historical landmarks alike.",
      image: Life3,
    },
    {
      title: "When we are not working, we party hard!",
      content:
        "Anything goes: birthday treats, colleagues' life events, project completion festivities, and certainly be ready for surprise parties where you just get to unwind - the treat is on us.",
      image: Life3,
    },
    {
      title: "This is the place where learning is made entertaining",
      content:
        "In a dynamic working atmosphere, you'll be surrounded by the best team leaders and pioneers, as well as the opportunity to play indoor games with your colleagues.",
      image: Life5,
    },
  ];

 
  const handleClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="life-webguruz pb-5 pt-5 pt-xl-0 new-life-webguruz">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 career-img-change heading-main">
              <h1>
                Life <strong>@Webguruz</strong>
              </h1>
              <ServiceFaq
                accordionData={careerData}
                onItemClick={handleClick}
                openIndex={activeIndex}
              />
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <div
                className={`image-container ${isAnimating ? "zoom-effect" : ""}`}
              >
                <Image
                  src={
                    activeIndex !== null
                      ? careerData[activeIndex].image
                      : Life1
                  }
                  alt="Life@Webguruz"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careerlife;
