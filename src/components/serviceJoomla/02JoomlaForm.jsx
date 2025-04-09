import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const JoomlaForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice joomla-form py-5"
        id="joomla-dev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Build Scalable, Secure &{" "}
                <strong>High-Performance Joomla Websites</strong>
              </h2>
              <p className="color-wt">
                With WebGuruz Technologies, you get more than just a Joomla
                website- you gain a strategic digital asset that drives business
                growth. Our expert Joomla developers craft high-quality, secure,
                and scalable websites tailored to your needs. We optimize your
                site for performance, speed, and SEO, ensuring better rankings
                and visibility. Whether you want eCommerce integration, custom
                extensions, or seamless migration, we’ve got you covered. Get a
                website that engages users, converts visitors into customers,
                and aligns with your business goals. Call us today to get
                started on your Joomla project!
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoomlaForm;
