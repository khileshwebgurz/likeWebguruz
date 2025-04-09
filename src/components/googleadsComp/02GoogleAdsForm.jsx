import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const GoogleAdsForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice google-ads-form py-5"
        id="google-ad-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Why Choose Us for <strong>Google Ads?</strong>
              </h2>
              <p className="color-wt">
                We are dedicated to helping your business succeed with expertly
                crafted Google Ads campaigns that get results. Our experienced
                team works closely with you to understand your goals, target the
                right audience, and drive quality traffic. Let us take care of
                the technical details while you focus on running your business.
              </p>
              <ul>
                <li>Expertise in creating tailored Google Ads campaigns.</li>
                <li>
                  Proven track record in increasing leads and conversions.
                </li>
                <li>Focus on driving ROI.</li>
                <li>Transparent reporting.</li>
                <li>Regular updates and adjustments.</li>
              </ul>
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

export default GoogleAdsForm;
