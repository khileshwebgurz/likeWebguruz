import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DesignEcomForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommerce-design-form  py-5"
        id="ecomdesigining-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Captivate Audiences and Drive{" "}
                <strong>Revenue with WebGuruz&apos;s Design Expertise</strong>
              </h2>
              <p className="color-wt">
                Whether you’re looking to refresh your online presence or build
                an eCommerce platform from scratch, WebGuruz has the expertise
                to make it happen. Our commitment to excellence and customer
                satisfaction is why businesses across the globe trust us with
                their digital growth. Don’t wait- call us today and take the
                first step towards transforming your online business.
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

export default DesignEcomForm;
