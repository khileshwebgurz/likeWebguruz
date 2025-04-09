import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const BigComForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice bigcommerce-development-form py-5"
        id="bigcom-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Build, Scale, and Succeed with{" "}
                <strong> Our BigCommerce Development Expertise</strong>
              </h2>
              <p className="color-wt">
                Do you want to boost your online sales, enhance customer
                experience, and gain a competitive edge? Our BigCommerce experts
                help businesses like yours build stunning, fully functional, and
                conversion-optimized eCommerce websites. We create custom
                themes, integrate third-party applications, and ensure your
                store operates flawlessly on all devices. Our goal is to
                simplify your eCommerce operations while maximizing sales. Don’t
                let complex development challenges slow you down-call WebGuruz
                Technologies today and let’s transform your vision into a
                revenue-generating online store!
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

export default BigComForm;
