import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const LoadTestForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice load-test-consulting-form py-5"
        id="loadconsult-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                Transform Your{" "}
                <strong>Website Performance and User Experience Today</strong>
              </h2>
              <p className="color-wt">
                Our comprehensive load testing services reveal hidden
                performance issues that could be costing you customers and
                revenue. When your website slows down under heavy traffic, users
                leave - it&apos;s that simple. Studies show that even a 1-second
                delay in page load time can reduce conversions by 7%. Our
                detailed testing identifies exactly where your website struggles
                under pressure, giving you clear solutions to fix these issues
                before they impact your business.
              </p>
              <p className="color-wt">
                Don&apos;t wait for customer complaints or lost sales to address
                performance problems. Contact WebGuruz today for a free
                consultation and discover how our load-testing expertise can
                transform your website&apos;s reliability and speed when it matters
                most.
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

export default LoadTestForm;
