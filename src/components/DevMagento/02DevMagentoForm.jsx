import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DevMagentoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice magento-development-form py-5"
        id="magento-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Leverage Magento for <strong> Your Business Success</strong>
              </h2>
              <p className="color-wt">
                Ensure eCommerce success with our Magento solutions. With
                unmatched flexibility, robust features, and tailored
                customizations, the platform ensures seamless scalability for
                businesses of all sizes. When you partner with WebGuruz, you can
                get increased conversions, better customer engagement, powerful
                integrations, effortless scalability, reliable support, and
                rapid development. Call us today to transform your vision into
                reality!
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

export default DevMagentoForm;
