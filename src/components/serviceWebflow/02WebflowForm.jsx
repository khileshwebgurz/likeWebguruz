import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WebflowForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice webflow-form py-5"
        id="webflow-dev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Build Stunning,{" "}
                <strong> High-Performance Websites with Webflow</strong>
              </h2>
              <p className="color-wt">
                Looking for a powerful, no-code website solution that doesn&apos;t
                compromise on customization? Our Webflow development services
                empower businesses with pixel-perfect, dynamic, and SEO-friendly
                websites tailored to their unique needs. With years of
                experience and a dedicated team, we create sites that load fast,
                perform well on search engines, and provide an engaging user
                experience. Let’s bring your website to life- contact us today
                to get started!
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

export default WebflowForm;
