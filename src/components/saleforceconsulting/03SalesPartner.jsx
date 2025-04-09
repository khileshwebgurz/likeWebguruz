import Image from "next/image";
import servTeam from "../../../public/images/salesforceconsultimg/sales-loogo.svg";

const SalesPartner = () => {
  return (
    <section className="salesforce-partner py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 heading-main mb-4 mb-lg-0">
            <h2>
              Your Growth Journey Starts with{" "}
              <span>Smart Salesforce Implementation</span>
            </h2>
            <p>
              Our comprehensive Salesforce consulting process is designed to
              help businesses at every stage of their growth journey. From
              initial assessment and planning to implementation, integration,
              and ongoing support, we ensure that your Salesforce platform
              evolves with your business needs. We don&apos;t just implement
              Salesforce- we create a foundation for sustainable business growth
              by streamlining processes, automating routine tasks, and providing
              valuable insights through customized reports and dashboards. With
              WebGuruz as your Salesforce partner, you&apos;ll have the tools and
              expertise needed to make informed decisions and stay ahead of your
              competition.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image
                src={servTeam}
                className="img-fluid"
                alt="Organic SEO Agency"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPartner;
