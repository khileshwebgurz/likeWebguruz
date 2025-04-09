import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const SmmForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice social-media-management-form py-5"
        id="smm-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                <strong> Unleash Your Business&apos;s </strong> Full Digital
                Potential
              </h2>
              <p className="color-wt">
                Picture a digital landscape where your social media channels
                become powerful revenue-generating machines, working tirelessly
                to amplify your brand&apos;s message and drive meaningful business
                outcomes. Our social media management services are meticulously
                designed to transform your online presence from mundane to
                magnificent. We dive deep into your brand&apos;s unique ecosystem,
                understanding your goals, challenges, and target audience to
                develop a customized strategy that delivers exceptional results
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

export default SmmForm;
