import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const JooMaintainForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice wordpress-maintain-form  py-5"
        id="joomlamain-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Keeping Your Joomla Website{" "}
                <strong> Secure, Fast, and Fully Functional</strong>
              </h2>
              <p className="color-wt">
                Is your Joomla website slowing down, experiencing frequent
                errors, or becoming outdated? These issues not only frustrate
                your visitors but also hurt your business reputation and bottom
                line. Our dedicated Joomla maintenance services will eliminate
                these problems, ensuring your website runs smoothly and
                efficiently. We&apos;ve helped numerous businesses rescue their
                struggling Joomla websites, turning them into high-performing,
                secure, and reliable digital assets.
              </p>
              <p className="color-wt">
                Don&apos;t let website issues hold your business back any longer- one
                call to WebGuruz Technologies can put your Joomla worries to
                rest and set your website on the path to peak performance.
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

export default JooMaintainForm;
