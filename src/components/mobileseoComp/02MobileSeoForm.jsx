import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const MobileSeoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice mobile-form py-5"
        id="mobile-seo-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Offer Seamless User <strong>Experience with Mobile SEO</strong>
              </h2>
              <p className="color-wt">
                SEO content unlocks a world of opportunities for businesses. By
                optimizing your website with targeted keywords and high-quality
                content, you can rank higher on search engines, reach more
                customers, and increase conversions. Whether it’s building brand
                awareness, enhancing user engagement, or driving more sales,
                Mobile SEO makes it possible.
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

export default MobileSeoForm;
