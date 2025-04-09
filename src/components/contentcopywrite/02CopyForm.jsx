import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const CopyForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice seo-copywriting-form py-5"
        id="copywriting-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                <strong> Transform Your Content, </strong> Dominate Search
                Rankings
              </h2>
              <p className="color-wt">
                Imagine transforming your website from an invisible digital
                entity to a magnetic online powerhouse that attracts, engages,
                and converts your target audience. Our SEO copywriting services
                are meticulously designed to skyrocket your online visibility,
                driving unprecedented organic traffic directly to your business.
                We don&apos;t just write content; we craft strategic narratives that
                speak directly to your ideal customers while simultaneously
                signaling search engines about your relevance and authority.
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

export default CopyForm;
