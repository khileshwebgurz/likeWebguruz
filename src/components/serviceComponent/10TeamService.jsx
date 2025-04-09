import Image from "next/image";
import servTeam from "/public/images/serviceImages/Our-Team-is-Your-Team.webp";

const teamQualities = [
  {
    title: "Client-Centric Approach",
    description:
      "We put your needs first and work closely with you to understand your business objectives.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We stay up-to-date with the latest digital marketing trends and implement innovative strategies.",
  },
  {
    title: "Measurable Results",
    description:
      "We focus on delivering tangible results that drive your business growth.",
  },
  {
    title: "Strong Team Culture",
    description:
      "Our team is collaborative, dedicated, and passionate about what they do.",
  },
];

const TeamService = () => {
  return (
    <section className="teamservice py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
            More than <span>Just Numbers…</span>
            </h2>
            <span className="d-inline-block mb-4 mt-2">
            We are passionate about digital marketing and dedicated to helping our clients achieve their goals. 
              Here&apos;s what sets us apart:
            </span>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image src={servTeam} className="img-fluid" alt="Digital Marketing Agency" />
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default TeamService;
