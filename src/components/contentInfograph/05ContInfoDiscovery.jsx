import Image from "next/image";
import Hubspot from "../../../public/images/graphmotionimg/smm-story-1.png";
import Chart from "../../../public/images/graphmotionimg/smm-story-2.png";
import Sales from "../../../public/images/graphmotionimg/smm-story-3.png";
import Speedometer from "../../../public/images/graphmotionimg/smm-story-4.png";
import Database from "../../../public/images/graphmotionimg/smm-story-5.png";
import Workflow from "../../../public/images/graphmotionimg/smm-story-6.png";
const services = [
  {
    img: Hubspot,
    title: "Boost",
    subtitle: "Engagement",
    alt: "HubSpot Lead Nurturing Icon",
  },
  {
    img: Chart,
    title: "Enhance",
    subtitle: "Brand Storytelling",
    alt: "HubSpot Persona Building Icon",
  },
  {
    img: Sales,
    title: "Simplify Complex",
    subtitle: "Ideas",
    alt: "HubSpot Analytics and Reporting Icon",
  },
  {
    img: Speedometer,
    title: "Improve",
    subtitle: "Retention",
    alt: "HubSpot Lead Scoring and Grading Icon",
  },
  {
    img: Database,
    title: "Increase",
    subtitle: "Social Shares",
    alt: "HubSpot Database Management Icon",
  },
  {
    img: Workflow,
    title: "Drive",
    subtitle: "Conversions",
    alt: "HubSpot Engagement Workflows Icon",
  },
 
];

const ContInfoDiscovery = () => {
  return (
    <div className="infographic-discovery pt-2 pt-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              What to <span>Expect?</span>
            </h2>
            <p>The Benefits of Our Infographics & Motion Graphics Services</p>
          </div>
          <div className="row Offer pt-3 pt-md-5 text-center">
            {services.map((service, index) => (
              <div className="col-md-4 col-sm-6 col-12" key={index}>
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

export default ContInfoDiscovery;
