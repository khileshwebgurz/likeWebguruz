import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const PardotForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice pardot-consult-form py-5"
        id="pardotconsult-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Realize your <strong>Marketing Potential with Pardot</strong>
              </h2>
              <p className="color-wt">
                Imagine a marketing ecosystem where every interaction is
                precisely tracked, every lead is perfectly nurtured, and your
                sales team receives only the most qualified prospects. Our
                Pardot consulting services make this a reality. We don&apos;t just
                implement a tool; we create a comprehensive marketing
                transformation that aligns your technology with your business
                goals. Our clients experience remarkable improvements in lead
                generation, conversion rates, and marketing ROI. By integrating
                advanced automation, personalized communication strategies, and
                intelligent lead scoring, we ensure your marketing efforts are
                not just efficient, but extraordinary. The result? A marketing
                machine that works tirelessly, generating more revenue with less
                effort, and giving you a competitive edge that sets you apart in
                your industry.
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

export default PardotForm;
