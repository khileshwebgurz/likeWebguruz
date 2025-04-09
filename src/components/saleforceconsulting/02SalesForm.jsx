import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SalesForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice salesforce-consult-form py-5"
        id="salesforce-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Transform Your Business Operations{" "}
                <strong>with Our Tailored Salesforce Solutions</strong>
              </h2>
              <p className="color-wt">
                The right Salesforce implementation can completely change how
                your business operates. Imagine having all your customer data in
                one place, sales teams working with accurate information, and
                marketing campaigns that actually reach the right people. Our
                Salesforce consulting services make this possible. We&apos;ve helped
                countless businesses across India increase their sales by up to
                29%, reduce operational costs, and significantly improve
                customer satisfaction rates. Why struggle with outdated systems
                when a simple call to WebGuruz can set you on the path to
                digital transformation? Contact us today for a free consultation
                and see how we can help your business grow with Salesforce.
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

export default SalesForm;
