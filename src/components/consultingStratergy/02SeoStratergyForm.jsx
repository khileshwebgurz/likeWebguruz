import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SeoStratergyForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice seo-stratergy-form py-5"
        id="consult-stratergy-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                #1 Ranked SEO{" "}
                <strong>Strategy & Consulting Services Company</strong>
              </h2>
              <p className="color-wt">
                Achieve unparalleled online growth with our top-ranked SEO
                Strategy & Consulting Services. We design data-driven strategies
                tailored to your business, ensuring your website ranks higher,
                attracts more visitors, and drives meaningful results.
              </p>
              <ul>
                <li>10+ years of proven SEO excellence.</li>
                <li>Unique strategies tailored to your business type.</li>
                <li>Trackable performance metrics.</li>
                <li>Comprehensive services, from audits to optimization.</li>
                <li>Client satisfaction and retention rate of over 95%.</li>
              </ul>
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

export default SeoStratergyForm;
