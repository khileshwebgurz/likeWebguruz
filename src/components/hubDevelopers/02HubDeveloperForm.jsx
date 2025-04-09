import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const HubDeveloperForm = () => {
  return (
    <>
      <section
        className="ppcbannerservice hub-developer-form py-5"
        id="hub-developer-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
                Empower Your Business with Our <strong> Expert HubSpot Developers</strong>
              </h2>
              <p className="color-wt">
              WebGuruz’s HubSpot developers bring a wealth of experience and expertise to your business. From integrating third-party applications to building custom modules, we help you unlock new possibilities within the HubSpot ecosystem. Whether you need to streamline your marketing, sales, or customer service processes, we can make it happen. Let’s create solutions that fuel your growth and success.
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

export default HubDeveloperForm;
