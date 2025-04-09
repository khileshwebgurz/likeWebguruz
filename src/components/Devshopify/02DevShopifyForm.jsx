import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DevShopifyForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice shopify-development-form  py-5"
        id="shopifydev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Empower Your Business With{" "}
                <strong>Customized Shopify Solutions</strong>
              </h2>
              <p className="color-wt">
                Your business deserves more than just a cookie-cutter website.
                With WebGuruz, you gain a partner who understands the nuances of
                Shopify development. Our team delivers visually captivating,
                mobile-optimized, and conversion-focused Shopify stores that
                help you stand out in a crowded marketplace. Don’t wait to make
                your dream store a reality- contact us today and take the first
                step towards a thriving e-commerce business.
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

export default DevShopifyForm;
