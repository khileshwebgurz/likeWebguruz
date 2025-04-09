import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const RmmForm = () => {
  return (
    <>
      <section className="ppcbannerservice remote-management-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
              Streamline IT Operations with {" "}
                <strong> Our Certified RMM Solutions</strong>
              </h2>
              <p className="color-wt">
              Imagine running your business without worrying about IT failures, security breaches, or performance lags. Our RMM services give you real-time visibility, automate issue resolution, and keep your IT systems operating at peak performance.

              </p>
              <p className="color-wt">
              As a certified RMM services provider, WebGuruz ensures your IT systems run smoothly, securely, and efficiently- all while reducing costs and eliminating the hassle of manual monitoring.
              </p>
              <p className="color-wt">
              Don’t wait for IT issues to disrupt your operations. Partner with WebGuruz today and experience seamless IT management. Call us now!
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

export default RmmForm;
