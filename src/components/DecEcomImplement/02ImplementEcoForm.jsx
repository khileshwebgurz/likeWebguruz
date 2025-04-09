import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const ImplementEcoForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommerce-implement-form  py-5"
        id="ecom-imply-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Empower Your Business with{" "}
                <strong>Expert eCommerce Implementation Solutions</strong>
              </h2>
              <p className="color-wt">
                When you choose WebGuruz for your eCommerce implementation,
                you&apos;re partnering with a trusted leader in the industry. We
                understand the complexities of the eCommerce landscape and
                provide a comprehensive approach that includes platform
                selection, integration, and optimization to ensure your business
                thrives online. Our experts are certified and ready to support
                you through every step of the implementation journey. With our
                proven track record, we help businesses increase efficiency,
                boost revenue, and scale their online presence. Don’t wait- get
                in touch with us today to see how we can help transform your
                eCommerce business.
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

export default ImplementEcoForm;
