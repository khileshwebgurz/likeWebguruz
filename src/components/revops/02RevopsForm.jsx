import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const RevopsForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice revops-form py-5"
        id="revenue-op-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Drive Growth,{" "}
                <strong>Boost Efficiency, and Maximize Revenue</strong>
              </h2>
              <p className="color-wt">
                Imagine a business where your teams work in sync, leads don’t
                slip through the cracks, and revenue forecasting is accurate.
                That’s the power of RevOps. Our services help you improve
                conversion rates, shorten sales cycles, and enhance customer
                retention. We identify bottlenecks in your processes and
                eliminate inefficiencies that hold back growth. With automation,
                data-driven insights, and strategic alignment, we set your
                business up for long-term success. Want to see real results?
                Call us today and transform the way you generate revenue!
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

export default RevopsForm;
