import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const EcomPpcForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommerce-ppc-form py-5"
        id="ecome-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                <strong>Take Your eCommerce Store </strong> to the Next Level
              </h2>
              <p className="color-wt">
                Achieve unparalleled online growth with our top-ranked SEO
                Strategy & Consulting Services. We design data-driven strategies
                tailored to your business, ensuring your website ranks higher,
                attracts more visitors, and drives meaningful results.
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

export default EcomPpcForm;
