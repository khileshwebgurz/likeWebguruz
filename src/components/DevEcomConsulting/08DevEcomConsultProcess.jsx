const processSteps = [
  {
    step: "Step 1",
    title: "Business Analysis",
    description:
      "Our process begins with an in-depth analysis of your business model, target customers, and specific goals. By understanding your unique challenges and opportunities, we lay the foundation for a tailored eCommerce strategy. This step involves examining your current operations, identifying pain points, and defining success metrics to ensure every decision is aligned with your business vision.",
  },
  {
    step: "Step 2",
    title: "Market Research",
    description:
      "To help you stay ahead of the competition, our experts conduct comprehensive market research. This includes analyzing competitor strategies, identifying emerging industry trends, and understanding customer preferences. Armed with these insights, we uncover growth opportunities that position your business for a competitive advantage in the ever-evolving eCommerce landscape.",
  },
  {
    step: "Step 3",
    title: "Strategy Formulation",
    description:
      "Using the insights gained from our analysis and research, we design a comprehensive and actionable eCommerce strategy. This plan outlines specific steps to achieve your goals, including marketing tactics, customer engagement approaches, and operational improvements. We ensure the strategy is flexible and adaptable, allowing for adjustments as your business evolves.",
  },
  {
    step: "Step 4",
    title: "Platform and Technology Selection",
    description:
      "Choosing the right technology is critical for long-term eCommerce success. Our team evaluates your business needs and recommends the most suitable platforms, tools, and integrations to support your operations. Whether it’s an eCommerce platform, payment gateway, or inventory management system, we ensure your tech stack is robust, scalable, and future-ready.",
  },
  {
    step: "Step 5",
    title: "Implementation",
    description:
      "Once the strategy and technology are finalized, we move to execution. Our team works diligently to integrate the selected technologies, optimize your website for performance and usability, and set up essential functionalities like analytics and marketing tools. Throughout the process, we focus on ensuring a seamless experience for both your team and customers.",
  },
  {
    step: "Step 6",
    title: "Ongoing Support & Optimization",
    description:
      "Success in eCommerce doesn’t stop at implementation. After launch, we provide continuous support to monitor performance, identify areas for improvement, and adapt to changing market conditions. From fine-tuning your website to optimizing marketing campaigns, we stay by your side to ensure sustained growth and a thriving eCommerce business.",
  },
];

const DevEcomConsultProcess = () => {
  return (
    <div className="Ecomprocess-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Our <span>eCommerce Consulting Process </span>
            </h2>
          </div>
          {processSteps.map((step, index) => (
            <div className="col-md-6 col-12 mb-4" key={index}>
              <div className="process-card">
                <span>{step.step}</span>
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

export default DevEcomConsultProcess;
