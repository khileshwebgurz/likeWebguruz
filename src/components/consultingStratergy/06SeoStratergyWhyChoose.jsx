import React from "react";
import Image from "next/image";
import seoteam1 from "../../../public/images/seoconsultingimg/consult-porf-1.webp";
import seoteam2 from "../../../public/images/seoconsultingimg/consult-porf-2.webp";
import seoteam3 from "../../../public/images/seoconsultingimg/consult-porf-3.webp";
import seoteam4 from "../../../public/images/seoconsultingimg/consult-porf-4.webp";

const SeoStratergyWhyChoose = () => {
  const seoFeatures = [
    {
      image: seoteam1,
      alt: "Experienced Team Icon",
      title: "Experienced Team",
      description:
        "Work with certified SEO experts with a track record of success. Our team stays ahead of industry trends, leveraging the latest tools and techniques to deliver exceptional results.",
    },
    {
      image: seoteam2,
      alt: "Holistic Approach Icon",
      title: "Holistic Approach",
      description:
        "We combine technical, on-page, and off-page strategies for complete optimization. By addressing every aspect of SEO, we ensure your website is fully prepared to compete.",
    },
    {
      image: seoteam3,
      alt: "Scalable Solutions Icon",
      title: "Scalable Solutions",
      description:
        "Our services grow with your business, ensuring consistent results. Whether you’re a startup or an established enterprise, we adapt our strategies to meet your evolving needs and goals.",
    },
    {
      image: seoteam4,
      alt: "Proven ROI Icon",
      title: "Proven ROI",
      description:
        "We deliver measurable outcomes that impact your bottom line. From increased traffic to higher conversion rates, our strategies are designed to generate tangible benefits for your business.",
    },
  ];

  return (
    <div className="Consultingchoose-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-4 mb-md-5">
            <h2>
              Why Choose Our SEO <span>Strategy & Consulting Services?</span>
            </h2>
          </div>
          {seoFeatures.map((feature, index) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0" key={index}>
              <div className="seo-choose-card">
                <div className="seo-img-team">
                  <Image src={feature.image} alt={feature.alt} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoStratergyWhyChoose;
