import Image from "next/image";
import Hubspot from "../../../public/images/hubspotconsultimages/Hubspot.svg";
import Chart from "../../../public/images/hubspotconsultimages/Chart.svg";
import Sales from "../../../public/images/hubspotconsultimages/Sales.svg";
import Speedometer from "../../../public/images/hubspotconsultimages/Speedometer.svg";
import Database from "../../../public/images/hubspotconsultimages/Database.svg";
import Workflow from "../../../public/images/hubspotconsultimages/Workflow.svg";
import Customers from "../../../public/images/hubspotconsultimages/Customers.svg";
import Sync from "../../../public/images/hubspotconsultimages/Sync.svg";

const services = [
  {
    img: Hubspot,
    title: "HubSpot Lead",
    subtitle: "Nurturing",
    alt: "HubSpot Lead Nurturing Icon",
  },
  {
    img: Chart,
    title: "HubSpot Persona",
    subtitle: "Building",
    alt: "HubSpot Persona Building Icon",
  },
  {
    img: Sales,
    title: "HubSpot Analytics and",
    subtitle: "Reporting",
    alt: "HubSpot Analytics and Reporting Icon",
  },
  {
    img: Speedometer,
    title: "HubSpot Lead Scoring",
    subtitle: "and Grading",
    alt: "HubSpot Lead Scoring and Grading Icon",
  },
  {
    img: Database,
    title: "HubSpot Database",
    subtitle: "Management",
    alt: "HubSpot Database Management Icon",
  },
  {
    img: Workflow,
    title: "HubSpot Engagement",
    subtitle: "Workflows",
    alt: "HubSpot Engagement Workflows Icon",
  },
  {
    img: Customers,
    title: "HubSpot Demand",
    subtitle: "Generation",
    alt: "HubSpot Demand Icon",
  },
  {
    img: Sync,
    title: "HubSpot Operations",
    subtitle: "And Utility Workflows",
    alt: "HubSpot Operations And Utility Workflows Icon",
  },
];

const ConsultServices = () => {
  return (
    <div className="servicesoffer pt-2 pt-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              Other HubSpot <span>Services We Offer</span>
            </h2>
          </div>
          <div className="row Offer pt-3 pt-md-5 text-center">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                <div className="offer-card">
                  <div className="icon-img">
                    <Image src={service.img} alt={service.alt} />
                  </div>
                  <div className="offer-card-text">
                    <h5>
                      {service.title} <br />
                      {service.subtitle}
                    </h5>
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

export default ConsultServices;
