import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const AppDevForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice app-dev-form hub-onboard-form py-5"
        id="hub-app-dev"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Achieve More with <strong>WebGuruz’s HubSpot Expertise</strong>
              </h2>
              <p className="color-wt">
              When you hire our HubSpot Application Developers, you gain access to a wide range of solutions, including custom CRM integrations, automation tools, and personalized dashboards. Our services ensure that your business achieves greater efficiency, improved data management, and exceptional customer experiences. Let us help you unlock the full potential of HubSpot for your organization
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

export default AppDevForm;
