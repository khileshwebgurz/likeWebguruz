import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const HubServicesForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice hub-services-form py-5"
        id="hub-services-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
              Make a Smart Choice{" "}
                <strong>with HubSpot</strong>
              </h2>
              <p className="color-wt">
              Partnering with WebGuruz allows access to industry-leading HubSpot solutions designed to boost revenue, foster customer loyalty, and drive operational efficiency. With years of experience in marketing automation, we provide businesses with strategic insights and hands-on support to maximize HubSpot’s potential.<br/>
              Trust our seasoned team to help you optimize your HubSpot journey- connect with us today to transform your business processes.
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

export default HubServicesForm;
