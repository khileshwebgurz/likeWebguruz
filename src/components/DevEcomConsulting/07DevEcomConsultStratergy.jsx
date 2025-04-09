import React from "react";

const strategies = [
  {
    id: 1,
    title: "Data-Driven Strategy",
    description: [
      "Harness advanced analytics tools to uncover valuable customer behavior patterns, empowering your business to make informed decisions.",
      "Monitor key performance indicators (KPIs) to measure the effectiveness of your eCommerce strategies and identify areas for improvement.",
      "Utilize data to deliver tailored product recommendations, personalized promotions, and targeted marketing campaigns to enhance user experience.",
    ],
    borderClass: "",
  },
  {
    id: 2,
    title: "Conversion Optimization",
    description: [
      "Simplify navigation, optimize checkout processes, and eliminate barriers to ensure a seamless shopping experience.",
      "Utilize compelling product descriptions, high-quality images, and trust signals to instill confidence and encourage purchases.",
      "Analyze customer interactions to identify drop-off points and implement targeted strategies to keep users engaged and converting.",
    ],
    borderClass: "border-purple",
  },
  {
    id: 3,
    title: "Tech Integration",
    description: [
      "Integrate tools such as CRM, ERP, and inventory management systems for a cohesive and efficient operational workflow.",
      "Adopt automation solutions to streamline order processing, inventory tracking, and customer communication, saving time and resources.",
      "Implement scalable technologies that grow alongside your business, ensuring seamless operations during periods of high demand.",
    ],
    borderClass: "border-orange",
  },
  {
    id: 4,
    title: "Multi-Channel Strategy",
    description: [
      "Increase visibility and sales by listing products on popular platforms like Amazon, eBay, and Walmart.",
      "Leverage social media channels such as Instagram and Facebook to create shoppable posts and tap into wider audiences.",
      "Ensure consistency in pricing, branding, and customer support across all channels for a cohesive shopping experience.",
    ],
    borderClass: "border-green",
  },
  {
    id: 5,
    title: "Growth Roadmaps",
    description: [
      "Identify long-term objectives and break them down into actionable, measurable milestones to ensure steady progress.",
      "Regularly assess market trends, customer demands, and competition to uncover growth opportunities.",
      "Continuously evaluate performance against the roadmap to adjust strategies and maintain alignment with business goals.",
    ],
    borderClass: "border-yellow",
  },
];

const DevEcomConsultStratergy = () => {
  return (
    <div className="Ecombussines-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 heading-main text-left mb-4">
            <h2>
              <span>eCommerce Consulting </span> Services Strategies
            </h2>
            <p>
              Our consulting strategies are designed to boost your business
              performance at every level, ensuring sustained growth and success.
            </p>
          </div>
          {strategies.map((strategy) => (
            <div key={strategy.id} className="col-lg-6 col-12 mb-4">
              <div className={`bussines-card ${strategy.borderClass}`}>
                <h5>
                  <span className="count">{strategy.id}</span> {strategy.title}
                </h5>
                <ul className="bussines-list">
                  {strategy.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevEcomConsultStratergy;
