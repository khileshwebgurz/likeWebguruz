import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WixForm = () => {
  return (
    <>
      <section className="ppcbannerservice wix-form py-5" id="wix-dev-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Create Stunning Websites with{" "}
                <strong>Our Wix Development Services</strong>
              </h2>
              <p className="color-wt">
                Imagine a website that stands out, loads fast, and converts
                visitors into customers. That’s exactly what we deliver at
                WebGuruz Technologies Pvt Ltd. With our Wix experts, you get a
                website that is stunning, functional, and easy to manage. We
                help businesses establish a strong online presence, ensuring a
                seamless user experience that keeps visitors engaged. Whether
                you need an eCommerce store, a portfolio site, or a corporate
                website, we make it happen. Our Wix solutions are tailored to
                your needs, ensuring your site is mobile-friendly and optimized
                for search engines. Call us today and let’s build a website that
                drives results!
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

export default WixForm;
