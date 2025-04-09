import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const InternetSeoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice international-form py-5"
        id="internet-seo-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                #1 Ranked <strong>International SEO Agency</strong>
              </h2>
              <p className="color-wt">
                Boost Your Global Reach with Expert International SEO Services.
                Request a Quote and Expand Globally Today!
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

export default InternetSeoForm;
