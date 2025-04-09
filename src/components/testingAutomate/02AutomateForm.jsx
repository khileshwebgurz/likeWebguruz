import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const AutomateForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice automation-form py-5"
        id="autotesting-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Revolutionize Your Software{" "}
                <strong> Testing with Smart Automation Solutions</strong>
              </h2>
              <p className="color-wt">
                Our testing automation services can drastically cut down your
                testing time and costs while improving overall product quality.
                Instead of spending weeks on manual testing, our automated
                solutions can complete the same tasks in hours with greater
                accuracy. This means you can release new features and updates
                faster, giving you an edge over your competitors.
              </p>
              <p className="color-wt">
                Our clients typically see a 70% reduction in testing time and a
                60% decrease in post-release bugs. The return on investment is
                clear - better products, happier customers, and higher profits.
                Don&apos;t let inefficient testing hold your business back.
              </p>
              <p className="color-wt">
                Call us today to discover how our automation solutions can
                transform your testing process.
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

export default AutomateForm;
