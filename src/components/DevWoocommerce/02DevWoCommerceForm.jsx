import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DevWoCommerceForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice woocommerce-development-form py-5"
        id="woocomm-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Transform Your Online Store with{" "}
                <strong> Expert WooCommerce Development Services</strong>
              </h2>
              <p className="color-wt">
                Leverage the power of WooCommerce to create an eCommerce store
                that not only attracts customers but keeps them coming back for
                more. Our team ensures seamless functionality, engaging designs,
                and advanced features to help you dominate your market. Let’s
                turn your vision into reality- contact us today to discuss your
                WooCommerce development project!
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

export default DevWoCommerceForm;
