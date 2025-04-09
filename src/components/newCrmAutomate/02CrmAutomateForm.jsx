import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const CrmAutomateForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice crm-automate-form hub-onboard-form py-5"
        id="crm-auto-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Streamline Processes, Enhance{" "}
                <strong>Customer Relationships, & Boost Sales</strong>
              </h2>
              <p className="color-wt">
                HubSpot CRM Automation simplifies complex processes, freeing up
                valuable time for your team to focus on what matters most-
                growing your business. Say goodbye to manual tasks and hello to
                a smoother, more effective way to nurture leads, track customer
                interactions, and boost conversions. With HubSpot, you&apos;ll
                achieve more with less effort. Don’t wait- empower your business
                with HubSpot CRM automation today!
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

export default CrmAutomateForm;
