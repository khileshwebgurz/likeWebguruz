import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const KeapForm = () => {
  return (
    <>
      <section className="ppcbannerservice keap-form py-5" id="keap-dev-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Transform Your Business with{" "}
                <strong> Expert Keap Web Development Services</strong>
              </h2>
              <p className="color-wt">
                Imagine having a sales and marketing ecosystem that works
                tirelessly for you 24/7, capturing leads, nurturing prospects,
                and closing deals while you focus on growing your business. Our
                Keap development services make this a reality by creating custom
                solutions tailored to your specific needs. We don&apos;t just
                build tools; we create comprehensive systems that automate your
                workflows, personalize your customer interactions, and provide
                valuable insights into your business performance. Don&apos;t let
                technical limitations hold your business back- call us today to
                discover how our Keap development services can transform your
                business operations.
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

export default KeapForm;
