import Image from "next/image";
import reason1 from "../../../public/images/hubspotmigrationimages/migratesol4.webp";
import reason2 from "../../../public/images/hubspotmigrationimages/migratesol1.webp";
import reason3 from "../../../public/images/hubspotmigrationimages/migratesol2.webp";
import reason4 from "../../../public/images/hubspotmigrationimages/migratesol3.webp";
import Link from "next/link";
const MigrateReasons = () => {
  return (
    <>
      <section className="digital-marketing py-5 vector-digital-hubs migrate-reasons">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Why Choose WebGuruz for <span> HubSpot Migration?</span>
              </h2>
              <p>
                Partner with experts who prioritize your success. We offer
                unparalleled expertise, commitment, and results-driven
                solutions.
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center py-0 py-md-4">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Proven Expertise</h3>
                <p>
                  We have successfully handled migrations for businesses of all
                  sizes and across various industries, giving us deep insights
                  into the nuances and challenges of different platforms. Our
                  meticulous approach focuses on preserving data integrity,
                  maintaining workflows, and minimizing downtime.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason1} alt="Proven Expertise" />
              </div>
            </div>
          </div>
          <div className="row py-0 py-md-4">
            <div className="card-content reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Tailored Solutions</h3>
                <p>
                  We prioritize understanding your unique business processes,
                  goals, and challenges. We design custom migration strategies
                  that align with your objectives, ensuring that your data,
                  workflows, and integrations are seamlessly adapted to
                  HubSpot’s ecosystem. Whether you need to migrate CRM data,
                  marketing campaigns, or complex automation sequences, our
                  personalized approach guarantees a solution that fits your
                  organization perfectly.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason2} alt="Tailored Solutions" />
              </div>
            </div>
          </div>
          <div className="row py-0 py-md-4">
            <div className="card-content d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">End-to-End Support</h3>
                <p>
                  From the initial consultation to the final execution, we
                  provide comprehensive support at every stage of the migration
                  process. Our team is always on hand to answer questions,
                  troubleshoot issues, and offer guidance. Post-migration, we
                  continue to support your team with training, optimization, and
                  ongoing assistance to ensure that you’re fully leveraging
                  HubSpot’s capabilities.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason3} alt="End to End Support" />
              </div>
            </div>
          </div>
          <div className="row py-0 py-md-4">
            <div className="card-content reverse d-flex align-items-center">
              <div className="col-sm-6 col-xs-12 content">
                <h3 className="mb-3">Cost-Effective Solutions</h3>
                <p>
                  We believe in delivering top-notch HubSpot migration services
                  that are both effective and affordable. Our pricing structures
                  are designed to provide value without compromising on quality.
                  By leveraging our expertise and streamlined processes, we help
                  you save time and resources, ensuring a high return on
                  investment. Whether you’re a small business or a large
                  enterprise, we offer flexible solutions that fit your budget
                  and deliver lasting benefits.
                </p>
              </div>
              <div className="col-sm-6 col-xs-12 image">
                <Image src={reason4} alt="Cost-Effective Solution" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MigrateReasons;
