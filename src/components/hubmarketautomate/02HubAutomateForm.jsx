import WebdevForm from "@/utils/formsHubspot/Webdeveform";
const HubAutomateForm = () => {
  return (
    <>
      <section
        className="scrfrm hub-ranking automate-form py-5"
        id="hubrank-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 content-left heading-main">
              <h2 className="text-white">
                <strong>Empower Your Business with </strong> Certified HubSpot
                Partner Services
              </h2>
              <p className="mt-3 mb-4 text-white">
                As a certified HubSpot partner, WebGuruz boasts a proven track
                record of delivering impactful automation services. With years
                of experience and a passionate team of certified experts, we
                craft solutions that drive measurable results. Our global
                clientele and high satisfaction rate speak volumes about our
                ability to deliver excellence. Let us be your trusted partner in
                automation and help you achieve operational brilliance.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HubAutomateForm;
