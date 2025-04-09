import React from "react";
import Image from "next/image";
import goal1 from "../../../public/images/mvpimages/mvpgoal1.webp";
import goal2 from "../../../public/images/mvpimages/mvpgoal2.webp";
import goal3 from "../../../public/images/mvpimages/mvpgoal3.webp";
import goal4 from "../../../public/images/mvpimages/mvpgoal4.webp";
import goal5 from "../../../public/images/mvpimages/mvpgoal5.webp";

const mvpServices = [
  {
    image: goal1,
    alt: "Single-Feature MVP Development",
    title: "Single-Feature MVP Development",
    description:
      "Testing a unique, defining feature of your product to gain user insight and validate functionality.",
  },
  {
    image: goal2,
    alt: "Pilot MVP Development",
    title: "Pilot MVP Development",
    description:
      "A trial version with essential features to gauge interest and gather feedback.",
  },
  {
    image: goal3,
    alt: "MVP Web Development",
    title: "MVP Web Development",
    description:
      "Full-scale MVPs tailored for web platforms, optimized for user engagement.",
  },
  {
    image: goal4,
    alt: "Clickable Prototype Development",
    title: "Clickable Prototype Development",
    description:
      "A visual, interactive model to showcase the look and feel of your product before development.",
  },
  {
    image: goal5,
    alt: "Full MVP Development",
    title: "Full MVP Development",
    description:
      "Complete MVP development, from design to launch, including support for scalability.",
  },
];

const MvpServiceCard = ({ image, alt, title, description }) => (
  <div className="col-12 col-sm-6 col-md-4 mb-4 pb-3">
    <div className="card-icon-sub text-center">
      <Image src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const MvpSmallStartups = () => {
  return (
    <section className="small-startups-main py-5">
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-5 heading-main">
            <h2><strong>We Help Small Startup Teams Do Big Things</strong></h2>
          </div>
          <div className="col-md-7">
            <span className="mb-3 fw-bolder d-inline-block">
              We believe in building products iteratively and incrementally. We
              value customer feedback over intuition and iterative design over a
              big elaborate design.
            </span>
            <p>
              To deliver products that have a lasting impact, we believe in
              forming a hypothesis for arriving at a solution.
            </p>
          </div>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-sm-4 col-xs-12">
            <div className="analyze-icon-content startup-box">
              <Image src={goal1} alt="" />
              <p>Analyze the market</p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="analyze-icon-content startup-box">
              <Image src={goal2} alt="" />
              <p>Define the idea</p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="analyze-icon-content startup-box">
              <Image src={goal3} alt="" />
              <p>Make a list of features</p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="analyze-icon-content startup-box">
              <Image src={goal4} alt="" />
              <p>Build and Launch</p>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="analyze-icon-content startup-box">
              <Image src={goal5} alt="" />
              <p>Examine the feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpSmallStartups;
