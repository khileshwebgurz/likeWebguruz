import React from "react";
import maint from "../../../public/images/webflowwimages/webflow-reason.webp";
import client1 from "../../../public/images/webflowwimages/flow-maintain-1.webp";
import client2 from "../../../public/images/webflowwimages/flow-maintain-2.webp";
import client3 from "../../../public/images/webflowwimages/flow-maintain-3.webp";
import client4 from "../../../public/images/webflowwimages/flow-maintain-4.webp";
import client5 from "../../../public/images/webflowwimages/flow-maintain-5.webp";
import client6 from "../../../public/images/webflowwimages/flow-maintain-6.webp";
import Image from "next/image";

const benefitsData = [
  {
    image: client1,
    title: "Code-Free Yet Highly Customizable",
    alt: "Security Icon",
    description:
      "Webflow’s visual editor enables users to build complex layouts without writing code. However, for businesses needing advanced customization, Webflow supports custom HTML, CSS, and JavaScript, offering the best of both worlds.",
  },
  {
    image: client2,
    title: "Faster Development & Deployment",
    alt: "Rocket Icon",
    description:
      "Unlike traditional web development, where projects can take months, Webflow accelerates the design-to-development process. With its drag-and-drop builder and reusable components, businesses can launch fully functional websites in weeks, not months.",
  },
  {
    image: client3,
    title: "Scalable & Future-Proof Solution",
    alt: "Think Icon",
    description:
      "Webflow supports businesses at all growth stages, from startups to large enterprises. It offers scalability, allowing seamless integration with third-party tools, automation platforms, and marketing systems to enhance business operations.",
  },
  {
    image: client4,
    title: "Robust Security & Automatic Updates",
    alt: "Security Icon",
    description:
      "Webflow provides enterprise-level security with SSL encryption, regular backups, and automatic software updates. Businesses don’t have to worry about security patches or maintenance, as Webflow continuously improves its infrastructure.",
  },
  {
    image: client5,
    title: "Advanced Interactions & Animations",
    alt: "PC Icon",
    description:
      "Webflow makes it easy to create stunning, interactive experiences with built-in animations, scroll effects, and micro-interactions. This enables brands to engage visitors with visually appealing elements that enhance user experience.",
  },
  {
    image: client6,
    title: "Cost-Effective & Maintenance-Free",
    alt: "Setting Icon",
    description:
      "Unlike traditional development, Webflow eliminates the need for separate hosting, security, and plugin maintenance. Its all-in-one pricing model ensures businesses save costs while getting a high-quality, professionally designed website.",
  },
];

const WebflowBenefits = () => {
  return (
    <div className="webflow-benefits-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 heading-main">
            <h2 className="mb-3">
              Reasons to Choose Webflow Development{" "}
              <span>Platform for Your Website </span>
            </h2>
            <p className="mb-5">
              Webflow offers a powerful and modern approach to web development,
              giving businesses complete control over design, performance, and
              scalability- all without the complexities of traditional coding.
            </p>
            <Image src={maint} alt="Services Icon" />
          </div>
          <div className="col-lg-7 col-12 mt-5 mt-lg-0">
            <div className="row chooseing">
              {benefitsData.map((benefit, index) => (
                <div className="col-lg-6 col-12 mb-4" key={index}>
                  <div className="feature-text left-icon">
                    <div className="feature-icon">
                      <Image src={benefit.image} alt={benefit.alt} />
                    </div>
                    <div className="feature-info">
                      <h4>
                        <strong>{benefit.title}</strong>
                      </h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebflowBenefits;
