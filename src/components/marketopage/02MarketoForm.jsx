import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const MarketoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice marketo-consulting-form py-5"
        id="marketo-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                <strong>Achieve Marketing Excellence </strong> Like Never Before
              </h2>
              <p className="color-wt">
                Imagine a marketing ecosystem where every campaign is precisely
                targeted, every lead is meticulously nurtured, and every
                marketing dollar generates maximum return on investment. Our
                Marketo consulting services are designed to turn this vision
                into reality. We don&apos;t just implement software; we create
                comprehensive marketing solutions that align technology with
                your unique business goals. From seamless integrations to
                advanced automation workflows, we ensure your marketing efforts
                are intelligent, efficient, and ultimately, incredibly
                effective.
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

export default MarketoForm;
