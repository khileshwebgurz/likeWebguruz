import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DevEcomConsultForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommmerce-consulting-form py-5"
        id="ecom-consult-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                <strong> Certified eCommerce Consulting Services </strong> for
                Business Growth
              </h2>
              <p className="color-wt">
                Maximize your eCommerce growth with WebGuruz’s expert consulting
                services. Our team will help you unlock new revenue streams,
                optimize your operations, and stay ahead of market trends,
                ensuring you deliver an exceptional customer experience. Don’t
                wait- contact us today to start achieving your eCommerce goals
                with proven strategies.
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

export default DevEcomConsultForm;
