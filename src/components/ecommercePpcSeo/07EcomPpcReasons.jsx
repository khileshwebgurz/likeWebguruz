import React from "react";
import ppc1 from "../../../public/images/EcommercPPCimg/ecom-certifies-1.webp";
import ppc2 from "../../../public/images/EcommercPPCimg/ecom-certifies-2.webp";
import ppc3 from "../../../public/images/EcommercPPCimg/ecom-certifies-3.webp";
import ppc4 from "../../../public/images/EcommercPPCimg/ecom-certifies-4.webp";
import ppc5 from "../../../public/images/EcommercPPCimg/ecom-certifies-5.webp";
import ppc6 from "../../../public/images/EcommercPPCimg/ecom-certifies-6.webp";
import Image from "next/image";

const reasonsData = [
  {
    image: ppc1,
    title: "Certified Experts",
    alt:"Certified Experts Icon",
    description:
      "Our team consists of highly skilled and certified PPC professionals who bring a wealth of knowledge and experience to the table. They stay updated with the latest industry trends and best practices, ensuring your campaigns are always optimized for success.",
  },
  {
    image: ppc2,
    title: "Transparent Reporting",
    alt:"Transparent Reporting Icon",
    description:
      "We value your trust and keep you in the loop at every stage. Our detailed reports provide a clear breakdown of your campaign’s performance, helping you see the direct impact of your investment.",
  },
  {
    image: ppc3,
    title: "Data-Driven Approach",
    alt:"Data-Driven Approach Icon",
    description:
      "We believe in making informed decisions. Our team uses advanced analytics and performance metrics to guide every step of your PPC campaign. By relying on real data, we ensure your advertising dollars are spent effectively.",
  },
  {
    image: ppc4,
    title: "Proven Results",
    alt:"Proven Results Icon",
    description:
      "Over the years, we’ve helped numerous clients achieve their goals with measurable success. From increased traffic to higher sales, our track record speaks for itself, showcasing our ability to deliver on promises.",
  },
  {
    image: ppc5,
    title: "Customized Strategies",
    alt:"Customized Strategies Icon",
    description:
      "No two businesses are the same, and neither should their PPC campaigns be. We develop tailored strategies that align with your specific goals and target audience, ensuring your ads resonate with potential customers.",
  },
  {
    image: ppc6,
    title: "Dedicated Support",
    alt:"Dedicated Support Icon",
    description:
      "We’re more than just a service provider; we’re your partner in growth. Our team is always available to answer questions, provide guidance, and ensure your campaigns run smoothly, giving you peace of mind.",
  },
];

const EcomPpcReasons = () => {
  return (
    <div className="Whychooseppc py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why <span> WebGuruz? </span>
            </h2>
            <p>
              With years of experience and a team of certified professionals,
              our eCommerce PPC Company delivers results you can count on. Our commitment to
              quality and customer satisfaction sets us apart.
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

export default EcomPpcReasons;
