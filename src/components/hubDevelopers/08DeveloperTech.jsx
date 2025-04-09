import React from "react";

const DeveloperTech = () => {
  const techStack = [
    {
      title: "Frameworks",
      items: ["React.js", "Angular", "Vue.js", "Node.js", "Laravel", "Django"],
    },
    {
      title: "APIs",
      items: [
        "HubSpot API",
        "REST API",
        "GraphQL",
        "Zapier",
        "Salesforce API",
        "Google API",
      ],
    },
    {
      title: "Design & UI",
      items: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Bootstrap",
        "Tailwind CSS",
        "Material UI",
      ],
    },
  ];

  return (
    <div className="devTechnology-section pt-5 pb-3 pb-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main mb-4 text-center">
            <h2 className="mb-3">
              <span>Technology Stack</span> We Excel In
            </h2>
            <p>
              Our Hubspot application developers harness the power of
              cutting-edge technologies to craft robust, scalable, and
              future-ready solutions tailored to meet diverse business needs. By
              staying up-to-date with the latest advancements in development
              frameworks, APIs, and design tools, we ensure that every project
              we deliver is built on a foundation of innovation and efficiency.
              This approach not only enhances performance but also provides the
              flexibility needed to scale and adapt as your business grows and
              evolves in an ever-changing digital landscape.
            </p>
          </div>
        </div>

        <div className="row technology-card">
          {techStack.map((category, index) => (
            <div className="col-md-4 col-12 mb-4 mb-md-0" key={index}>
              <div className="tech-one">
                <h5>{category.title}</h5>
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
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

export default DeveloperTech;
