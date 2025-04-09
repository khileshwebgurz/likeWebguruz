import React from "react";

const ContentSeoWorking = () => {
  const steps = [
    {
      title: "1. Discovery & Research",
      description:
        "We learn about your business, audience, and goals to craft a customized content strategy.",
    },
    {
      title: "2. Planning & Ideation",
      description:
        "We develop a content calendar and brainstorm ideas aligned with your objectives.",
    },
    {
      title: "3. Content Creation",
      description:
        "Our writers create SEO-optimised, engaging, and unique content tailored to your audience.",
    },
    {
      title: "4. Review & Delivery",
      description:
        "We rigorously edit and refine each piece before delivering it to you, ready to publish.",
    },
  ];

  return (
    <div className="content-writing-work py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              How Do Our SEO <span>Content Writing Services Work?</span>
            </h2>
            <p>We follow a streamlined process to deliver exceptional results:</p>
          </div>
          {steps.map((step, index) => (
            <div key={index} className="col-md-3 col-12 mb-4">
              <div className="contert-writing-card">
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSeoWorking;
