import React from "react";
import Image from "next/image";
import Keys1 from "../../../public/images/amazeimages/amazon-key-1.webp";
import Keys2 from "../../../public/images/amazeimages/amazon-key-2.webp";
import Keys3 from "../../../public/images/amazeimages/amazon-key-3.webp";
import Keys4 from "../../../public/images/amazeimages/amazon-key-4.webp";

const processSteps = [
  {
    id: 1,
    image: Keys1,
    alt:"Target Audience Icon",
    description:
      "Understanding your business, objectives, and target audience.",
  },
  {
    id: 2,
    image: Keys2,
    alt:"Creating Campaigns Icon",
    description: "Creating tailored campaigns using data-driven insights.",
  },
  {
    id: 3,
    image: Keys3,
    alt:"Launching Campaigns Icon",
    description: "Launching campaigns and closely monitoring for performance.",
  },
  {
    id: 4,
    image: Keys4,
    alt:"Continuous Improvement Icon",
    description: "Continuous improvement and detailed performance reporting.",
  },
];

const AmazonPpcWorking = () => {
  return (
    <div className="Amazonprocess-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Amazon <span>PPC Management Process</span>
            </h2>
          </div>
          {processSteps.map((step) => (
            <div key={step.id} className="col-md-3 col-12 mb-4 mb-md-0">
              <div className="amazonprcess-icon">
                <Image src={step.image} alt={step.alt} />
                <h6>{step.description}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonPpcWorking;
