import Image from "next/image";
import Drpl from "../../../public/images/hubspotmigrationimages/migrate-reasons.webp";

// Array to store Drupal solution data
const drupalSolutions = [
  {
    number: "1",
    title: "Unified Platform",
    description:
      "Manage marketing, sales, and customer service in one place.",
  },
  {
    number: "2",
    title: "Enhanced Reporting",
    description:
      "Access detailed analytics for better decision-making.",
  },
  {
    number: "3",
    title: "Seamless Integrations",
    description:
      "Connect HubSpot with your favorite tools and apps.",
  },
  {
    number: "4",
    title: "Improved User Experience",
    description:
      "User-friendly interface and features for all business types.",
  },
];

const MigrateBenefits = () => {
  return (
    <>
      <section className="drplscl1 py-5 position-relative">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                <span>Why Migrate </span> to HubSpot?
                </h2>
                <span className="mb-2 d-inline-block">
                Maximize your marketing and sales efficiency with HubSpot’s all-in-one platform.
                </span>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ddrpl">
                <Image
                  src={Drpl}
                  className="img-fluid"
                  alt="HubSpot Migration Partner"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cmsrgt right">
                {drupalSolutions.map((solution, index) => (
                  <div className="cmsrgtinr left" key={index}>
                    <div className="cmsnmbr">
                      <span className="nmbr">{solution.number}</span>
                    </div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MigrateBenefits;
