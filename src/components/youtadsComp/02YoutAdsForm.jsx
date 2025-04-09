import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const YoutAdsForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice youtube-ads-form py-5"
        id="youtads-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                YouTube Advertising Solutions to{" "}
                <strong> Boost Your Brand Visibility</strong>
              </h2>
              <p className="color-wt">
                YouTube advertising offers a powerful platform to elevate your
                brand&apos;s visibility and connect with a vast, engaged audience.
                Leverage TrueView ads to target users who are genuinely
                interested in your content, or use bumper ads for concise,
                impactful messaging that leaves a lasting impression. By
                integrating YouTube advertising into your marketing strategy,
                you can amplify brand awareness, drive website traffic, and
                achieve measurable results that propel your business forward.
                Contact us to get started!
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

export default YoutAdsForm;
