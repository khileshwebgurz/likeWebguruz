import process from "../../../public/images/crmmigrationimages/hubspot-img.webp";
import Image from "next/image";

const HubCrmKeyword = () => {
  return (
    <>
      <section className="process-main crm-keywords py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
              <h2>
                <span> HubSpot CRM Development </span> Services
              </h2>
              <span className="pt-0 pb-4 para">
                Beyond migration, WebGuruz specializes in HubSpot CRM
                Development to help businesses customize, optimize, and scale
                their CRM system. Whether you need custom modules, advanced
                automation, or third-party integrations, our expert developers
                tailor HubSpot to align perfectly with your unique business
                processes.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12 image text-center">
              <Image src={process} alt="HubSpot CRM development" />
            </div>
            <div className="col-sm-6 col-xs-12">
              <h3 className="crm-new-heading pt-md-0 pb-lg-2 pb-xl-3 pt-sm-4">
                Our HubSpot CRM Development Services Include:
              </h3>
              <div className="content crm-content">
                <ul>
                  <li>
                    <span className="number">1</span>
                    <h4>Custom Module Development</h4>
                    <p>
                      Extend HubSpot’s functionality with tailored modules
                      designed for your specific operational needs.
                    </p>
                  </li>
                  <li>
                    <span className="number">2</span>
                    <h4>Custom API & Third-Party Integrations</h4>
                    <p>
                      Connect HubSpot with your ERP, e-commerce, accounting, or
                      marketing platforms for a seamless experience.
                    </p>
                  </li>
                  <li>
                    <span className="number">3</span>
                    <h4>Advanced Workflow Automation</h4>
                    <p>
                      Automate complex business processes, from lead scoring to
                      personalized customer journeys.
                    </p>
                  </li>
                  <li>
                    <span className="number">4</span>
                    <h4>Sales & Marketing Optimization</h4>
                    <p>
                      Enhance your sales pipeline and marketing efforts with
                      AI-driven insights and automation.
                    </p>
                  </li>
                  <li>
                    <span className="number">5</span>
                    <h4>Custom Dashboard & Reporting Solutions</h4>
                    <p>
                      Get actionable insights with custom-built reports and
                      dashboards tailored to your KPIs.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 pt-3 text-center">
              <p>
                With WebGuruz’s HubSpot CRM Development expertise, you get a
                powerful, fully optimized CRM that drives efficiency,
                engagement, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubCrmKeyword;
