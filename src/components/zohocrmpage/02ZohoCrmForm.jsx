import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const ZohoCrmForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice zoho-crm-form  py-5"
        id="zohocrm-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Realize the Full Potential{" "}
                <strong> of Zoho CRM Plus for Your Business</strong>
              </h2>
              <p className="color-wt">
                A well-implemented Zoho CRM Plus can transform the way your
                business operates. Our expert consulting and implementation
                services provide you with a tailored CRM solution that enhances
                your sales pipeline, automates key processes, and improves
                collaboration across teams.
              </p>
              <p className="color-wt">
                With our deep expertise, we ensure your CRM is aligned with your
                business goals, helping you make data-driven decisions,
                strengthen customer relationships, and maximize ROI. Call us
                today to see how WebGuruz can revolutionize your business with
                Zoho CRM Plus!
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

export default ZohoCrmForm;
