import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WordMaintainForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice wordpress-maintain-form  py-5"
        id="wordmaintain-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Ensure Your Website Stays{" "}
                <strong> Secure, Fast, and Error-Free</strong>
              </h2>
              <p className="color-wt">
                Imagine having a website that works flawlessly, loads quickly,
                and remains safe from security threats- all without lifting a
                finger. That’s exactly what we deliver at WebGuruz Technologies
                Pvt Ltd. Our maintenance and support services ensure regular
                updates to prevent security vulnerabilities, faster website
                loading speeds to enhance user experience and SEO rankings, and
                proactive monitoring to detect and fix issues before they impact
                your business.
              </p>
              <p className="color-wt">
                We provide quick resolution of website bugs and technical
                errors, seamless plugin and theme updates to ensure
                compatibility and 24/7 support from experienced WordPress
                developers. With our team managing your website, you can have
                peace of mind knowing it’s in expert hands. If you want a
                worry-free website experience, call us today and let our experts
                handle your WordPress maintenance.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 formppc hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordMaintainForm;
