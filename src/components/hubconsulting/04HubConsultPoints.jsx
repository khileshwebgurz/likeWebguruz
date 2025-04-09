import Image from "next/image";
import hubconsult1 from "../../../public/images/hubspotconsultimages/hubconsult1.webp";
import hubconsult2 from "../../../public/images/hubspotconsultimages/hubconsult2.webp";
import hubconsult3 from "../../../public/images/hubspotconsultimages/hubconsult3.webp";
import hubconsult4 from "../../../public/images/hubspotconsultimages/hubconsult4.webp";
import hubconsult5 from "../../../public/images/hubspotconsultimages/hubconsult5.webp";
import hubconsult6 from "../../../public/images/hubspotconsultimages/hubconsult6.webp";
const HubConsultPoints = () => {
  return (
    <>
      <section className="digital-marketing consult-points py-5 vector-digital">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                <span>HubSpot Consulting Services </span> We Offer
              </h2>
            </div>
          </div>
          <div className="row py-5">
            <div className="card-content consult-cards d-flex align-items-center ">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">HubSpot Technical Consulting</h3>
                <p>
                  From troubleshooting integrations and customizing workflows to
                  configuring advanced features, our experts ensure your HubSpot
                  platform is optimized for peak performance. Whether you’re
                  facing issues with API connections, system synchronization, or
                  platform usability, we provide tailored solutions to improve
                  efficiency and scalability.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={hubconsult3}
                  alt="HubSpot Technical Consulting"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center  py-5">
            <div className="card-content consult-cards reverse d-flex align-items-center ">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">HubSpot Inbound Consulting</h3>
                <p>
                  Our specialists design and implement data-driven strategies,
                  including content creation, lead nurturing, and customer
                  journey mapping, to convert prospects into loyal customers. By
                  aligning your inbound marketing efforts with HubSpot’s
                  powerful tools, we ensure that your campaigns are not only
                  impactful but also measurable.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={hubconsult4}
                  alt="HubSpot Inbound Consulting"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row  py-5">
            <div className="card-content consult-cards d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">HubSpot Sales Consulting</h3>
                <p>
                  From implementing automation to customizing your sales
                  pipeline, we help you leverage HubSpot’s tools to track,
                  analyze, and close deals more effectively. Whether you need
                  assistance with lead scoring, reporting, or sales enablement,
                  our HubSpot consulting services provide actionable insights
                  and solutions that align with your unique business needs.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={hubconsult1}
                  alt="HubSpot Sales Consulting"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row   py-5">
            <div className="card-content consult-cards reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Customer Training Consulting</h3>
                <p>
                  We provide hands-on training sessions tailored to your
                  business, ensuring that your employees are well-equipped to
                  use HubSpot’s features effectively. From navigating the
                  dashboard to mastering automation workflows, we simplify
                  complex concepts and instill confidence in your team.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={hubconsult5}
                  alt="Customer Training Consulting"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row  py-5">
            <div className="card-content consult-cards d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Migration Services Consulting</h3>
                <p>
                  We handle everything from data extraction and cleansing to
                  mapping and importing, minimizing downtime and preventing data
                  loss. Whether you’re transitioning from another CRM or
                  consolidating systems, we ensure that your data is structured
                  and ready for HubSpot.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={hubconsult6}
                  alt="Migration Services Consulting"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="card-content consult-cards reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">HubSpot Audit Services</h3>
                <p>
                  Our team conducts a thorough analysis of your current setup,
                  identifying gaps, inefficiencies, and missed opportunities.
                  From reviewing workflows and data organization to evaluating
                  the effectiveness of your marketing and sales processes, we
                  provide actionable recommendations to enhance performance.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={hubconsult2}
                  alt="HubSpot Audit Services"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubConsultPoints;
