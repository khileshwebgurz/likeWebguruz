import React from "react";
import Image from "next/image";
import agency1 from "../../../public/images/amazeimages/amazon-expert-1.webp";
import agency2 from "../../../public/images/amazeimages/amazon-expert-2.webp";
import agency3 from "../../../public/images/amazeimages/amazon-expert-3.webp";
import agency4 from "../../../public/images/amazeimages/amazon-expert-4.webp";
import agency5 from "../../../public/images/amazeimages/amazon-expert-5.webp";
import agency6 from "../../../public/images/amazeimages/amazon-expert-6.webp";
import agency7 from "../../../public/images/amazeimages/amazon-expert-7.webp";
import agency8 from "../../../public/images/amazeimages/amazon-expert-8.webp";
import agency9 from "../../../public/images/amazeimages/amazon-expert-9.webp";

const agencyData = [
  {
    id: 1,
    image: agency1,
    title: "Certified Professionals",
    alt:"Certified Professionals Icon",
    description:
      "Work with experts certified in Amazon advertising who bring years of experience and in-depth knowledge to your campaigns. Their expertise ensures your campaigns are strategically planned and effectively executed.",
  },
  {
    id: 2,
    image: agency2,
    title: "24/7 Support",
    alt:"24/7 Support Icon",
    description:
      "Assistance whenever you need it to address your concerns promptly. Our dedicated support team is always available to provide solutions, updates, and guidance.",
  },
  {
    id: 3,
    image: agency3,
    title: "Cutting-Edge Tools",
    alt:"Tools Icon",
    description:
      "We use the latest tools for campaign optimization, ensuring your strategies remain ahead of the competition. Our advanced tech stack guarantees precision and efficiency.",
  },
  {
    id: 4,
    image: agency4,
    title: "Client-Centric Approach",
    alt:"Client-Centric Approach Icon",
    description:
      "Your success is our priority, and we tailor strategies to fit your goals. We take the time to understand your unique business needs, ensuring a customized and impactful approach.",
  },
  {
    id: 5,
    image: agency5,
    title: "Proven ROI",
    alt:"Proven ROI Icon",
    description:
      "Our campaigns consistently deliver measurable results, helping you maximize your advertising budget. From boosting sales to increasing brand visibility, we focus on outcomes that matter.",
  },
  {
    id: 6,
    image: agency6,
    title: "Scalable Services",
    alt:"Scalable Services Icon",
    description:
      "Whether you’re a startup or an established business, we adapt to your needs. Our scalable solutions grow with your business, ensuring sustained success over time.",
  },
  {
    id: 7,
    image: agency7,
    title: "Data-Driven Strategies",
    alt:"Strategies Icon",
    description:
      "Every decision is backed by analytics to ensure efficiency and success. By leveraging insights, we continually refine campaigns to improve performance and ROI.",
  },
  {
    id: 8,
    image: agency8,
    title: "Transparent Communication",
    alt:"Transparent Communication Icon",
    description:
      "Stay informed with regular updates and detailed reports that provide a clear picture of campaign performance. We value transparency and keep you in the loop every step of the way.",
  },
  {
    id: 9,
    image: agency9,
    title: "Global Expertise",
    alt:"Global Expertise Icon",
    description:
      "Our services cater to diverse industries across the globe, giving us the insights needed to navigate varied markets effectively. No matter where you operate, we have the expertise to support your growth.",
  },
];

const AmazonPpcWhyChoose = () => {
  return (
    <div className="Amazonagency-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2 className="mb-3">
              Your Preferred <br />
              <span>Amazon PPC Management Company</span>
            </h2>
            <p>
              When you choose WebGuruz, you’re not just hiring a service
              provider; you’re gaining a committed partner. Our team aligns with
              your business objectives to deliver personalized solutions that
              drive real results.
            </p>
          </div>
          {agencyData.map((agency) => (
            <div key={agency.id} className="col-md-4 col-12 mb-4">
              <div className="amamzon-agency-card">
                <Image src={agency.image} alt={agency.alt} />
                <h5>{agency.title}</h5>
                <p>{agency.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonPpcWhyChoose;
