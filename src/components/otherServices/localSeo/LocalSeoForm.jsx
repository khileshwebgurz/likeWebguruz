import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const LocalSeoForm = () => {
  return (
    <>
      <section className="ppcbannerservice py-5" id="local-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
                Drive Local Traffic with Proven{" "}
                <strong>local SEO services! </strong>
              </h2>
              <p className="color-wt">
                Want to dominate the local market? Our local SEO services are
                designed to help you rank higher on Google and attract nearby
                customers. With the right local SEO strategy, we make sure your
                business stands out.
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

export default LocalSeoForm;
