import React from "react";
import Image from "next/image";
import add1 from "../../../public/images/localppcimages/local-ppc-geo-1.webp";
import add2 from "../../../public/images/localppcimages/local-ppc-geo-2.webp";
import add3 from "../../../public/images/localppcimages/local-ppc-geo-3.webp";
import add4 from "../../../public/images/localppcimages/local-ppc-geo-4.webp";

const LocalPpcServices = () => {
  const services = [
    {
      image: add1,
      title: "Geo-Targeted Campaigns",
      alt:"Geo-Targeted Campaigns Icon",
      description:
        "We focus on pinpointing specific geographic areas to connect with customers who are most likely to engage with your business. Whether targeting neighborhoods, cities, or regions, we ensure your ads appear to the right audience at the right time. By leveraging location-based targeting, we not only enhance the relevancy of your ads but also minimize wasted spend, ensuring every dollar is spent effectively.",
    },
    {
      image: add2,
      title: "A/B Testing for Ads",
      alt:"A/B Testing for Ads Icon",
      description:
        "Find out what works best with your audience by testing different ad creatives, headlines, calls-to-action, and formats. Our A/B testing process involves analyzing ad variations to identify the most effective combinations for maximizing click-through and conversion rates. This iterative process helps us refine your campaigns for optimal performance.",
    },
    {
      image: add3,
      title: "Budget Optimization",
      alt:"Budget Optimization Icon",
      description:
        "Get the most out of your ad budget with precise allocation strategies tailored to your campaign’s objectives. We continuously monitor performance metrics to identify opportunities for reallocation, ensuring that high-performing campaigns receive the necessary resources. Our proactive approach guarantees that your budget is invested where it matters most, delivering a higher return on investment.",
    },
    {
      image: add4,
      title: "Conversion Tracking and Analytics",
      alt:"Tracking and Analytics Icon",
      description:
        "Measure what matters with our advanced tracking tools and analytics. We set up comprehensive tracking mechanisms to monitor key metrics like click-through rates, conversion rates, and cost-per-conversion. This data-driven approach allows us to identify trends, uncover insights, and make informed decisions to enhance your campaign’s effectiveness continuously.",
    },
  ];

  return (
    <div className="Welocalppc-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Our Local <span>PPC Marketing Strategies</span>
            </h2>
            <p>
              We rely on data-driven strategies and industry best practices to
              ensure every campaign drives measurable results. From precise
              targeting to continuous optimization, our Local PPC Marketing
              Strategies are designed to meet your unique needs. Here’s what we
              offer:
            </p>
          </div>
          {services.map((service, index) => (
            <div className="col-md-6 col-12 mb-4" key={index}>
              <div className="we-do-card">
                <Image src={service.image} alt={service.alt} />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalPpcServices;
