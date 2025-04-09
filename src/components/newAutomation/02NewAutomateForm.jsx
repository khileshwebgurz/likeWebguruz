import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const NewAutomateForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice new-automation-form py-5"
        id="new-automate-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
                <strong>Certified HubSpot Partner </strong>with Proven Expertise
              </h2>
              <p className="color-wt">
                As a HubSpot-certified partner, WebGuruz brings unparalleled
                expertise to your marketing automation needs. With over a decade
                of experience, we’ve helped businesses across industries
                leverage HubSpot’s tools to achieve their marketing and sales
                goals. From consultation to implementation and beyond, we ensure
                your automation strategy aligns perfectly with your growth
                objectives. Connect with us today to experience the WebGuruz
                difference.
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

export default NewAutomateForm;
