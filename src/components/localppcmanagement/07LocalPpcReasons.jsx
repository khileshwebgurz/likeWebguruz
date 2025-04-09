import React from "react";
import Image from "next/image";
import why1 from "../../../public/images/localppcimages/local-review-1.webp";
import why2 from "../../../public/images/localppcimages/local-review-2.webp";
import why3 from "../../../public/images/localppcimages/local-review-3.webp";
import why4 from "../../../public/images/localppcimages/local-review-4.webp";

const reasonsData = [
  {
    imgSrc: why1,
    title: "98% Client Retention Rate",
    alt:"Client Retention Rate Icon",
    description:
      "Our exceptional service and consistent results have earned us a 98% client retention rate. Businesses trust us for our commitment to driving measurable success and maintaining strong relationships. We prioritize your growth by delivering tailored strategies that ensure long-term satisfaction and impactful results.",
  },
  {
    imgSrc: why2,
    title: "24/7 Campaign Monitoring and Support",
    alt:"24/7 Campaign Monitoring Icon",
    description:
      "Stay ahead of the competition with our around-the-clock campaign monitoring and support. We proactively track performance metrics and make real-time adjustments to optimize results. Our dedicated team is always available to address your questions, ensuring seamless communication and a stress-free experience.",
  },
  {
    imgSrc: why3,
    title: "150% Average ROI Increase",
    alt:"ROI Increase Icon",
    description:
      "With our data-driven approach and expertise, our clients experience an average ROI increase of 150%. By maximizing ad spend efficiency and targeting high-intent customers, we help businesses achieve unparalleled growth and profitability. Our strategies are designed to turn every dollar into meaningful results.",
  },
  {
    imgSrc: why4,
    title: "10,000+ Keywords Optimized Monthly",
    alt:"Keywords Optimized Icon",
    description:
      "Our team meticulously researches, analyzes and optimizes over 10,000 keywords each month to drive targeted traffic and boost conversions. By focusing on high-performing and long-tail keywords, we position your business in front of the right audience, ensuring your campaigns deliver maximum value.",
  },
];

const LocalPpcReasons = () => {
  return (
    <div className="Whylocalppc-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Hire WebGuruz for <span> Local PPC Marketing? </span>
            </h2>
          </div>
          {reasonsData.map((reason, index) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>
              <div className="Whylocalppc-card">
                <Image src={reason.imgSrc} alt={reason.alt} />
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalPpcReasons;
