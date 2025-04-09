import React from "react";
import Image from "next/image";
import Targetg from "../../../public/images/Seo-PackageImages/Target-g.svg";
import Focus from "../../../public/images/Seo-PackageImages/focus.svg";
import workflow from "../../../public/images/Seo-PackageImages/workflow.svg";
import Dolar from "../../../public/images/Seo-PackageImages/dolar.svg";
import Strategy from "../../../public/images/Seo-PackageImages/Cstrategy.svg";
import Roi from "../../../public/images/Seo-PackageImages/roi.svg";

const seoBenefits = [
  {
    img: Targetg,
    alt: "Business Size and Goals Icon",
    title: "Tailored to Business Size and Goals",
    description:
      "From local SEO for small businesses to global SEO strategies, we customize our packages to match the scale and objectives of your business, ensuring relevance and value at every step.",
  },
  {
    img: Focus,
    alt: "Focused on Long-Term Results Icon",
    title: "Focused on Long-Term Results",
    description:
      "We prioritize sustainable growth over quick fixes, using ethical SEO practices that protect your rankings and keep your website resilient against algorithm changes.",
  },
  {
    img: workflow,
    alt: "Transparent Workflow Icon",
    title: "Transparent Workflow",
    description:
      "You receive regular updates, monthly performance reports, and a dedicated account manager who ensures smooth communication and addresses all your questions.",
  },
  {
    img: Dolar,
    alt: "Affordable and Scalable Icon",
    title: "Affordable and Scalable",
    description:
      "Our packages are designed to offer flexibility and affordability, providing entry-level options and advanced strategies. As your business grows, so can your SEO plan, ensuring seamless scalability.",
  },
  {
    img: Strategy,
    alt: "Comprehensive Strategy Icon",
    title: "Comprehensive Strategy",
    description:
      "Our packages include everything from keyword research and technical SEO to link building and content marketing, covering all bases for a complete SEO solution.",
  },
  {
    img: Roi,
    alt: "ROI Icon",
    title: "Proven ROI",
    description:
      "With a focus on metrics that matter- organic traffic, engagement, and conversions- our SEO packages offer results you can measure and trust to positively impact your bottom line.",
  },
];

const SeoWhyChoose = () => {
  return (
    <div className="why-choose py-5 inner-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-main text-center">
            <h2>
              <span>Why Our SEO Packages Are </span> Perfect for Businesses?
            </h2>
          </div>
        </div>
        <div className="row choose-row pt-5">
          {seoBenefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="row mb-3">
                <div className="col-sm-2">
                  <Image src={benefit.img} alt={benefit.alt} />
                </div>
                <div className="col-sm-10">
                  <h5 className="blue">{benefit.title}</h5>
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoWhyChoose;
