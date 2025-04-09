import Image from "next/image";
import servTeam from "/public/images/serviceImages/crm-tool.webp";

const teamQualities = [
  {
    title: "Workflow Automation",
    description:
      "Automate your business processes and workflows to save time and reduce errors.",
  },
  {
    title: "Lead Scoring",
    description:
      "HubSpot’s lead scoring system ensures you prioritize the most promising leads.",
  },
  {
    title: "Custom Reporting",
    description:
      "Create customized reports that give you insights into your business performance.",
  },
  {
    title: "Multi-Channel Integration",
    description:
      "Seamlessly integrate HubSpot with email, social media, and other communication platforms.",
  },
];

const CrmAutoProcess = () => {
  return (
    <section className="teamservice crm-automate-process py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
              Key Features of <br />
              <span>HubSpot CRM Automation Tools</span>
            </h2>
            <span className="d-inline-block mb-4 mt-2">
              HubSpot CRM automation comes with powerful features designed to
              help your business succeed:
            </span>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="HubSpot CRM Automation Tools"
              />
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

export default CrmAutoProcess;
