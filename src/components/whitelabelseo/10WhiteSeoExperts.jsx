import wexpert from "../../../public/images/whiteseoimg/white-seo-expert.webp";
import Image from "next/image";

const WhiteSeoExperts = () => {
  const points = [
    "We’ve helped countless businesses improve their rankings and visibility.",
    "Our team stays up-to-date with the latest SEO strategies and Google algorithms.",
    "We handle every aspect of SEO, from on-page to technical optimization.",
    "We create SEO strategies tailored specifically to your business needs.",
    "Our clients consistently see improved organic traffic, higher rankings, and increased conversions.",
  ];

  return (
    <div className="webguruz-expert py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="expert-img">
              <Image src={wexpert} alt="White-Label SEO Company" />
            </div>
          </div>
          <div className="col-md-6 col-12 heading-main mb-4 mb-md-0">
            <div className="expert-Right">
              <h2 className="mb-3">We Are <span>Experts at SEO</span></h2>
              <p>
                With over 10 years in the SEO industry, we have the expertise
                and experience to help your business thrive. Our deep
                understanding of SEO best practices, algorithm updates, and
                digital marketing trends ensures that we can provide you with
                the best possible results. Here’s why we’re the experts:
              </p>
              <ul className="wexpert-list">
                {points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteSeoExperts;
