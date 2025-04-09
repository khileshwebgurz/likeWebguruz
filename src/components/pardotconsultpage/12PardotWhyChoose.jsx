import React from "react";

const PardotWhyChoose = () => {
  const services = [
    {
      title: "Accelerated Lead Generation",
      description:
        "Pardot supercharges your lead acquisition process by automating targeted marketing efforts and identifying high-potential prospects faster and more efficiently.",
    },
    {
      title: "Enhanced Marketing Efficiency",
      description:
        "Our Pardot consulting eliminates manual marketing tasks, allowing your team to focus on strategic initiatives while reducing operational overhead and increasing productivity.",
    },
    {
      title: "Improved Sales Alignment",
      description:
        "By creating a seamless communication bridge between marketing and sales teams, Pardot ensures consistent lead nurturing and more effective conversion strategies.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Transform raw marketing data into actionable insights that enable precise, informed strategic choices about your marketing and sales approaches.",
    },
    {
      title: "Scalable Marketing Processes",
      description:
        "Create flexible, automated marketing workflows that can easily adapt and grow alongside your business without requiring constant manual reconfiguration.",
    },
    {
      title: "Personalized Customer Experiences",
      description:
        "Develop intelligent, dynamic marketing communications that adapt in real time to individual customer behaviors, preferences, and engagement levels.",
    },
    {
      title: "Increased Marketing ROI",
      description:
        "Maximize the financial impact of your marketing investments by implementing sophisticated tracking, optimization, and performance measurement techniques.",
    },
    {
      title: "Competitive Market Positioning",
      description:
        "Leverage advanced marketing automation to differentiate your brand, respond more quickly to market changes, and stay ahead of competitors' marketing strategies.",
    },
  ];

  return (
    <div className="maintenaceservices pardot-why-choose py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              Why Invest in <span> Pardot Consulting?</span>
            </h2>
            <p>
              Transform your marketing from a cost center to a revenue
              generation powerhouse. Pardot Consulting delivers measurable,
              sustainable business growth.
            </p>
          </div>
        </div>
        <div className="row maintenace">
          {services.map((service, index) => (
            <div
              className="col-lg-3 col-md-4 col-12 mb-4"
              key={`service-${index}`}
            >
              <div className="services-box">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PardotWhyChoose;
