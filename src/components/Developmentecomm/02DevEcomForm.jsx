import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const DevEcomForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice ecommerce-development-form  py-5"
        id="ecomdev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Transform Your Online Business with{" "}
                <strong>
                  Professional eCommerce Website Development Services{" "}
                </strong>
              </h2>
              <p className="color-wt">
                WebGuruz’s eCommerce development services offer an unbeatable
                combination of expertise, quality, and customer-focused
                solutions. With years of experience, we guarantee a seamless,
                professional, and fully functional online store built to enhance
                your business success. Whether you&apos;re a startup or an
                established brand, our services are designed to scale with your
                needs. Get in touch with us today to turn your vision into
                reality!
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

export default DevEcomForm;
