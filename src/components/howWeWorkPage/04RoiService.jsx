import Image from "next/image";

import abtesting from "../../../public/images/howworkimages/ROI-icon-3.webp";
import competitor from "../../../public/images/howworkimages/ROI-icon-img-1.webp";
import digitalmarketing from "../../../public/images/howworkimages/ROI-icon-img-4.webp";
import roi from "../../../public/images/howworkimages/ROI-icon-img-2.webp";

const services = [
  {
    src: competitor,
    title: "Dedicated Teams",
    description:
      "Our dedicated team of qualified and experienced experts can help deliver your projects successfully.",
    alt: "Competitor Analysis Icon",
  },
  {
    src: roi,
    title: "Long-Term Support",
    description:
      "Our commitment doesn’t end with delivery. We provide ongoing support, ensuring your project stays current and relevant.",
    alt: "ROI Icon",
  },
  {
    src: abtesting,
    title: "Optimized Performance",
    description:
      "We design solutions to perform at peak efficiency, ensuring your project runs smoothly even during high-traffic times.",
    alt: "A/B Testing Icon",
  },
  {
    src: digitalmarketing,
    title: "Cost-Effective Solutions",
    description:
      "Our transparent pricing and efficient processes mean you get high-quality work without stretching your budget.",
    alt: "Ad Creation & Optimization Icon",
  },
];

const RoiService = () => {
  return (
    <>
      <section className="roi-working py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <span>Development Process</span>
              <h2>
                <strong>ROI</strong> ( Return on investment )
              </h2>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-sm-3 col-xs-12 mb-4">
                <div className="roi-cards ">
                  <div className="roi-icon">
                    <Image src={service.src} alt={service.title} />
                  </div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoiService;
