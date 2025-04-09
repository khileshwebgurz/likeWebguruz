import Image from "next/image";
import higher from "../../../public/images/hubspotconsultimages/hubmarket3.webp";
import HigherTwo from "../../../public/images/hubspotconsultimages/hubmarket1.webp";
import HigherThree from "../../../public/images/hubspotconsultimages/hubmarket2.webp";
import HigherFour from "../../../public/images/hubspotconsultimages/hubmarket4.webp";

const hubspotBenefits = [
  {
    img: HigherThree,
    title: "Marketing Hub",
    description: "Enhance your marketing efforts with data-driven strategies.",
    alt:"Marketing Hub Icon",
  },
  {
    img: HigherTwo,
    title: "Service Hub",
    description:
      "Deliver exceptional customer experiences with advanced service tools.",
      alt:"Service Hub Icon",
  },
  {
    img: higher,
    title: "Sales Hub",
    description: "Boost sales efficiency with tailored tools and workflows.",
    alt:"Sales Hub Icon",
  },
  {
    img: HigherFour,
    title: "Commerce Hub",
    description: "Simplify your e-commerce processes with expert assistance.",
    alt:"Commerce Hub Icon",
  },
];

const HubspotBenifit = () => {
  return (
    <div className="benifit-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-0 mb-md-4">
            <h2>
              We Are <span>Also Experts At</span>
            </h2>
            <p>
              From setup to strategy, our team helps you leverage the full
              capabilities of each HubSpot Hub for measurable growth.
            </p>
          </div>

          <div className="row benifit-card">
            {hubspotBenefits.map((benefit, index) => (
              <div
                className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0"
                key={index}
              >
                <div className="card-1">
                  <Image src={benefit.img} alt={benefit.alt} />
                  <div className="card-text">
                    <h6>{benefit.title}</h6>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubspotBenifit;
