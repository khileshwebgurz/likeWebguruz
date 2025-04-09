import Image from "next/image";
import servTeam from "../../../public/images/wiximages/wix-company.webp";

const teamQualities = [
  {
    description:
      "Wix holds a 4.8% share of the CMS market, which is greater than the 3.8% share it held in 2024. (Data as of Jan 28, 2025)",
  },
  {
    description:
      "Wix is the second most popular website-building platform with a 13% global market share as of January 23, 2025.",
  },
  {
    description:
      "Wix is the most popular in the United States, followed by India and Brazil.",
  },
];

const WixFactsFigures = () => {
  return (
    <section className="wix-facts-features py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center heading-content mb-4 mb-md-5">
            <h2>
              <span> Facts & Figures</span> on Wix
            </h2>
          </div>
        </div>
        <div className="row wix-facts-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr wix-img">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="Wix Content Management System"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="facts-content-card">
              {teamQualities.map((quality, index) => (
                <div key={index} className="facts-card-inner">
                  {/* <h4>{quality.title}</h4> */}
                  <p>{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WixFactsFigures;
