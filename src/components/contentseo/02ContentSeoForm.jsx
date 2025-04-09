import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const ContentSeoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice content-form  py-5"
        id="content-seo-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                High-Quality SEO Content Tailored for Your Success
                <br />
                <strong>Boost Your Online Presence</strong>
              </h2>
              <p className="color-wt">
                With our SEO Content Writing Services, your business can rank
                higher on search engines, attract more organic traffic, and
                convert visitors into loyal customers. High-quality content
                helps establish your authority in your niche and builds trust
                with your audience, making it an essential investment for any
                growing business.
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

export default ContentSeoForm;
