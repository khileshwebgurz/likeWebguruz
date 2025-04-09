import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WhitePpcForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice white-ppc-form py-5"
        id="whiteppc-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Drive Results with{" "}
                <strong> Certified White Label PPC Experts!</strong>
              </h2>
              <p className="color-wt">
                When you partner with WebGuruz, you gain instant access to a
                team of certified PPC experts who work tirelessly to create,
                manage, and optimize campaigns that generate leads, drive
                traffic, and boost revenue. With our White Label PPC services,
                you can:
              </p>
              <ul>
                <li>Save time and resources.</li>
                <li>Ensure high-quality campaigns under your brand.</li>
                <li>
                  Focus on scaling your business while we handle the
                  nitty-gritty.
                </li>
              </ul>
              <p className="color-wt">Contact us today to supercharge your PPC strategy!</p>
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

export default WhitePpcForm;
