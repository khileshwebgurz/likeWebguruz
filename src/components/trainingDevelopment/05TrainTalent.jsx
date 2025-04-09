import Image from "next/image";
import servTeam from "../../../public/images/traningdevimg/custom-train.svg";

const teamQualities = [
  {
    title: "Customized Learning Pathways",
    description:
      "Tailored training programs that align precisely with your organizational goals. We create personalized learning experiences that address specific skill gaps and potential areas of improvement.",
  },
  {
    title: "Digital Skill Enhancement",
    description:
      "Comprehensive digital marketing and technical skill development programs, with a special focus on Marketo and emerging technologies.",
  },
  {
    title: "Leadership Development",
    description:
      "Transformative programs designed to nurture future leaders, improve management skills, and create a robust leadership pipeline within your organization.",
  },
];

const TrainTalent = () => {
  return (
    <section className="teamservice training-development-processes py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content mb-4">
            <h2>
              <span>Our Employee Training </span> & Development Services
            </h2>
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
                alt="HubSpot CRM Automation Tools"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainTalent;
