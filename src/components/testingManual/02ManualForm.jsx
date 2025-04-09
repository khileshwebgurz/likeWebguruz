import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const ManualForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice manual-test-form py-5"
        id="manualtest-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Quality Assurance That{" "}
                <strong> Delivers Perfect Results</strong>
              </h2>
              <p className="color-wt">
                Don&apos;t let hidden bugs ruin your customer experience. Our manual
                testing team finds the issues your automated tests miss,
                ensuring your software performs exactly as intended. By
                thoroughly testing your application from a user&apos;s perspective,
                we help you deliver a polished product that builds trust and
                loyalty. Our clients typically see a 40% reduction in
                post-launch issues and significant improvements in user
                satisfaction.
              </p>
              <p className="color-wt">
                Ready to deliver exceptional software quality? Call us today to
                discuss how our manual testing services can transform your
                development process.
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

export default ManualForm;
