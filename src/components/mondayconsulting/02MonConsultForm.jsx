import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const MonConsultForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice monday-dot-consulting-form py-5"
        id="monday-consult-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                What Can You Achieve with Our{" "}
                <strong>Monday.com Consulting Services?</strong>
              </h2>
              <p className="color-wt">
                Working with WebGuruz for your Monday.com implementation means
                getting a tailored solution that addresses your specific
                business challenges. Our experts don&apos;t just set up the platform;
                they analyze your workflows, identify bottlenecks, and design
                custom solutions that make sense for your team. Clients who
                partner with us typically see productivity increases of 30-40%
                within the first three months of implementation. The platform
                becomes intuitive for your team, adoption rates soar, and
                suddenly, work that used to take days now takes hours. Your
                teams will collaborate better, have clearer visibility into
                projects, and make decisions based on real-time data.
              </p>
              <p className="color-wt">
                Don&apos;t waste any more time with makeshift solutions or
                overwhelming yourself trying to figure out Monday.com alone-
                call us today for a consultation that will transform how your
                business operates.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MonConsultForm;
