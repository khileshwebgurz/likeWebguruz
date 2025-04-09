import Image from "next/image";
import drplleft from "../../../public/images/hubautomateimages/hubvertical.webp";

// Array to store Drupal services data
const drupalServices = [
  {
    title: "Marketing Automation",
    description:
      "Streamline marketing campaigns with tailored workflows, automated email marketing, and seamless lead management to improve engagement and ROI.",
  },
  {
    title: "Lead Nurturing Automation",
    description:
      "Convert leads into loyal customers with personalized follow-ups, automated scoring, and targeted messaging.",
  },
  {
    title: "Sales Automation",
    description:
      "Empower your sales team with automated follow-ups, deal tracking, and CRM updates, ensuring no opportunity slips through the cracks.",
  },
  {
    title: "Reporting & Analytics Automation",
    description:
      "Get accurate, real-time insights with automated dashboards, reports, and performance tracking to make data-driven decisions.",
  },
  {
    title: "Customer Service Automation",
    description:
      "Deliver exceptional support by automating ticket management, chatbot interactions, and feedback collection for faster resolutions.",
  },
  {
    title: "Programmable Automation",
    description:
      "Customize your automation with advanced features like triggers, conditional logic, and integrations for tailored solutions.",
  },
  {
    title: "Workflow Automation",
    description:
      "Simplify complex processes by automating routine tasks, approvals, and notifications, creating a more efficient workplace.",
  },
  {
    title: "Data Quality Automation",
    description:
      "Ensure clean and accurate data with automated deduplication, enrichment, and validation processes.",
  },
];

const HubAutomateGrowth = () => {
  return (
    <>
      <section className="dvlpsrvc automate-growth py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="lftbg"></div>
              <div className="heading-main">
                <h2 className="text-white pb-4">
                  Growth-Oriented HubSpot <br />
                  <strong>Automation Services</strong>
                </h2>
                <div className="drplimg">
                  <Image
                    src={drplleft}
                    className="img-fluid"
                    alt="HubSpot Automation Solutions"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="drplcmsct">
                {drupalServices.map((service, index) => (
                  <div className={`drplcmsctinnr dr${index + 1}`} key={index}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
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

export default HubAutomateGrowth;
