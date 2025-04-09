import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SquareMaintainForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice wordpress-maintain-form  py-5"
        id="sqauremain-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Keep Your Squarespace{" "}
                <strong>Website Running Smoothly with Expert Support</strong>
              </h2>
              <p className="color-wt">
                Is your Squarespace website giving you headaches instead of
                helping your business? Many business owners struggle with
                keeping their websites updated, secure, and performing
                optimally. Without regular maintenance, your site can develop
                issues that frustrate visitors and hurt your brand image. Our
                Squarespace maintenance services address these problems before
                they impact your business. We&apos;ve helped hundreds of clients
                overcome technical challenges and transform their websites into
                powerful business tools.
              </p>
              <p className="color-wt">
                Don&apos;t waste another day with a website that doesn&apos;t work for
                you- call WebGuruz Technologies today and let us handle your
                Squarespace needs.
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

export default SquareMaintainForm;
