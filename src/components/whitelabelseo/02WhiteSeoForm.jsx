import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WhiteSeoForm = () => {
  return (
    <>
      <section className="ppcbannerservice white-seo-form py-5" id="white-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Enhance Your reputation as a{" "}
                <strong>Trusted Digital Marketing Partner</strong>
              </h2>
              <p className="color-wt">
                Our White Label SEO services help businesses scale their digital
                marketing efforts while saving time and resources. By partnering
                with us, businesses can offer their clients professional SEO
                services, improve website rankings, and drive more traffic to
                their sites. This allows them to focus on growing their business
                and expanding their customer base. Trust our team to help you
                build a competitive edge, and offer more value. Connect with us
                to discover ways we can help!
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

export default WhiteSeoForm;
