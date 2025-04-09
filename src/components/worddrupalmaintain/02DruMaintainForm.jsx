import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DruMaintainForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice wordpress-maintain-form  py-5"
        id="drupalmaintain-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Reliable Drupal Maintenance{" "}
                <strong> & Support for a Hassle-Free Website</strong>
              </h2>
              <p className="color-wt">
                A slow or outdated Drupal website can frustrate users and cost
                you business. With our Drupal maintenance services, you get
                faster load times, stronger security, and smoother
                functionality. Our team of certified Drupal experts proactively
                monitors your website, fixes issues before they escalate, and
                ensures compliance with the latest updates. Whether you&apos;re
                facing broken pages, plugin conflicts, or security threats, we
                resolve them swiftly. With 24/7 support and industry-best SLAs,
                your business can run uninterrupted. Call us today and let
                WebGuruz take care of your Drupal maintenance needs!
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

export default DruMaintainForm;
