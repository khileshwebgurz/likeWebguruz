import React from "react";

const WgzBringBest = () => {
  const cards = [
    {
      title: "Skill Development",
      description: "We provide learning opportunities to help you grow professionally and personally.",
    },
    {
      title: "Career Growth",
      description: "Your success is our priority. We offer pathways to advancement and recognition.",
    },
    {
      title: "Work-Life Balance",
      description: "We believe in a healthy balance between work and life, ensuring your well-being is always supported.",
    },
  ];

  return (
    <div className="devTechnology-section life-webguruz-tech pt-5 pb-3 pb-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main mb-4">
            <h2>
              <span>We&apos;ll Bring </span> Out Your Best
            </h2>
            <p>
              At WebGuruz, we believe in nurturing talent and fostering a
              growth-oriented environment. We help you
              <br /> discover your full potential and create a path to success.
            </p>
          </div>
        </div>
        <div className="row technology-card new-life-best">
          {cards.map((card, index) => (
            <div className="col-md-4 col-12 mb-4 mb-md-0" key={index}>
              <div className="tech-one">
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WgzBringBest;
