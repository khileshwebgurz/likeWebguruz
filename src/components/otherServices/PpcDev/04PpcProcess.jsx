const steps = [
  {
    title: "Ad Preparation & Brainstorming",
    description:
      "We kick off the process by brainstorming ideas and preparing compelling ad content that captures attention.",
    step: "Step 1",
  },
  {
    title: "Planning & Researching",
    description:
      "In-depth research allows us to target the right audience and select the best keywords for your campaigns.",
    step: "Step 2",
  },
  {
    title: "A/B Testing",
    description:
      "Rigorous testing helps us fine-tune ads to maximize engagement and conversions.",
    step: "Step 3",
  },
  {
    title: "Implementation & Execution",
    description:
      "We execute campaigns with precision, ensuring all components are aligned for optimal performance.",
    step: "Step 4",
  },
];

const PpcProcess = () => {
  return (
    <>
      <section className="processppc py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2 className="color-wt">Our Paid Ads Process</h2>
              <span className="color-wt">
              Managing your PPC campaigns is a systematic process that combines creativity with analytics.
              </span>
            </div>
          </div>
          <div className="row process-card-main">
            {steps.map((step, index) => (
              <div key={index} className="col-sm-3 col-xs-12">
                <div className="card-process">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="step1">{step.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcProcess;
