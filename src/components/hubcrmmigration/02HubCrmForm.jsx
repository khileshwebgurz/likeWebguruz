import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const HubCrmForm = () => {
  return (
    <>
      <section className="ppcbannerservice crm-form py-5" id="crmigration-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
              Achieve Unparalleled Business Success with{" "}
                <strong>HubSpot CRM Migration</strong>
              </h2>
              <p className="color-wt">
              At WebGuruz, we have helped hundreds of businesses worldwide enhance their CRM experience with seamless HubSpot integrations. Our track record of excellence, deep technical know-how, and client-centric approach make us your ideal partner. Connect with us today to experience a hassle-free migration journey tailored to your needs.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubCrmForm;
