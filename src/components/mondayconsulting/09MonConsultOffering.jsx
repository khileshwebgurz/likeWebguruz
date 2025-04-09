import React from "react";
import ppc1 from "../../../public/images/EcommercPPCimg/ecom-certifies-1.webp";
import ppc2 from "../../../public/images/mondayconsimages/con-local-1.png";
import ppc3 from "../../../public/images/EcommercPPCimg/ecom-certifies-3.webp";
import ppc4 from "../../../public/images/mondayconsimages/con-local-2.png";
import Image from "next/image";

const reasonsData = [
  {
    image: ppc1,
    title: "Certified Monday.com Experts",
    alt: "Certified Experts Icon",
    description:
      "Our team includes certified Monday.com professionals with years of experience implementing complex solutions across various industries.",
  },
  {
    image: ppc2,
    title: "Local Support & Understanding",
    alt: "Transparent Reporting Icon",
    description:
      "As an Indian company, we understand the unique challenges and opportunities in the Indian business landscape, providing culturally relevant solutions.",
  },
  {
    image: ppc3,
    title: "Result-Oriented Approach",
    alt: "Data-Driven Approach Icon",
    description:
      "We focus on delivering measurable business outcomes, not just technical implementations, ensuring you see real ROI from your Monday.com investment.",
  },
  {
    image: ppc4,
    title: "Long-term Partnership",
    alt: "Proven Results Icon",
    description:
      "We view our clients as long-term partners, providing ongoing support, training, and optimization to ensure continued success with Monday.com.",
  },
];

const MonConsultOffering = () => {
  return (
    <div className="monday-consult-offering py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Choose WebGuruz for <span> Monday.com Consulting? </span>
            </h2>
            <p>
              As India&apos;s premier Monday.com consulting partner, we bring
              unmatched expertise in implementing, customizing, and optimizing
              the platform for businesses of all sizes.
            </p>
          </div>
        </div>
        <div className="row whychooseppc-row">
          {reasonsData.map((reason, index) => (
            <div key={index} className="col-md-6 col-12 mb-4">
              <div className="whyppc-card">
                <div className="ppc-icon">
                  <Image src={reason.image} alt={reason.alt} />
                </div>
                <h5>{reason.title}</h5>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonConsultOffering;
