import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const WordpressForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice wordpress-form py-5"
        id="wordpress-dev-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Build a Powerful Online Presence with{" "}
                <strong> Our WordPress CMS Development Services</strong>
              </h2>
              <p className="color-wt">
                A well-developed WordPress website can transform your online
                presence and help you achieve your business goals. From startups
                to enterprises, we empower businesses with a feature-rich,
                scalable, and highly functional website. Our development process
                ensures that your website is secure, optimized, and easy to
                manage, so you can focus on growing your business. Want to take
                your website to the next level? Call us today!
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

export default WordpressForm;
