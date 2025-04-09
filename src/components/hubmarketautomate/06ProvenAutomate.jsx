import Image from "next/image";
import servTeam from "../../../public/images/hubautomateimages/automate-process.webp";

const teamQualities = [
  {
    title: "Consultation",
    description:
      "Understanding your business goals and pain points to create a tailored strategy.",
  },
  {
    title: "Implementation",
    description:
      "Setting up HubSpot tools, integrations, and workflows based on your requirements.",
  },
  {
    title: "Optimization",
    description:
      "Fine-tuning processes and providing training for seamless adoption.",
  },
  {
    title: "Support & Growth",
    description:
      "Ongoing support to ensure your automation continues delivering value.",
  },
];

const ProvenAutomate = () => {
  return (
    <section className="teamservice proven-automate py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
            Our Proven Process for <span>HubSpot Automation</span>
            </h2>
            <span className="d-inline-block mb-4 mt-2">
            Convenient and Super-Efficient Steps to Your Automation Success
            </span>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="teamquality">
              {teamQualities.map((quality, index) => (
                <div key={index} className="teamqualityinr">
                  <h4>{quality.title}</h4>
                  <p>{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="HubSpot Automation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenAutomate;
