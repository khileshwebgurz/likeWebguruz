import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SoftTestForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice software-testing-form py-5"
        id="softwaretest-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Transform Your Software Quality{" "}
                <strong>and Boost Customer Satisfaction</strong>
              </h2>
              <p className="color-wt">
                Want to stop losing customers because of software bugs? Our
                software testing services can help you deliver reliable,
                high-quality applications that your users will trust. By finding
                and fixing issues early in the development process, we help you
                save time and money while improving customer satisfaction. Our
                team of expert testers will thoroughly examine your software
                from every angle, ensuring it works perfectly across all devices
                and platforms.
              </p>
              <p className="color-wt">
                Don&apos;t let software bugs damage your reputation or cost you
                valuable customers. Call WebGuruz Technologies today to learn
                how our testing services can transform your software quality and
                give your business a competitive edge.
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

export default SoftTestForm;
