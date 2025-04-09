import Image from "next/image";
import optimized from "../../../public/images/crmmigrationimages/crm-process1.webp";
import socialmarketing from "../../../public/images/crmmigrationimages/crm-process2.webp";
import automation from "../../../public/images/crmmigrationimages/crm-process4.webp";
import paid from "../../../public/images/crmmigrationimages/crm-process5.webp";
import contentmarkt from "../../../public/images/crmmigrationimages/crm-process3.webp";
import Link from "next/link";
const HubCrmHelp = () => {
  return (
    <>
      <section className="digital-marketing hub-crm-help py-5 vector-digital">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                <span>HubSpot CRM Migration </span> Services We Offer
              </h2>
              <p>
                Comprehensive Services for a Complete CRM Transformation. Our
                offerings include:
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="card-content d-flex align-items-center ">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Data Migration & Cleanup</h3>
                <p>
                  At WebGuruz, we follow a meticulous process to cleanse and
                  organize your data before migration. This involves identifying
                  duplicate, outdated, or incomplete records and either updating
                  or removing them to maintain data integrity. We ensure that
                  customer profiles, contact details, sales history, and custom
                  fields are accurately mapped and transferred to HubSpot. The
                  result? A clean, structured database that empowers your team
                  to make data-driven decisions confidently.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={optimized}
                  alt="Data Migration & Cleanup"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center  py-5">
            <div className="card-content reverse d-flex align-items-center ">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Custom Workflows & Automation</h3>
                <p>
                  Our team designs and implements custom workflows within
                  HubSpot tailored to your unique business processes. Whether
                  it’s automating lead nurturing, follow-up sequences, or sales
                  pipeline management, we create solutions that reduce manual
                  effort and enhance consistency. These automated workflows not
                  only save time but also minimize errors and improve customer
                  experiences, allowing your team to focus on high-value
                  activities.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={socialmarketing}
                  alt="Custom Workflows & Automation"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row  py-5">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Third-Party Integrations</h3>
                <p>
                  From marketing automation software and ERP systems to
                  e-commerce platforms and accounting solutions, we handle
                  complex third-party integrations to create a unified,
                  connected ecosystem. Our integration solutions streamline data
                  flow, improve cross-functional collaboration, and provide a
                  holistic view of your operations, all within a single
                  platform. This connectivity enables real-time insights and
                  smoother workflows across your organization.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={contentmarkt}
                  alt="Third-Party Integration"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row   py-5">
            <div className="card-content reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">User Training & Onboarding</h3>
                <p>
                  Our experts provide in-depth, hands-on sessions covering
                  everything from HubSpot’s basic features to advanced
                  automation and reporting tools. By empowering your staff with
                  the knowledge and skills to navigate and leverage the
                  platform, we ensure a smooth transition and immediate
                  productivity gains. We also provide customized training
                  resources tailored to different roles within your organization
                  for maximum impact.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={automation}
                  alt="User Training & Onboarding"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="row  py-5">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Ongoing Support & Optimization</h3>
                <p>
                  We offer ongoing support and optimization services to help you
                  continually enhance your CRM’s performance. Our team monitors
                  system performance, suggests improvements, and fine-tunes
                  processes to ensure your CRM evolves with your business needs.
                  From troubleshooting technical issues to introducing new
                  features and updates, we provide proactive support that keeps
                  your HubSpot environment running smoothly and efficiently,
                  ensuring long-term success.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image
                  src={paid}
                  alt="Ongoing Support & Optimization"
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

export default HubCrmHelp;
