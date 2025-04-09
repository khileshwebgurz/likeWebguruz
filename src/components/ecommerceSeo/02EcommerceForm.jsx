import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const EcommerceForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommerce-seo-form  py-5"
        id="ecom-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                What Can You Achieve <strong>with eCommerce SEO?</strong>
              </h2>
              <p className="color-wt">
                With eCommerce SEO, you can enhance your online presence,
                attract high-intent shoppers, and maximize your revenue. By
                optimizing product pages, categories, and overall site
                architecture, our services ensure that your online store stands
                out from the competition. We don’t just focus on rankings- we
                focus on results that matter, like increased traffic, better
                conversion rates, and more sales.
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

export default EcommerceForm;
