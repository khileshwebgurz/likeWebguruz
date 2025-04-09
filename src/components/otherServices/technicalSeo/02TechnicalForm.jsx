import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const TechnicalForm = ({heading, subheading,paragraph}) => {
 

  return (
    <>
      <section className="ppcbannerservice py-5" id="tech-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
              {heading} <strong> {subheading}</strong>
              </h2>
              <p className="color-wt">
              {paragraph}
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalForm;
