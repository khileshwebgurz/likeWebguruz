const benefitsData = [
  {
    title: "Proven Track Record",
    description:
      "Our success stories and client testimonials speak volumes about our ability to deliver impactful content. Our proven record demonstrates that we consistently meet and exceed client expectations, cementing our reputation as industry leaders.",
  },
  {
    title: "Innovative Strategies",
    description:
      "We blend creativity with data-driven approaches to craft unique content strategies tailored to your business. By harnessing cutting-edge technologies and market insights, we ensure that our strategies remain ahead of the curve and deliver measurable success.",
  },
  {
    title: "Dedicated Support",
    description:
      "Our team is available to guide you at every step, ensuring your project stays on track and meets your goals. Our personalized approach means you always have a dedicated point of contact ready to address your queries and optimize your strategy as needed.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment. This commitment to affordability enables businesses of all sizes to access top-tier content marketing services without straining their budgets.",
  },
  {
    title: "Result-Driven Approach",
    description:
      "Every piece of content is designed to drive measurable results, from increased traffic to higher conversions. We meticulously track performance metrics and refine our strategies, ensuring that every campaign is aligned with your business goals and delivers tangible outcomes.",
  },
  {
    title: "Industry Expertise",
    description:
      "We have experience working with diverse industries, ensuring your content is both relevant and effective. Our wide-ranging expertise allows us to quickly adapt to various market dynamics and create content that resonates with your target audience.",
  },
];

const ContMarketConsult = () => {
  return (
    <div className="content-market-consult py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-5">
            <h2>
              Why Choose <span>WebGuruz?</span>
            </h2>
            <p>
              WebGuruz stands out by consistently pioneering tailored digital
              solutions that merge innovative technology with a personalized
              touch to address your unique business challenges.
            </p>
          </div>

          {benefitsData.map((benefit, index) => (
            <div className="col-md-4 col-12 mb-4" key={index}>
              <div className="store-one">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContMarketConsult;
